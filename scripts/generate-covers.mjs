import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.join(__dirname, '../.starters/default/content/articles');

// MiniMax API 配置
const API_KEY = 'sk-cp-UfpimvMN4nOkI26RdUxHrXziuAnVvYVCK9kmrR2j78UBqbm2pSjYnXOnu6rnm127c4lS0H61CwfQaeokvPjAW99Fx23sXxTwbtAf8saQyAAlDnbyZcuE4BA';
const API_URL = 'https://api.minimaxi.com/v1/image_generation';

const MODEL = 'image-01';

/**
 * 调用 MiniMax 文生图 API
 * @param {string} prompt - 图片描述
 * @returns {Promise<string>} - 返回图片 URL
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

  // 检查业务状态码
  if (data.base_resp?.status_code !== 0) {
    const msg = data.base_resp?.status_msg || data.error?.message || '未知错误';
    throw new Error(`API 业务错误: ${msg}`);
  }

  const urls = data.data?.image_urls || [];
  return urls[0];
}

/**
 * 解析文章 frontmatter
 * @param {string} content - 文件完整内容
 * @returns {{ frontmatter: object, body: string, raw: string }}
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
      // 移除引号
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
 * @param {string} filePath - 文件路径
 * @param {string} newCover - 新的 cover URL
 */
function updateCover(filePath, newCover) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatter(content);

  frontmatter.cover = newCover;

  // 重建 frontmatter 字符串
  const fmLines = Object.entries(frontmatter).map(([k, v]) => {
    // 如果值包含特殊字符，需要加引号
    if (v.includes(':') || v.includes('#') || v.includes('"')) {
      return `${k}: "${v.replace(/"/g, '\\"')}"`;
    }
    return `${k}: ${v}`;
  });

  const newContent = `---\n${fmLines.join('\n')}\n---\n${body}`;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✓ 已更新: ${path.basename(filePath)}`);
}

/**
 * 生成文章摘要作为 prompt
 * @param {string} title - 文章标题
 * @param {string} body - 文章正文
 * @returns {string} - 用于生成图片的 prompt
 */
function generatePrompt(title, body) {
  // 移除代码块
  let text = body.replace(/```[\s\S]*?```/g, '');
  // 移除链接
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // 移除图片
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  // 移除标题标记
  text = text.replace(/^#+\s*/gm, '');
  // 移除粗体斜体
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1');
  // 移除 HTML 标签
  text = text.replace(/<[^>]+>/g, '');
  // 移除多余空行
  text = text.replace(/\n{3,}/g, '\n\n');
  // 取前 500 个字符
  text = text.trim().slice(0, 500);

  return `${title}，${text}`;
}

async function main() {
  // 获取所有文章
  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md'))
    .sort();

  console.log(`找到 ${files.length} 篇文章\n`);

  for (const file of files) {
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, body } = parseFrontmatter(content);

    const title = frontmatter.title || '无标题';

    // 如果已经有 cover，跳过
    if (frontmatter.cover && !frontmatter.cover.includes('baidu.com')) {
      console.log(`⏭ 跳过 (已有封面): ${title}`);
      continue;
    }

    console.log(`\n处理: ${title}`);

    try {
      const prompt = generatePrompt(title, body);
      console.log(`Prompt: ${prompt.slice(0, 100)}...`);

      const imageUrl = await generateImage(prompt);

      if (imageUrl) {
        updateCover(filePath, imageUrl);
        console.log(`封面: ${imageUrl}`);
      } else {
        console.log(`✗ 未返回图片 URL`);
      }

      // 避免请求过快
      await new Promise(r => setTimeout(r, 2000));
    } catch (error) {
      console.error(`✗ 错误: ${error.message}`);
    }
  }

  console.log('\n完成!');
}

main().catch(console.error);
