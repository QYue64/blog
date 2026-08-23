---
title: "Tibo 的 X 最近一个月说了什么？Codex 从 1500 万冲到 2000 万的 31 天"
description: 按时间倒序梳理 @thsottiaux 近一个月关于 Codex 用量、安全修补、Agent 插件、Linux、长上下文与模型成本的主要言论和事件
cover: "https://witque.cn/articles/tibo-x-monthly-timeline.svg"
date: 2026-08-23
category: AI / PEOPLE
layout: article
---

如果你最近关注 Codex，大概率见过一个叫 Tibo 的人频繁出来宣布“重置用量”。他的 X 账号是 [@thsottiaux](https://x.com/thsottiaux)，也是观察 OpenAI Codex 产品节奏的一个高密度窗口。

这篇文章整理了 **2026 年 7 月 24 日至 8 月 23 日** 这 31 天里，他公开发布的主要信息。时间线按最新在前排列；产品数字、性能判断和 token 效率等说法均按原帖归因，不把个人观点或厂商口径写成独立测评结论。

## 一句话总结

这个月的 Codex 像是一辆高速扩建中的列车：活跃用户从 Tibo 宣布的 1500 万继续冲到 2000 万，Linux、Computer History、Agent Plugins 和长上下文接连出现；与此同时，用量消耗、缓存命中率和破坏性操作风险也迫使团队快速补课。

## 倒序时间线

### 8 月 23 日：解释 Codex 用量消耗异常

Tibo 发布了最新一轮用量限制调查进展。他说团队发现了三类问题：长会话经过多次上下文压缩后使用图片存在效率损失；Computer History 的极高分位用户消耗偏高；自动生成会话标题的功能也比预期多占了一些用量。

这条更新很重要，因为它把“额度掉得快”从模糊体感拆成了几个可定位的工程问题。它也说明 Agent 产品的成本并不只由模型标价决定，图片、历史记录、缓存和上下文管理都会影响最终消耗。[查看原帖](https://x.com/thsottiaux/status/2091407991736332689)

### 8 月 22 日：缓存命中率成为用量问题的线索

前一天，他已经提到部分用户当周的缓存命中率低于此前数周的稳定状态，可能因此更快耗尽用量。缓存命中并不是用户界面里最显眼的功能，却是控制长会话成本的关键环节。[查看原帖](https://x.com/thsottiaux/status/2091033630147854385)

### 8 月 21 日：Codex 达到 2000 万活跃用户，并发放可储存重置

Tibo 宣布 Codex 当周达到 **2000 万活跃用户**。为了庆祝，团队向 Codex 和 ChatGPT Work 用户发放了一次可以留到需要时再使用的 “BANKED reset”，不再要求用户立即消耗。

这里的 2000 万是 Tibo 公布的产品口径，原帖没有进一步解释活跃用户的统计周期与去重方式。[查看原帖](https://x.com/thsottiaux/status/2090766694897619318)

同一天，他还展示了 GPT-Image-2 在 ChatGPT 与 API 中生成透明背景图片的能力，并拿一张仙人掌图演示准备打印成电脑贴纸。[查看原帖](https://x.com/thsottiaux/status/2090631723302469995)

### 8 月 20 日：更多上下文，更多帮助

他用一句 “More context, better help” 转发了产品更新。虽然原帖本身非常简短，但延续了这个月一贯的产品方向：让 Agent 获得更多用户授权的上下文，而不只是等待一次性的提示词。[查看原帖](https://x.com/thsottiaux/status/2090517433199247741)

### 8 月 19 日：隐私处理与破坏性操作安全同时被摆上台面

Tibo 介绍了 Private Safety Processing 预览：目标是在改进安全保障的同时，继续为相关部署提供 Zero Data Retention。他强调，即使使用前沿模型，客户也不应放弃对敏感数据的控制。[查看原帖](https://x.com/thsottiaux/status/2090173536010957128)

当天另一条长帖则回顾了 Codex 为降低潜在破坏性操作风险而推出的改动。他提到，团队此前开始调查少量相关报告，并在随后数周持续降低执行危险动作的风险。由于 X 展示的长帖内容并不完整，这里不扩写未经完整原文确认的事故细节；可以确定的是，安全已经进入 Codex 的执行层，而不再只是提示用户“小心使用”。[查看原帖](https://x.com/thsottiaux/status/2089891927659585918)

### 8 月 16 日：开放 100 万 token 上下文，也引发 token 计价讨论

Tibo 给出了在 Codex 中为 GPT-5.6 Sol 开启 **100 万 token 上下文窗口**的方法。他同时说明，默认上限是性能与成本之间的折中，更大上下文虽然能保留更多信息，也意味着更高的资源消耗。[查看原帖](https://x.com/thsottiaux/status/2089082893804896524)

同一天，他连续讨论不同模型的 token 是否可以直接比较。他的核心观点是：token 并非克或千瓦时那样的标准单位，不同 tokenizer 会把相同文本切成不同数量，因此只比较“每百万 token 价格”可能误导。

他声称 OpenAI tokenizer 在其比较中大约少用 30% token。这个数字是 **Tibo 本人的说法**，不是本文进行的独立测评；真实差异也会随语言、代码和文本类型变化。[短帖](https://x.com/thsottiaux/status/2088856449959276836) / [长帖](https://x.com/thsottiaux/status/2088866513008873560)

### 8 月 15 日：让 Sol 调度一支 Luna Agent 舰队

Tibo 描述了一种多模型协作方式：让能力更强的 Sol 管理一组高效的 Luna agents。这里透露出的产品思路比单次跑分更值得关注——复杂模型负责编排和判断，轻量模型承担大量快速执行任务。[查看原帖](https://x.com/thsottiaux/status/2088725163923984638)

### 8 月 13 日：1500 万、Computer History 与 Ultrafast 同日出现

这一天的信息密度很高：Tibo 表示 Codex 已经越过 **1500 万**，并再次给所有人发放用量重置，同时建议用户尝试 `/fast`。[查看原帖](https://x.com/thsottiaux/status/2087706104814023111)

他随后分别宣布 “Computer history is here” 和 `/ultrafast`。前者让 Codex 能利用更多电脑使用历史，后者则继续压低 Agent 的等待时间。两项能力放在一起看，目标很明确：既增加上下文，又提高行动速度。[Computer History 原帖](https://x.com/thsottiaux/status/2088017529587573025) / [Ultrafast 原帖](https://x.com/thsottiaux/status/2088019704803897705)

### 8 月 11 日：Codex 与 ChatGPT desktop 登陆 Linux

Linux 用户终于被照顾到了。Tibo 宣布 Codex 与 ChatGPT desktop 来到 Linux，还开玩笑说，等不及而下单 MacBook 的用户可以取消订单了。[查看原帖](https://x.com/thsottiaux/status/2087254026232775052)

当天他也用 “Import your world. Codex. Run.” 宣传导入能力，并再次为 ChatGPT Work 与 Codex 付费用户重置用量。[导入原帖](https://x.com/thsottiaux/status/2087252528513814773) / [重置原帖](https://x.com/thsottiaux/status/2086972933566857393)

### 8 月 8 日：Sol 可以进入其他 harness

Tibo 表示 GPT-5.6 Sol 可以在包括 “CC harness” 在内的不同运行环境中使用。对开发者来说，这意味着模型和承载模型的 Agent 外壳正在逐渐解耦；同一模型可以进入不同工具链，而 Codex 也必须靠自己的编排、上下文与执行体验竞争。[查看原帖](https://x.com/thsottiaux/status/2086188036493344823)

这条帖子末尾照例又附带了一次面向 ChatGPT Work 与 Codex 付费用户的用量重置。

### 8 月 7 日：免费用户获得 Luna 驱动的无限文本聊天

Tibo 宣布 ChatGPT 免费用户获得由 GPT-5.6 Luna 驱动的无限文本聊天。它反映了 Luna 的角色：用更低成本承接高频、日常的大规模请求。[查看原帖](https://x.com/thsottiaux/status/2085610231707623750)

### 8 月 6 日：Agent Plugins 成为共同标准

他把 Agent Plugins 描述为适用于多数 Agent、包括 Codex 和 ChatGPT 的一种标准。插件的意义不只在“多一个扩展商店”，而是让工具、指令和工作流可以被打包、迁移与复用。[查看原帖](https://x.com/thsottiaux/status/2085432978856083964)

### 8 月 4 日：今天的 Agent harness，两三个月后会显得原始

这是本月最有判断色彩的一条帖子。Tibo 说 Codex 已经是一个不错的 harness，但照他最近看到的结果，**两三个月后它仍会显得原始**；前沿 AI 的使用方式将经历又一次重大演进，下一代模型需要的不只是用户的一台笔记本电脑。

这是个人判断，不是产品发布日期预告。但它清楚表达了他的立场：模型能力只是底座，harness 会大幅改变模型最终能完成什么。[查看原帖](https://x.com/thsottiaux/status/2084483765158719542)

### 8 月 1 日：用 10 万条 Luna 线程庆祝效率周

Tibo 再次重置 Codex 与 ChatGPT Work 的用量限制，并用“周末跑 10 万条 Luna threads”来强调轻量模型的吞吐能力。这里的 10 万更像庆祝式表达，不应理解成普通套餐固定承诺的并发额度。[查看原帖](https://x.com/thsottiaux/status/2083395449814229287)

### 7 月 30 日：Luna 降价 80%，Terra 降价 20%

这次更新直接打到成本层：Tibo 宣布 Luna 价格降低 80%、Terra 降低 20%，Sol 的 `/fast` 模式提速；自动审批模式也改用 Luna 来显著降低成本。长帖后半段在 X 的公开嵌入结果中被截断，因此这里只记录能够完整确认的项目。[查看原帖](https://x.com/thsottiaux/status/2082883636177916306)

### 7 月 29 日：回应 Sol 消耗用量过快

在用户反映 Sol 比预期更快消耗 Codex 用量后，Tibo 发帖回应，并为 ChatGPT Work 与 Codex 用户重置限制。完整解释在公开嵌入内容中被截断，但这已经预告了随后一个月持续出现的主题：强模型的能力、速度和可持续用量必须一起优化。[查看原帖](https://x.com/thsottiaux/status/2082317452755751098)

### 7 月 25 日：接近全球范围的故障后重置用量

Tibo 表示 Codex 在凌晨 2 点至 4 点左右经历了一次“几乎全球性”的故障，服务随后恢复。团队为所有 Codex 与 ChatGPT Work 用户重置用量，并用 “We learn. We reset.” 总结处理方式。[查看原帖](https://x.com/thsottiaux/status/2081096447718723984)

## 这个月，他反复在说什么

把这些帖子放在一起看，可以提炼出四条持续出现的主线。

### 1. Harness 正在成为模型能力的放大器

Tibo 对未来两三个月的判断、跨 harness 使用 Sol、Agent Plugins 和多模型舰队，都在指向同一件事：真正的竞争单位不再只是一个模型，而是模型、工具、上下文、权限和执行环境组成的系统。

### 2. 用量限制本质上是系统效率问题

重置额度是最显眼的用户福利，却不是长期解法。缓存命中率、图片、上下文压缩、Computer History 和自动标题都会影响消耗。月底到月初的一连串帖子显示，团队正在边扩张用户量，边修补成本模型。

### 3. 多模型编排会代替“一个模型包打天下”

Sol 管理 Luna agents、自动审批改用 Luna、免费聊天交给 Luna，都是同一套分工：贵而强的模型处理复杂决策，便宜而快的模型承担规模化执行。

### 4. 安全必须进入执行层

当 Codex 能读取历史、操作电脑和连续执行命令时，安全不能只依靠一句系统提示。破坏性动作防护、隐私处理、数据保留策略与权限确认，会和模型能力一样成为 Agent 产品的核心体验。

## 阅读这些数字时需要保留判断

- **2000 万与 1500 万**：均来自 Tibo 原帖，活跃口径和统计周期没有在帖子中展开。
- **token 少约 30%**：这是他的 tokenizer 对比结论，不是统一语料上的独立评测。
- **频繁 reset**：它是阶段性补偿或庆祝福利，不代表套餐永久扩容。
- **“两三个月后显得原始”**：这是方向判断，不等于已经承诺某个具体产品或发布日期。
- **长帖被截断的部分**：本文只转述可确认内容，没有根据搜索摘要补全原文。

## 结语

如果只看发布数量，这 31 天像是一场密集的功能轰炸；如果看得更深一点，它其实记录了 Codex 从“更强的编码助手”向通用工作 Agent 扩张时遇到的真实摩擦。

用户增长很快，新入口和新上下文不断加入，成本与安全问题也随之放大。Tibo 的帖子最有价值的地方，未必是又一次 reset，而是让外界看到：下一代 Agent 的竞争，已经从模型跑分进入系统工程。

## 资料来源

- [Tibo 的 X 主页](https://x.com/thsottiaux)
- [OpenAI Codex Changelog](https://developers.openai.com/codex/changelog)
- 文中各日期均附对应 X 原帖链接，核对时间为 2026 年 8 月 23 日。
