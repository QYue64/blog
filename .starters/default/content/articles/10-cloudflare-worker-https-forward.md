---
title: 用 Cloudflare Worker 将带端口的 HTTP 地址转为 HTTPS
description: 使用 Cloudflare Worker 将非标准端口的 HTTP 服务转为干净的 HTTPS 对外暴露
cover: "https://hailuo-image-algeng-data.oss-cn-wulanchabu.aliyuncs.com/image_inference_output%2Ftalkie%2Fprod%2Fimg%2F2026-04-14%2F2aa09e48-e8cb-41e9-9966-a5ea224dc1e8_aigc.jpeg?Expires=1776267710&OSSAccessKeyId=LTAI5tB2SwrRwAtD23etQUbC&Signature=ZrjKJfXbXVyEuzk35%2B4BsEgh0x4%3D"
date: 2026-04-14
---

有时候我们的服务跑在一个非标准端口上，比如 `http://1.2.3.4:8080`，想对外暴露一个干净的 `https://api.yourdomain.com`。Cloudflare Worker 可以免费实现这个转发，本文记录完整步骤和踩坑解决方案。

---

## 前提条件

- 域名已托管在 Cloudflare（免费套餐即可）
- 服务器有公网 IP
- 本地服务正常运行在某个端口

---

## 第一步：创建 Worker

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com)
2. 左侧导航进入 **Workers & Pages** → 点击 **Create**
3. 选择 **Create Worker**
4. 将编辑器中的默认代码替换为以下内容：

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = `http://origin.yourdomain.com:端口${url.pathname}${url.search}`;

    const newHeaders = new Headers(request.headers);
    newHeaders.set('Host', 'origin.yourdomain.com:端口');

    return fetch(target, {
      method: request.method,
      headers: newHeaders,
      body: ['GET', 'HEAD'].includes(request.method) ? null : request.body,
      redirect: 'follow',
    });
  }
}
```

> 将 `origin.yourdomain.com` 和 `端口` 替换为你自己的值（见第二步）。

5. 点击 **Deploy** 部署

---

## 第二步：添加源站 DNS 记录（绕过裸 IP 限制）

Cloudflare Worker 不允许直接请求裸 IP 地址（会报 `Direct IP access not allowed`），需要先给源站加一个 DNS 记录，**但关闭橙云代理（灰云）**。

在域名的 **DNS → Records** 里添加：

| 字段 | 值 |
|---|---|
| 类型 | A |
| 名称 | origin |
| 内容 | 你的服务器公网 IP |
| 代理状态 | 仅 DNS（灰云，关闭橙云） |

这样 `origin.yourdomain.com` 就直接解析到你的服务器 IP，Worker 请求它时不会触发 Cloudflare 的 IP 访问限制。

---

## 第三步：绑定自定义域名

1. 进入刚才创建的 Worker 详情页
2. 点击 **Settings → Triggers**（或 **Domains & Routes**）
3. 点击 **Add Custom Domain**
4. 填入你想对外暴露的域名，例如 `api.yourdomain.com`
5. 保存

---

## 验证

部署完成后，访问 `https://api.yourdomain.com`，请求会被 Worker 转发到 `http://origin.yourdomain.com:端口`，对外完全隐藏端口，自动走 HTTPS。

---

## 流量走向示意

```
用户
  ↓ https://api.yourdomain.com（443，HTTPS）
Cloudflare Worker
  ↓ http://origin.yourdomain.com:8080（HTTP，灰云直连）
你的服务器
```

---

## 常见问题

**Q：SSL 模式需要怎么设置？**

进入域名的 **SSL/TLS → Overview**，设置为 **Flexible** 即可。Cloudflare 到用户走 HTTPS，Cloudflare 到你的服务器走 HTTP，服务器不需要配置证书。

**Q：为什么 origin 子域必须用灰云？**

橙云会让流量再次经过 Cloudflare 代理，形成循环。灰云让 `origin.yourdomain.com` 只做纯 DNS 解析，Worker 可以直接连到你的服务器。

**Q：免费套餐有请求限制吗？**

Worker 免费套餐每天有 10 万次请求的额度，个人项目和小工具完全够用。

---

## 如果不想折腾：用 Cloudflare Tunnel

如果服务器在内网、没有公网 IP，或者不想手动配 DNS，可以用 Tunnel 方案，一条命令搞定：

```bash
cloudflared tunnel --url http://localhost:端口
```

会自动生成一个 `https://xxx.trycloudflare.com` 的公网地址，也支持绑定自定义域名。
