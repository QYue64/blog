# GitHub Pages 部署指南

## 自动部署（推荐）

项目已配置 GitHub Actions 工作流，每次推送到 `main` 分支时会自动部署到 GitHub Pages。

### 步骤：

1. **在 GitHub 仓库启用 Pages**
   - 打开 https://github.com/QYue64/blog/settings/pages
   - 在 "Build and deployment" 部分：
     - Source: 选择 "GitHub Actions"

2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "准备部署到 GitHub Pages"
   git push origin main
   ```

3. **等待自动部署**
   - GitHub Actions 会自动运行构建和部署
   - 在 https://github.com/QYue64/blog/actions 查看进度
   - 部署完成后，你的网站将可以通过以下地址访问：
     - https://QYue64.github.io/blog/

## 手动部署

如果你想本地构建后手动上传：

### 1. 构建项目
```bash
pnpm generate
```

构建产物在：`.starters/default/.output/public/`

### 2. 使用 gh-pages 包部署

```bash
# 安装 gh-pages
pnpm add -D gh-pages

# 部署到 gh-pages 分支
pnpm dlx gh-pages -d .starters/default/.output/public
```

### 3. 或者使用 Git 手动推送

```bash
# 切换到 gh-pages 分支
git checkout --orphan gh-pages

# 删除所有文件
git rm -rf .

# 复制构建产物
cp -r .starters/default/.output/public/* .

# 提交并推送
git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages
```

## 配置说明

### 环境变量

如果需要自定义基础路径（例如部署到子目录），可以在构建前设置：

```bash
export NUXT_APP_BASE_URL=/blog/
pnpm generate
```

### GitHub Actions 工作流

工作流文件位于：`.github/workflows/pages.yml`

它会在每次推送到 `main` 分支时：
1. 安装 Node.js 和 pnpm
2. 安装依赖
3. 执行 `pnpm generate` 构建静态站点
4. 自动部署到 GitHub Pages

## 访问地址

部署成功后，你的博客将可以通过以下地址访问：

- **主域名**: https://QYue64.github.io/blog/
- **自定义域名**: 如果你在 GitHub Pages 设置中配置了自定义域名

## 注意事项

1. **仓库名称**: 如果仓库名是 `username.github.io`，则必须部署到 `main` 分支
2. **仓库名不是 username.github.io**: 需要部署到 `gh-pages` 分支或使用 GitHub Actions
3. **基础路径**: 如果部署到 `https://username.github.io/repo-name/`，需要设置 `NUXT_APP_BASE_URL=/repo-name/`

## 更新内容

每次更新内容后：

```bash
git add .
git commit -m "更新文章内容"
git push origin main
```

GitHub Actions 会自动重新构建并部署，通常 1-2 分钟内完成。
