---
title: 小米 Mimo 模型 API 测试报告
description: 测试小米 Mimo AI 模型的 API 连通性、可用模型和响应质量
cover: https://image.baidu.com/search/down?url=https://tvax2.sinaimg.cn/wap720/006PuDzUgy1ht19c4fa4hj31z418ghdt.jpg
date: 2026-03-31
---

# 小米 Mimo 模型 API 测试报告

## 测试信息

| 项目 | 值 |
|------|-----|
| **端点** | https://api.xiaomimimo.com/v1 |
| **测试模型** | mimo-v2-pro |
| **API Key** | sk-cob92htl4a1t88p1eg36kc7icfg66fs9my9gbmmbfmy8c9pm |
| **测试时间** | 2026-03-31 |

---

## 测试结果

### ✅ API 连通性测试

**状态**: 通过

- SSL 证书有效（有效期至 2026 年 7 月 31 日）
- TLS 1.3 加密连接
- 服务器响应正常
- API 认证通过

---

### ✅ 可用模型列表

成功获取到 4 个可用模型：

| 模型 ID | 描述 |
|--------|------|
| mimo-v2-flash | 快速响应版本 |
| mimo-v2-omni | 全能版本 |
| **mimo-v2-pro** | 专业版本（本次测试） |
| mimo-v2-tts | 语音合成版本 |

---

### ❌ 聊天Completion 测试

**状态**: 失败

**错误信息**:
```json
{
    "error": {
        "code": "402",
        "message": "Insufficient account balance",
        "type": "insufficient_balance"
    }
}
```

**原因**: 账户余额不足

---

## 测试详情

### 1. 网络连接测试

```bash
curl -X POST https://api.xiaomimimo.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxx" \
  -d '{
    "model": "mimo-v2-pro",
    "messages": [{"role": "user", "content": "你好"}],
    "max_tokens": 500
  }'
```

**响应**: HTTP 402 - 余额不足

### 2. 模型列表测试

```bash
curl -X GET https://api.xiaomimimo.com/v1/models \
  -H "Authorization: Bearer sk-xxx"
```

**响应**: HTTP 200 - 成功返回模型列表

```json
{
  "object": "list",
  "data": [
    {"id": "mimo-v2-flash", "object": "model", "owned_by": "xiaomi"},
    {"id": "mimo-v2-omni", "object": "model", "owned_by": "xiaomi"},
    {"id": "mimo-v2-pro", "object": "model", "owned_by": "xiaomi"},
    {"id": "mimo-v2-tts", "object": "model", "owned_by": "xiaomi"}
  ]
}
```

---

## 结论

### 测试总结

| 测试项 | 状态 | 说明 |
|--------|------|------|
| API 端点连通性 | ✅ 通过 | 服务器正常运行 |
| SSL/TLS 加密 | ✅ 通过 | 安全连接建立成功 |
| API Key 认证 | ✅ 通过 | Key 有效且被识别 |
| 模型列表查询 | ✅ 通过 | 返回 4 个可用模型 |
| 聊天 Completion | ❌ 失败 | 账户余额不足 |

### 建议

1. **充值账户** - 需要为 API 账户充值才能使用聊天功能
2. **检查定价** - 查看小米 Mimo 的定价策略和计费方式
3. **测试其他模型** - 充值后可以测试 mimo-v2-flash（可能更便宜）

---

## API 使用示例

充值后可以使用以下格式调用 API：

### 基础聊天

```bash
curl -X POST https://api.xiaomimimo.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "mimo-v2-pro",
    "messages": [
      {"role": "system", "content": "你是一个有帮助的助手"},
      {"role": "user", "content": "你好"}
    ],
    "max_tokens": 500,
    "temperature": 0.7
  }'
```

### 流式响应

```bash
curl -X POST https://api.xiaomimimo.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "mimo-v2-pro",
    "messages": [{"role": "user", "content": "你好"}],
    "stream": true
  }'
```

---

## 相关链接

- **API 端点**: https://api.xiaomimimo.com/v1
- **模型文档**: 需查看小米官方文档
- **充值页面**: 需查看小米官方平台

---

**测试完成时间**: 2026-03-31 16:15 GMT+8
