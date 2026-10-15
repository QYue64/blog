---
title: "OpenAI DevDay 2026 追踪：从 GPT-6.1 Sol 到 Dots，AI 开始接手持续工作"
description: 梳理 9 月 29 日 OpenAI DevDay 的模型、Dots、云端 Codex、Agents API 与插件生态，并追踪截至 10 月 15 日的实际开放进展
cover: "https://witque.cn/articles/openai-devday-2026.svg"
date: 2026-10-15
category: AI / EVENTS
layout: article
---

OpenAI 在 **2026 年 9 月 29 日** 举行了新一届 DevDay。看完发布内容，我最关心的变化是：AI 开始从一次对话中的助手，变成可以在云端持续推进工作、与团队共享上下文的参与者。

GPT-6.1 Sol 是其中的模型底座，Dots、Codex Cloud、Agents API 和插件则分别回答不同的问题：谁来持续跟进？任务在哪里运行？开发者怎样接入？结果又如何进入团队的日常工作？

这篇文章根据官方公告与开发者文档整理，**状态核验截至 2026 年 10 月 15 日**。大会当天的“即将推出”和两周后真正可用的能力，会分开说明。[大会回顾](https://openai.com/index/devday-2026-recap/)

## 先看时间线：哪些是大会更新，哪些是后续落地

| 日期 | 已确认的变化 | 阅读时需要注意 |
| --- | --- | --- |
| 9 月 10 日 | Agents API 进入公开 Beta | 它在 DevDay 前已经发布，不能把整个 API 都算作大会当天的首发 |
| 9 月 29 日 | DevDay 发布 GPT-6.1 Sol，介绍 Dots、云端 Codex 与协作产品；Agents API 增加 computer use | 一场大会同时包含模型发布、产品升级和预览，不代表全部功能全面开放 |
| 10 月 6 日 | Decisions API 以 GPT-6 Luna 进入 Beta | 大会时还是有限预览；截至本文核验时，文档仍标为公开 Beta |
| 10 月 8 日 | GPT-6.1 Sol 的 API Ultrafast 开放 | 大会材料里的“coming soon”已经出现后续落地记录 |

时间依据：[Agents API 发布公告](https://openai.com/index/introducing-the-agents-api/)与 [API 更新日志](https://developers.openai.com/api/docs/changelog)。

## GPT-6.1 Sol：把强能力放到更日常的预算里

OpenAI 将 GPT-6.1 Sol 定位为 GPT-6 Sol 的升级，重点覆盖编码、电脑操作和专业工作。官方称其在部分评测中接近 Astra，同时标准输入、输出 token 单价为 Astra 的五分之一。

| 模型 | 输入／百万 token | 缓存输入／百万 token | 输出／百万 token |
| --- | --- | --- | --- |
| GPT-6 Astra | 10 美元 | 1 美元 | 50 美元 |
| GPT-6.1 Sol | 2 美元 | 0.10 美元 | 10 美元 |
| GPT-6 Luna | 0.10 美元 | 0.01 美元 | 0.50 美元 |

以上为发布页列出的标准 API 价格，不包含 Ultrafast 等额外档位。“接近 Astra”也是厂商的评测结论，不意味着每类任务都等价。[模型发布与价格](https://openai.com/index/introducing-gpt-6-1-sol/)

我的理解是，Sol 的实际价值要放到完整工作流中判断：一次修改要重试几次、调用多少工具、是否能通过测试，往往比单次回答的漂亮程度更影响账单。不能把 token 单价降低五倍，直接换算成所有项目都节省五倍成本。

## Ultrafast：速度成为单独购买的资源

Ultrafast 是更高价格的服务档位，并非又一个独立模型。当前 API 文档列出 GPT-6 Astra 和 GPT-6.1 Sol，支持通过 `service_tier: "ultrafast"` 选择，并有独立的速率限制。

官方还建议高频工具交互使用 WebSocket，以减少连接开销对速度收益的抵消。[Ultrafast 文档](https://developers.openai.com/api/docs/guides/ultrafast-mode)

对需要人持续盯着迭代的任务，少等几秒可能很有价值；对夜间批处理，速度溢价就未必划算。大会宣传的 token 生成加速，也不能直接理解为整个任务按相同比例提速——搜索、测试、网络和外部系统仍然会耗时。

## Dots：持续跟进目标，但权限仍有边界

Dots 是这次最有辨识度的新产品。官方介绍中，它由 GPT-6 Astra 驱动，拥有自己的云端电脑和浏览器，可以通过已连接应用推进任务，并逐渐学习用户的偏好。

但有一个容易被“全天候 Agent”宣传盖过去的细节：**后台主动研究使用的是受限的只读工具**，不能因此自动发送消息、修改应用内容或控制电脑；有实际影响的动作仍受规则与审批约束。

开放范围也有条件：Pro、Business Premium 在符合条件的市场逐步开放，Enterprise（含 Edu、Healthcare）Beta 需要管理员开启；不是所有 ChatGPT 账号自动获得。[Dots 官方说明](https://openai.com/index/introducing-dots/)

我更愿意用“持续跟进”评价这类产品：它能否在信息变化后更新判断，在遇到阻碍时说明原因，在需要决策时带着证据回来。持续在线只是前提，可靠地交接工作才是价值。

## Codex Cloud：电脑合上以后，任务还能继续

云端 Codex 的工作方式很直接：为项目配置环境，在独立工作区启动任务，完成后检查文件变更、验证结果，再提交或创建 PR。用户可以从不同设备继续跟进，任务不依赖本机一直醒着。[Codex Cloud 文档](https://learn.chatgpt.com/docs/cloud)

这对长时间测试、排查和实现任务很有意义，但运行位置变化也带来新的配置工作：依赖如何安装、哪些网络可访问、哪些凭据可用、环境如何复现，都需要提前讲清楚。

CLI 也更新了语音交互和多任务管理体验；代码审查则强调在界面中阅读摘要、diff 并追问问题。它们共同改善的是“发起任务以后如何参与”，而不只是更方便地输入一条提示词。[CLI 文档](https://learn.chatgpt.com/docs/codex/cli)

另外，Codex Security Cloud 可以扫描连接的 GitHub 仓库、检查新提交并整理发现。它与本地安全扫描是不同的运行路径，接入时应看清所用插件与环境。[Security Cloud 配置](https://learn.chatgpt.com/docs/security/setup)

## Agents API：把运行 Agent 的基础设施交给平台

Agents API 在 9 月 10 日已经进入公开 Beta。它提供托管的 Agent 运行能力，包含上下文管理、工具使用和子 Agent 协作等机制；DevDay 的重要增量之一，是 **computer use**。[Agents API 公告](https://openai.com/index/introducing-the-agents-api/)

开发者可以让 Agent 在 OpenAI 托管的浏览器中操作软件，但应用仍要处理网站访问审批和登录流程。API 返回“需要用户操作”时，产品必须把这个状态呈现出来，不能让用户一直盯着一个转圈图标。[Computer use 文档](https://developers.openai.com/api/docs/guides/agents-api/tools/computer-use)

这降低了搭建 Agent 基础设施的门槛，却没有替开发者定义业务责任。比如“帮助处理客户退款”，仍要明确什么情况只能草拟、什么金额需要人工复核，以及执行失败后如何恢复。

## Decisions API：有些任务只需要一个判断

Decisions API 使用 `gpt-6-luna`，接受文本与图片，返回三类结果：条件概率、固定选项选择、按规则评分。它适合工单分流、内容分类和优先级判断，不需要每次先生成一段解释再解析。

当前文档标记为公开 Beta。官方称其比 Responses API 更快，但这属于特定能力路径的性能描述，不能套到所有生成任务。[Decisions 文档](https://developers.openai.com/api/docs/guides/decisions)

例如，“这封投诉交给哪个部门”可以使用固定选项；“写一封有分寸的回复”依然需要生成模型。两种接口分工以后，开发者可以把简单判断做得更紧凑，把复杂表达留给适合的模型。

输出带概率，也不意味着概率已经在你的业务数据上校准。真正自动执行之前，仍要用真实样本测试误判率和拒答处理。

## 插件与 MCP Events：从手动调用走向事件触发

Plugin Extensions 让插件接入侧边栏、交互面板和文件查看器。产品可以有持续工作的界面，不必把所有操作压进对话气泡里。当前文档还提示，不同客户端和套餐的扩展能力开放进度不同，不能把大会概述中的覆盖范围理解成每个入口都已齐备。[Extensions 文档](https://developers.openai.com/plugins/build/extensions)

MCP Events 则让连接的系统在出现变化时触发后续工作。例如文档出现新评论，Agent 才开始处理，而不是不断轮询。ChatGPT 当前集成支持 webhook 交付与验证，并不支持提案中的所有交付模式。[MCP Events 文档](https://developers.openai.com/plugins/build/mcp-events)

下面是一个示意工作流，并非本文实际执行的操作：

```text
收到反馈事件 → 读取相关上下文 → 判断是否需要处理
                         ↓
             准备修改与测试 → 交给人审查 → 获批后执行
```

事件驱动会放大自动化的价值，也会放大重复事件和错误授权的影响。接入时要考虑去重、权限变化与暂停机制，不能把“事件到了”当作无限授权。

## Space 与 Pages：结果进入共同工作的地方

ChatGPT Space 和 Pages 关注的是协作：把人、ChatGPT、Codex 或 dot 放在共享上下文中，围绕可继续编辑的文档推进工作。官方页面列出 Pro、Business 和 Enterprise 支持；协作幻灯片与表格仍标记为即将推出。[Space 官方页面](https://chatgpt.com/features/space/)

它让我关注一个产品问题：Agent 完成任务后，结果应该留在哪里？如果答案仍然散落在不同聊天记录里，团队就要不断重复搬运资料。共享的工作产物、明确的修改历史与责任人，可能比再加一个聊天入口更重要。

## 登录与隐私：平台扩张需要配套能力

**Sign in with ChatGPT** 包含两个应当分开的能力：身份登录，以及在符合条件的应用里使用 ChatGPT 套餐额度。获得其中一种权限，不等于另一种也自动开启，更不等于应用能读取用户聊天记录。商业应用与开源、本地工具的准入方式也不同。[接入说明](https://developers.openai.com/siwc/quickstart)

**Private Safety Processing** 则面向企业数据控制：在相应配置下使用客户控制的存储和授权机制完成安全处理。“Zero Data Retention”不应被简单理解成整个应用链路从未存储数据，仍要核对具体产品、项目配置和存储责任。[PSP 文档](https://developers.openai.com/api/docs/guides/private-safety-processing)

大会还介绍了 AWS 托管 Agent、Marketplace、新的 Pro 档位和更多团队协作能力。这些涉及部署、采购或套餐，不能与基础模型能力混为一谈；具体覆盖以各产品当前说明为准。[官方发布索引](https://openai.com/index/devday-2026-recap/)

## 开发者现在最值得做什么

如果你的产品正在使用 OpenAI，我建议先做三个具体实验，而不是一次性追完所有新功能。

1. **用自己的任务评估 Sol。** 固定一组代码、文档和工具任务，记录成功率、总耗时、重试和费用，再决定是否迁移。
2. **选一个边界清楚的云端流程。** 比如准备周报、整理反馈或创建修复草稿，先把输入、产物和审核点做完整。
3. **给自动化补上控制面。** 用户应该看得见它正在做什么、凭什么做、用了哪些权限，以及怎样停止。

这也是我对本届 DevDay 的判断：模型能力正在被包装成更完整的工作系统。机会在于，很多原本需要人不断协调的步骤开始可以交给 Agent；考验则是，开发者能否把执行、权限和交付一起做好。

## 资料与后续核验

本文是截至 **2026 年 10 月 15 日** 的一次追踪快照，来源均为文中链接的官方公告或文档。性能与成本表述按厂商口径归因，没有进行独立横向评测。

如要继续关注，可以从 [DevDay 2026 会场与回放入口](https://openai.com/devday/2026/)、[大会完整回顾](https://openai.com/index/devday-2026-recap/)以及 [API 更新日志](https://developers.openai.com/api/docs/changelog)开始。已宣布、Beta、逐步开放和正式可用是不同状态，使用前应再次核对账号与地区条件。
