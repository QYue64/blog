# GitHub Pages 部署指南

## 自动部署（已配置）

项目已使用 `studio.yml` 工作流自动部署到 GitHub Pages。

### 工作流程：

每次推送到 `main` 分支时会自动：
1. 安装 Node.js 18 和 pnpm 8
2. 安装项目依赖
3. 运行 `nuxi generate` 构建静态站点
4. 自动部署 `.output/public` 目录到 `gh-pages` 分支
5. GitHub Pages 会自动从 `gh-pages` 分支提供服务

### 步骤：

1. **在 GitHub 仓库启用 Pages**
   - 打开 https://github.com/QYue64/blog/settings/pages
   - 在 "Build and deployment" 部分：
     - Source: 选择 "GitHub Actions"（如果可用）
     - 或者使用 Branch: 选择 `gh-pages` 分支，文件夹选择 `/ (root)`

2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "更新内容"
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

或者在 GitHub Actions 工作流中设置环境变量。

### GitHub Actions 工作流

工作流文件位于：`.github/workflows/studio.yml`

它会在每次推送到 `main` 分支时：
1. 安装 Node.js 18 和 pnpm 8
2. 安装依赖
3. 执行 `nuxi generate` 构建静态站点
4. 添加 `.nojekyll` 文件（防止 GitHub Pages 忽略某些文件）
5. 使用 `JamesIves/github-pages-deploy-action` 部署到 `gh-pages` 分支

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
