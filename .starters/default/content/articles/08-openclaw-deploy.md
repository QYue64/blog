---
title: OpenClaw 部署教程
description: OpenClaw AI 助手部署指南
cover: "https://img.mxai.eu.cc/imgs/cover_1776321288087_1776321288.jpg"
date: 2026-03-31
---

# OpenClaw 部署教程

OpenClaw 是一个自托管的 AI 助手网关，支持 WhatsApp、Telegram、Discord 等消息渠道。

## 快速开始

### 1. 安装

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 2. 新手引导

```bash
openclaw onboard --install-daemon
```

### 3. 启动网关

```bash
openclaw gateway --port 18789
```

### 4. 访问控制台

打开浏览器访问 http://127.0.0.1:18789/

## 渠道配置

### WhatsApp

```bash
openclaw channels login
```

扫描二维码完成配对。

### Telegram

在 BotFather 创建机器人，获取 Token 后配置。

## 更多信息

- 官方文档：https://docs.openclaw.ai
- GitHub：https://github.com/openclaw/openclaw
