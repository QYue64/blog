---
title: OpenClaw 部署完整教程
description: 从零开始部署 OpenClaw AI 助手，支持 WhatsApp、Telegram、Discord 等多渠道消息接入
cover: https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/wap720/006PuDzUgy1ht19c4fa4hj31z418ghdt.jpg
date: 2026-03-31
---

# OpenClaw 部署完整教程

> OpenClaw 是一个自托管的 AI 助手网关，可以将 WhatsApp、Telegram、Discord、iMessage 等聊天应用连接到 AI 智能体。

## 什么是 OpenClaw？

OpenClaw 是一个**自托管网关**，它将你喜欢的聊天应用与 AI 编程智能体（如 Pi、Claude Code 等）连接起来。你可以在任何地方通过消息与 AI 助手对话，无需依赖托管服务。

### 核心特点

- **自托管**：运行在你的硬件上，数据完全可控
- **多渠道**：单个网关同时支持 WhatsApp、Telegram、Discord 等
- **智能体原生**：支持工具调用、会话管理、记忆功能和多智能体路由
- **开源**：MIT 许可，社区驱动

### 工作原理

聊天应用通过 Gateway 网关连接到 AI 智能体。Gateway 同时提供 Web 控制台、CLI 和移动节点支持。

---

## 系统要求

- **Node.js 22+**（安装脚本会自动检测并安装）
- macOS、Linux 或 Windows（Windows 推荐使用 WSL2）
- 如果使用 pnpm 从源码构建，需要安装 pnpm

> **提示**：在 Windows 上，强烈建议使用 [WSL2](https://learn.microsoft.com/zh-cn/windows/wsl/install) 运行 OpenClaw。

---

## 安装方法

### 方法一：安装脚本（推荐）

这是最简单的方式，会自动处理 Node.js 检测、安装和新手引导。

#### macOS / Linux / WSL2

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

#### Windows (PowerShell)

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

如果只想安装 CLI 而不启动新手引导：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash -s -- --no-onboard
```

### 方法二：npm / pnpm 安装

如果你已经安装了 Node.js 22+，可以直接使用 npm 或 pnpm 安装。

#### npm 安装

```bash
npm install -g openclaw@latest
```

如果遇到 `sharp` 构建错误（macOS 常见）：

```bash
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g openclaw@latest
```

#### pnpm 安装

```bash
pnpm add -g openclaw@latest
pnpm approve-builds -g  # 批准需要构建脚本的包
```

> **注意**：pnpm 需要明确批准带有构建脚本的包。首次安装后会出现 "Ignored build scripts" 警告，运行 `pnpm approve-builds -g` 并选择列出的包即可。

### 方法三：从源码安装（开发者）

适合贡献者或需要运行本地 checkout 的用户。

```bash
# 1. 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 2. 安装依赖并构建
pnpm install
pnpm ui:build  # 首次运行会自动安装 UI 依赖
pnpm build

# 3. 全局链接 CLI
pnpm link --global

# 4. 运行新手引导
openclaw onboard --install-daemon
```

---

## 新手引导配置

安装完成后，运行新手引导向导：

```bash
openclaw onboard --install-daemon
```

向导会引导你完成以下配置：

### 1. 选择网关类型

- **本地网关**：在你的个人电脑上运行
- **远程网关**：在服务器上运行（VPS、云服务器等）

### 2. 认证配置

选择 AI 模型的认证方式：

- **OpenAI Code (Codex) 订阅**：使用 OAuth 认证（推荐）
- **API 密钥**：直接输入 Anthropic API Key 等

> **提示**：对于 Anthropic，推荐使用 API 密钥；也支持 `claude setup-token`。

### 3. 渠道配置

选择要连接的消息渠道：

- **WhatsApp**：QR 码登录
- **Telegram**：Bot Token
- **Discord**：Bot Token
- **Mattermost**：插件令牌

### 4. 守护进程设置

- **运行时**：选择 Node（推荐）或 Bun
  - ⚠️ **注意**：如果使用 WhatsApp 或 Telegram，必须使用 **Node**，Bun 存在已知问题
- **后台安装**：选择是否安装为系统服务（launchd/systemd）

### 5. 网关令牌

向导会默认生成一个网关令牌并存储在 `gateway.auth.token`，用于 Control UI 认证。

---

## 启动 Gateway

### 检查服务状态

如果你在新手引导期间安装了守护进程，Gateway 应该已经在后台运行：

```bash
openclaw gateway status
```

### 手动运行（前台模式）

```bash
openclaw gateway --port 18789 --verbose
```

### 访问 Dashboard

Gateway 启动后，打开浏览器访问：

- **本地访问**：http://127.0.0.1:18789/
- **远程访问**：需要配置 SSH 隧道或 Tailscale

如果配置了网关令牌，在 Control UI 设置中粘贴令牌即可。

---

## 连接第一个聊天渠道

### WhatsApp（QR 码登录）

```bash
openclaw channels login
```

1. 运行命令后会显示 QR 码
2. 打开手机 WhatsApp - 设置 - 链接设备
3. 扫描 QR 码完成配对

详细文档：[WhatsApp 渠道](/channels/whatsapp)

### Telegram

1. 在 [@BotFather](https://t.me/BotFather) 创建机器人
2. 获取 Bot Token
3. 在配置文件中添加令牌，或让向导自动写入

详细文档：[Telegram 渠道](/channels/telegram)

### Discord

1. 在 [Discord Developer Portal](https://discord.com/developers/applications) 创建应用
2. 创建 Bot 并获取 Token
3. 邀请机器人到你的服务器

详细文档：[Discord 渠道](/channels/discord)

---

## 配对审批（重要安全功能）

默认情况下，来自未知用户的私信会收到一个短代码，在批准之前消息不会被处理。

如果你的第一条私信没有收到回复，需要批准配对：

```bash
# 查看待批准的配对
openclaw pairing list whatsapp

# 批准配对
openclaw pairing approve whatsapp <代码>
```

> **Telegram 提示**：你的第一条私信会返回配对码。批准它，否则机器人不会响应。

---

## 快速验证（2 分钟）

运行以下命令检查一切是否正常：

```bash
# 检查整体状态
openclaw status

# 健康检查
openclaw health

# 深度安全检查
openclaw security audit --deep

# 查看所有状态（最佳调试报告）
openclaw status --all
```

### 发送测试消息

```bash
openclaw message send --target +15555550123 --message "Hello from OpenClaw"
```

---

## 配置说明

配置文件位于 `~/.openclaw/openclaw.json`。

### 基础配置示例

```json5
{
  channels: {
    whatsapp: {
      allowFrom: ["+15555550123"],  // 白名单用户
      groups: { "*": { requireMention: true } }  // 群组需要 @ 提及
    },
  },
  messages: { 
    groupChat: { 
      mentionPatterns: ["@openclaw"]  // 提及模式
    } 
  }
}
```

### 沙箱配置

如果你希望主智能体始终在主机上运行（不被沙箱隔离）：

```json
{
  "routing": {
    "agents": {
      "main": {
        "workspace": "~/.openclaw/workspace",
        "sandbox": { "mode": "off" }
      }
    }
  }
}
```

---

## 凭证存储位置

了解凭证存储位置对于备份和迁移很重要：

- **OAuth 凭证**：`~/.openclaw/credentials/oauth.json`
- **认证配置文件**：`~/.openclaw/agents/<agentId>/agent/auth-profiles.json`
- **网关令牌**：`gateway.auth.token`（存储在配置文件中）

> **无头/服务器提示**：先在普通机器上完成 OAuth，然后将 `oauth.json` 复制到 Gateway 主机。

---

## 高级功能

### Web 控制界面

打开浏览器 Dashboard 进行聊天、配置和管理：

```bash
openclaw dashboard
```

### 移动节点（iOS/Android）

配对移动设备以使用 Canvas、相机和语音功能：

```bash
openclaw nodes pairing
```

详细文档：[节点](/nodes)

### 远程访问

#### SSH 隧道

```bash
ssh -L 18789:localhost:18789 user@your-server
```

然后在本地访问 http://127.0.0.1:18789/

#### Tailscale

使用 Tailscale 安全地暴露服务：

```bash
tailscale serve --bg https / http://127.0.0.1:18789
```

详细文档：[远程访问](/gateway/remote) | [Tailscale](/gateway/tailscale)

---

## 故障排除

### `openclaw` 命令未找到

诊断 PATH 问题：

```bash
node -v
npm -v
npm prefix -g
echo "$PATH"
```

如果 `$(npm prefix -g)/bin` 不在 PATH 中，添加到 shell 配置文件：

```bash
# ~/.zshrc 或 ~/.bashrc
export PATH="$(npm prefix -g)/bin:$PATH"
```

然后重新加载终端或运行 `rehash`（zsh）/ `hash -r`（bash）。

### 健康检查显示"未配置认证"

回到新手引导设置 OAuth 或 API 密钥：

```bash
openclaw onboard
```

### WhatsApp/Telegram 无法工作

检查是否使用了 Bun 运行时。这两个渠道需要使用 **Node**：

```bash
# 重新配置运行时为 Node
openclaw configure
```

---

## 下一步

部署完成后，你可以探索以下功能：

- 📱 **macOS 菜单栏应用** + 语音唤醒：[macOS 应用](/platforms/macos)
- 📲 **iOS/Android 节点**（Canvas/相机/语音）：[节点](/nodes)
- 🌐 **远程访问**（SSH 隧道 / Tailscale）：[远程访问](/gateway/remote)
- 🔧 **自定义配置**：[配置指南](/gateway/configuration)
- 🛡️ **安全设置**：[安全文档](/gateway/security)

---

## 相关链接

- **官方文档**：https://docs.openclaw.ai
- **GitHub 仓库**：https://github.com/openclaw/openclaw
- **社区 Discord**：https://discord.com/invite/clawd
- **技能市场**：https://clawhub.ai

---

> **提示**：遇到问题？运行 `openclaw status --all` 生成完整的调试报告，便于排查问题或寻求帮助。
