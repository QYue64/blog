# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Nuxt 的博客项目，使用 Alpine 主题。博客内容使用 Markdown 编写，通过 `@nuxt/content` 模块管理。

## 常用命令

```bash
pnpm dev        # 启动开发服务器
pnpm generate   # 生成静态站点（用于部署）
pnpm build      # 构建生产版本
pnpm lint       # 代码检查
pnpm prepare    # 生成类型声明
```

## 目录结构

- `.starters/default/content/` — 博客文章（Markdown 文件）
- `.starters/default/nuxt.config.ts` — 主题配置
- `components/` — Vue 组件
- `layouts/` — 布局组件
- `app.config.ts` — 应用配置（站点标题、社交链接等）

## 部署

项目配置了 GitHub Actions 自动部署：
- 推送到 `main` 分支自动触发构建
- 构建产物部署到 `gh-pages` 分支
- 访问地址：`https://QYue64.github.io/blog/`

本地构建后产物位于 `.starters/default/.output/public/`

## 内容写作

文章使用 MDC（Markdown Components）语法，可以在 Markdown 中使用 Vue 组件。使用文件名前缀数字（如 `01-`、`02-`）控制文章排序。
