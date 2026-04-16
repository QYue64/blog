import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.join(__dirname, '../.starters/default/content/articles');
const IMG_UPLOAD_SCRIPT = path.join(__dirname, './img_upload.sh');

// MiniMax API 配置
const API_KEY = process.env.MINIMAX_API_KEY || '';
if (!API_KEY) {
  console.error('请设置环境变量 MINIMAX_API_KEY');
  process.exit(1);
}
const API_URL = 'https://api.minimaxi.com/v1/image_generation';
const MODEL = 'image-01';

/**
 * 调用 MiniMax 文生图 API
 */
async function generateImage(prompt) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: prompt,
      aspect_ratio: '16:9',
      n: 1,
      response_format: 'url',
      prompt_optimizer: false,
      aigc_watermark: false
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API 请求失败: ${response.status} - ${error}`);
  }

  const data = await response.json();

  if (data.base_resp?.status_code !== 0) {
    const msg = data.base_resp?.status_msg || data.error?.message || '未知错误';
    throw new Error(`API 业务错误: ${msg}`);
  }

  const urls = data.data?.image_urls || [];
  return urls[0];
}

/**
 * 下载图片到临时文件
 */
async function downloadImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`下载图片失败: ${response.status}`);
  }
  const buffer = await response.arrayBuffer();
  const tmpPath = `/tmp/cover_${Date.now()}.jpg`;
  fs.writeFileSync(tmpPath, Buffer.from(buffer));
  return tmpPath;
}

/**
 * 使用 img_upload.sh 上传图片
 */
function uploadWithScript(imagePath) {
  try {
    const result = execSync(`bash "${IMG_UPLOAD_SCRIPT}" "${imagePath}"`, {
      encoding: 'utf-8',
      timeout: 30000
    });
    const match = result.match(/!\[[^\]]+\]\(([^)]+)\)/);
    if (match) {
      return match[1];
    }
    return result.trim();
  } catch (error) {
    throw new Error(`上传失败: ${error.message}`);
  }
}

/**
 * 解析文章 frontmatter
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: content, raw: content };
  }

  const [, fmContent, body] = match;
  const frontmatter = {};

  fmContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const k = key.trim();
      let v = valueParts.join(':').trim();
      if (v.startsWith('"') && v.endsWith('"')) {
        v = v.slice(1, -1);
      } else if (v.startsWith("'") && v.endsWith("'")) {
        v = v.slice(1, -1);
      }
      frontmatter[k] = v;
    }
  });

  return { frontmatter, body, raw: content };
}

/**
 * 更新文章的 cover 字段
 */
function updateCover(filePath, newCover) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(content);

  frontmatter.cover = newCover;

  const fmLines = Object.entries(frontmatter).map(([k, v]) => {
    if (v.includes(':') || v.includes('#') || v.includes('"')) {
      return `${k}: "${v.replace(/"/g, '\\"')}"`;
    }
    return `${k}: ${v}`;
  });

  const newContent = `---\n${fmLines.join('\n')}\n---\n${body}`;
  fs.writeFileSync(filePath, newContent, 'utf-8');
}

/**
 * 生成文章摘要作为 prompt
 */
function generatePrompt(title, body) {
  let text = body.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  text = text.replace(/^#+\s*/gm, '');
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim().slice(0, 500);

  return `${title}，${text}`;
}

async function main() {
  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`找到 ${files.length} 篇文章\n`);

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    const title = frontmatter.title || '无标题';

    // 如果已经有 CDN cover，跳过
    if (frontmatter.cover && frontmatter.cover.includes('img.mxai.eu.cc')) {
      console.log(`⏭ 跳过 (已有 CDN 封面): ${title}`);
      continue;
    }

    console.log(`\n处理: ${title}`);

    try {
      const prompt = generatePrompt(title, body);
      console.log(`  生成图片...`);

      const imageUrl = await generateImage(prompt);
      console.log(`  MiniMax URL: ${imageUrl.slice(0, 80)}...`);

      // 下载图片
      console.log(`  下载图片...`);
      const tmpPath = await downloadImage(imageUrl);

      // 上传到 CDN
      console.log(`  上传到 CDN...`);
      const cdnUrl = uploadWithScript(tmpPath);
      console.log(`  CDN URL: ${cdnUrl}`);

      // 清理临时文件
      fs.unlinkSync(tmpPath);

      // 更新文章
      updateCover(filePath, cdnUrl);
      console.log(`✓ 已更新: ${title}`);

      // 避免请求过快
      await new Promise(r => setTimeout(r, 2000));
    } catch (error) {
      console.error(`✗ 错误: ${error.message}`);
    }
  }

  console.log('\n完成!');
}

main().catch(console.error);
