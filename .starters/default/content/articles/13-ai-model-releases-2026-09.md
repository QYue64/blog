---
title: "近一个月 AI 新模型发布总览：GPT-6.1、Claude 5.5、Gemini 4，以及决策模型潮"
description: 追踪 2026 年 9 月 2 日至 10 月 2 日各厂商的模型发布，区分首发、预览、开放权重与服务更新，覆盖语言、多模态、图像、语音、音乐、检索和决策模型
cover: "https://witque.cn/articles/ai-model-releases-2026-09.svg"
date: 2026-10-02
category: AI / TRENDS
layout: article
---

过去一个月，AI 行业并不只是“又出了几个更强的聊天模型”。一边是 GPT-6、Claude 5.5 和 Gemini 4 的前沿竞争；另一边，语音、音乐、视觉动作、检索嵌入和决策模型也在密集更新。

如果只追聊天榜单，很容易漏掉后面这一半。

这篇文章以 **2026 年 9 月 2 日至 10 月 2 日** 为观察窗口，按时间倒序整理能核对到官方记录的发布，再解释其中最值得关注的变化。

> 这是一份尽可能广覆盖的公开发布台账，不是对全球所有模型仓库的全量普查。仅有第三方上架记录、缺少可核对首发日期的项目，不混入“已确认首发”清单。没有被收录，不等于该厂商没有发布。

## 先说结论：本月有两条战线

第一条是**通用能力继续升级**：模型需要处理更复杂的代码、文档、图片与长任务，而且不能因为能力更强，就让完成同一件事的成本失控。

第二条是**专用能力开始拆分**：生成语音交给语音模型，找资料交给嵌入模型，机器人控制交给动作模型；连“判断接下来做什么”，也开始由只输出选项与概率的决策模型承担。

后者未必像新一代旗舰模型那么热闹，但对实际做产品的人来说，同样重要。

## 这份台账怎么读

本文把几种容易混淆的情况分开。

- **新模型／新命名版本**：厂商明确发布新的模型或版本，进入主时间线。
- **预览／早期访问**：已经宣布，但不意味着所有账号都能调用；访问限制单独注明。
- **开放权重**：可以下载，不自动等于无限制商用；具体许可仍要看模型卡。
- **已有模型扩大开放**：正式可用、进入 API 或新增地区，不重复算作新的首发。
- **服务档位／产品配置**：更快的服务、法律专用配置、虚拟人界面，不因为有新名字就算一个新模型。

日期优先采用官方公告或 API 更新日志上的日期。不同页面存在日期差异时，保留差异；不把仓库创建日期、第三方平台上架日期当作统一的首发时间。

## 倒序发布台账

以下同日条目不强行按小时排序。模型名称保留官方写法；性能优劣不在这张表里排名。

| 日期（2026 年） | 厂商与模型 | 类型／开放方式 | 本次发布看点与官方来源 |
| --- | --- | --- | --- |
| 10 月 1 日 | AWS / Strands Labs：**Strands Decider 2B** | 决策；开源 | 从给定选项中做选择并给出数值判断，面向本地 CPU/GPU 实验；不是聊天模型。[官方公告](https://strandsagents.com/blog/introducing-strands-decider/) |
| 10 月 1 日 | Cloudflare：**Clef、Clef-flash** | 多模态决策；开放权重、Workers AI | 返回结构化判断与概率，支持视觉输入；两款模型按 Apache 2.0 发布。[官方公告](https://blog.cloudflare.com/clef-decision-models/) |
| 9 月 30 日 | Google：**Gemini 4 Argon** | 通用多模态；限量预览 | 新一代前沿模型的预览发布，访问仍有门槛；不等于所有 Gemini 用户或 API 用户当天都已可用。[官方公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) |
| 9 月 30 日 | Cohere：**Embed 5 Pro、Embed 5 Fast** | 多模态嵌入；API | 面向企业检索；两款模型共享嵌入空间，可以用 Pro 建索引、Fast 做查询，而不必为切换模型重建索引。[官方公告](https://cohere.com/blog/embed-5) |
| 9 月 30 日 | Fastino：**GLiDE** | 决策；API | 针对困难的结构化决策训练，输入状态与预设选项，输出带概率的判断；不是长文本生成模型。[官方公告](https://fastino.ai/blog/introducing-glide-the-first-thinking-decision-model) |
| 9 月 29 日 | OpenAI：**GPT-6.1 Sol** | 通用／Agent；API | 新命名版本进入 API。[官方更新日志](https://developers.openai.com/api/docs/changelog) |
| 9 月 28 日 | Anthropic：**Claude Sonnet 5.5** | 通用／编码；商业服务 | Claude 5.5 家族的第二款模型，强调日常工作、编码、文档与更快输出。Haiku 5.5 仅被预告，不算已经发布。[官方公告](https://www.anthropic.com/claude-sonnet-5-5) |
| 9 月 28 日 | ElevenLabs：**Eleven v4、Eleven v4 Turbo** | 语音合成；API／产品 | v4 面向表达力与情绪，Turbo 面向低延迟语音交互；都是生成语音，而不是语音识别。[官方公告](https://elevenlabs.io/blog/eleven-v4) |
| 9 月 25 日 | Perceptron：**Mk1.5** | 多模态／具身 Agent；API | 理解图像、视频与音频，输出目标跟踪、位置等结果，并支持工具使用；定位不是通用聊天替代品。[官方公告](https://www.perceptron.inc/blog/introducing-perceptron-mk1-5) |
| 9 月 24 日 | Respan：**Span-01、Span-01 Lite** | 行为分类／决策；API | 按自然语言定义判断行为是否出现，输出 present、absent、not_observable 等概率，面向 Agent 轨迹检测。[官方公告](https://www.respan.ai/blog/introducing-span-1) |
| 9 月 23 日 | Fireworks AI：**Ember-1** | 推理／编码；研究预览 | 基于 Kimi K3 做后训练，目标是减少不必要的推理 token；节省幅度是厂商自报，不是统一独立测评。[官方公告](https://fireworks.ai/blog/ember-1) |
| 9 月 23 日 | AionLabs：**Aion 3.5、Aion 3.5 Mini** | 叙事／角色扮演；API 系统 | 厂商称其为基于 GLM 家族的多模型系统；这是新服务版本，不应当作独立训练的基础模型。日期来自官方 models API。[官方模型列表](https://api.aionlabs.ai/v1/models) |
| 9 月 22—23 日 | Black Forest Labs：**FLUX 3 Action** | 世界／动作模型；开放权重 | 面向机器人动作预测，而不是一款新的普通文生图模型。官网技术页面与发布索引日期存在差异，保留两日范围。[官方介绍](https://bfl.ai/models/flux-3-action) |
| 9 月 22 日 | Anthropic：**Claude Opus 5.5** | 通用／复杂 Agent 工作；商业服务 | Claude 5.5 家族的旗舰，强调需要持续判断的复杂工作。[官方公告](https://www.anthropic.com/claude-opus-5-5) |
| 9 月 22 日 | OpenAI：**GPT-6 Sol、GPT-6 Luna** | 通用／Agent；API | GPT-6 家族新增两款型号，分别覆盖能力与效率取舍。[官方更新日志](https://developers.openai.com/api/docs/changelog) |
| 9 月 22 日 | Google：**Gemini 3.8 Flash TTS、Gemini 3.8 Flash-Lite TTS** | 语音合成；API 正式可用 | 这两款是 TTS 模型，不要和 3.8 Live 混为一谈；API 日志日期为 22 日，博客公告稍晚。[官方更新日志](https://ai.google.dev/gemini-api/docs/changelog) |
| 9 月 21 日 | xAI：**Grok 4.7** | 通用／Agent；商业服务 | 新版本强调长任务与 Agent 执行；官方对比表由 xAI 运行，不代表第三方复测结论。[官方公告](https://x.ai/news/grok-4-7) |
| 9 月 20 日 | 阿里 Qwen：**Qwen-Image-2.1** | 图像生成／编辑；发布公告 | 更新图像生成与编辑能力；日期采用 Qwen 官方研究列表，不采用第三方平台上架日。[官方公告](https://qwen.ai/blog?id=qwen-image-2.1) |
| 9 月 18 日 | 阿里 Qwen：**Qwen3.8-Omni-Flash** | 全模态输入；API | 接受文字、图像、音频与视频，主要输出文本；支持音频输入不等于能够生成语音。[官方公告](https://qwen.ai/blog?id=qwen3.8-omni-flash) |
| 9 月 17 日 | Cognition：**SWE-2** | 编码 Agent；Devin | 面向软件工程任务，强调不同推理强度下的能力与成本平衡。[官方公告](https://cognition.ai/blog/swe-2) |
| 9 月 17 日 | PrismML：**Ternary Bonsai 2 27B** | 文本／视觉；开放权重 | 基于 Qwen3.8 27B 的三值权重模型，侧重本地部署与内存占用；不是新的独立基础架构。[官方公告](https://prismml.com/news/bonsai-2-27b) |
| 9 月 15 日 | Google：**Gemini 3.8 Live、Gemini 3.8 Live Translator** | 实时音频／翻译；API | 分别服务实时语音交互和实时翻译；不与 TTS 型号合并计数。[官方更新日志](https://ai.google.dev/gemini-api/docs/changelog) |
| 9 月 15 日 | TypeSafe AI：**Jev** | 决策；早期访问 | 输入非结构化状态，输出带概率的类型化决策；第三方平台的 Jev 1.13 名称不另算一次首发。[官方公告](https://typesafe.ai/blog/introducing-system-one-models-and-jev) |
| 9 月 10 日 | DeepSeek：**DeepSeek-V4.1-Flash** | 原生视觉多模态；API | 新架构家族的首款小模型；API 名称为 `deepseek-flash`，旧 Flash 别名被路由到新版本。[官方更新日志](https://api-docs.deepseek.com/updates) |
| 9 月 3 日 | OpenAI：**GPT-6 Astra** | 通用推理；API 发布记录 | API 日志记录正式进入 API 的时间；应用侧发布与 API 开放不应混成同一个日期。[官方更新日志](https://developers.openai.com/api/docs/changelog) |
| 9 月 3 日 | Google：**Lyria 3.5** | 音乐生成；预览 | 新的音乐生成预览型号。[官方更新日志](https://ai.google.dev/gemini-api/docs/changelog) |
| 9 月 2 日 | Meta：**Muse Spark 1.3** | 通用／工具使用；商业服务 | 更新模型的协作与工具使用行为；Contributor 是数据使用条款不同的服务档位，不重复计作新模型。[官方公告](https://research.meta.ai/blog/introducing-muse-spark-1-3) |
| 9 月 2 日 | Google：**Gemini 3.8 Flash** | 通用多模态；API | 新 Flash 版本进入 API；不要与月底宣布的 Gemini 4 Argon 混成同一次发布。[官方更新日志](https://ai.google.dev/gemini-api/docs/changelog) |

## 国内厂商与开放模型：这些项目需要单独说明

有些重要项目已经能核对到官方模型或仓库，但首发日期的证据不够一致。这些项目不能为了凑一张“全量榜单”，硬塞到某一天。

| 厂商／项目 | 已核对到的内容 | 本文怎样处理 |
| --- | --- | --- |
| 小米 **MiMo-V2.6-Pro、MiMo-V2.6-Flash、MiMo-V2.6-Pro-UltraSpeed** | 官网确实列出了三款，并描述了全模态与专业任务定位。[官网](https://mimo.mi.com) | 官网当前页面没有明确首发日；不把第三方 9 月 21／22 日上架时间当作定论。UltraSpeed 的服务加速也不等于独立基础模型。 |
| inclusionAI **Ming-Image-0.1-Design、Ming-Image-0.1-Design-Layer** | 官方模型卡提供设计生成与 RGBA 图层拆分权重。[Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) / [Design-Layer](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design-Layer) | 模型仓库日期可以辅助观察开放进度，但不直接替代公告日。 |
| 腾讯混元 **AuK、AuK-Flash** | 官方仓库提供语音生成／编辑模型及快速变体；9 月 13 日更新记录确认其作为音频编辑挑战基线。[官方仓库](https://github.com/Tencent-Hunyuan/AuK) | 挑战基线公告不是首发公告，不根据这条更新反推模型首次发布日期。 |
| MiniMax **Music 3.0** | 官方研究页介绍完整歌曲生成与开放权重。[官方介绍](https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model) | 当前可读取的正文没有明确首发日期，故列为补充，不强行记作 9 月新品。 |
| Upstage **Solar Mini 4、Solar Decide** | 官方产品与模型页列出轻量 Agent 模型和决策模型。[Mini 4](https://www.upstage.ai/blog/en/solar-mini-4) / [模型目录](https://console.upstage.ai/docs/models) | 动态模型页的日期尚未完成独立核对，暂不写进精确时间线。 |

另外，检索还出现了 **Kimi K3、Step 5 Preview、Qwen3.8-Max-0902、GLM-5.3-FlashX、Gemini 3.8 Flash Cyber** 等线索。它们的命名版本、首发日期或是否只是服务更新，需要继续对照各自官方发布记录；本次不以第三方月历替代这一环节。

**Ideogram 4.5** 也有 10 月 1 日发布的报道与官方模型页链接，但本次官方页读取失败，暂不纳入已完成一手核验的清单。[官方模型页](https://ideogram.ai/models/4.5)

## 还有哪些更新，不能算“又发了一款模型”

### 已有模型进入正式服务

OpenAI 的 **GPT-Rosalind 正式开放**、**GPT-Live 进入 API**，以及 Google 的 **Lyria 3 Pro 正式可用**，都属于值得关注的开放范围或服务状态变化，但不能仅凭当月 API 日志就断言模型当月首次诞生。[OpenAI 日志](https://developers.openai.com/api/docs/changelog) / [Google 日志](https://ai.google.dev/gemini-api/docs/changelog)

### 更快的档位，不一定是新的权重

Qwen3.8-Max-Prime、GLM-5.3-Prime，以及部分 UltraSpeed／Fast 档位，可能是服务速度或部署配置变化。是否属于独立模型，要看厂商有没有明确说明训练与权重区别，而不是看名字里有没有一个新的后缀。

### 更多产品包装，不等于更多模型

法律专用工作流、实时虚拟人、企业版接口和新的安全访问计划，可以改变可用性与体验，却不一定改变底层模型。把这些也加进“新模型数量”，会把整个月的发布规模夸大。

## 本月最值得理解的四个变化

### 1. 旗舰模型开始同时谈能力与任务成本

Anthropic 在 Sonnet 5.5 公告中强调速度和完成任务时的消耗；Cognition 把 SWE-2 放在能力与推理成本的取舍中讨论；Fireworks 则直接对 Kimi K3 的冗长推理做后训练。

共同点不是“每百万 token 又便宜了多少”，而是：**同一个真实任务，能不能用更少的步骤、等待时间和资源做完。**

因此，评估模型最好记录任务成功率、端到端耗时、重试次数和总费用，而不是只比较 token 单价。厂商宣称节省 30% 或 40%，也要回到自己的工作流验证，不能直接当作普适结果。

### 2. 决策模型突然形成了一条产品线

从 Jev 到 Span-01、GLiDE，再到 Strands Decider 和 Clef，本月出现了一批不以长文本生成作为主要输出的模型。

它们更像程序里的判断函数：

```text
上下文 + 允许的选项 → 选项概率／结构化判断 → 代码决定执行或交给人工
```

这适合路由、分流、行为检测、风险筛查和选择下一步工具。但“只输出固定选项”不等于永远正确。输入里的提示注入、概率失准和分布变化仍然存在，涉及删除、支付、授权等动作时，也不应仅凭一个分数自动放行。

### 3. “多模态”必须看输入和输出，不能只看名字

Qwen3.8-Omni-Flash 的重点是多种输入转文本；Gemini Live 是实时交互；Gemini TTS 与 Eleven v4 是生成语音；Lyria 和 MiniMax Music 面向音乐；FLUX 3 Action 则预测动作。

这些能力差别很大。一个会理解视频的模型，不一定会生成视频；一个接受音频的模型，不一定能说话；一个“世界模型”，也不一定是面向普通用户的聊天产品。

选型之前，先问清四件事：**输入是什么、输出是什么、是否实时、是否需要专门硬件或运行环境。**

### 4. 开放权重越来越偏向可组合的专用能力

本地部署不只有“把一个巨型聊天模型塞进显卡”这一条路。Bonsai 主打低比特权重，Strands Decider 主打小型决策，Ming-Image 主打设计与分层，AuK 主打语音生成和编辑。

这些模型可以与云端旗舰组合：高频、私密或边界明确的任务留在本地，复杂开放式工作再交给远端模型。代价是工程复杂度增加，还要核对各自的许可、硬件要求与实际稳定性。

## 如果要试，先从自己的任务开始

对于普通用户，不必为了“追新”每天换主力模型。挑三五个自己常做的任务：写文章、整理资料、改代码、做图片，保留同一组输入，观察新模型是否真的改善了结果。

对于开发者，可以建立一张小型回归表：

| 检查项 | 要回答的问题 |
| --- | --- |
| 质量 | 是否正确完成任务？有没有编造、漏项和格式错误？ |
| 总成本 | 把思考、工具、重试、缓存和多轮交互都算进去后，多少钱？ |
| 延迟 | 首次响应和整个任务完成分别多久？ |
| 兼容性 | 工具调用、结构化输出和上下文行为有没有变化？ |
| 权限与数据 | 是否能拒绝危险动作？数据会不会被额外保存或用于训练？ |

不要把迁移做成“改一下 model 名称就完事”。模型升级也可能改变默认推理方式、参数兼容性与输出习惯。

## 结语：模型更多，分工也更细了

这个月最容易记住的，是 GPT-6.1、Claude 5.5 和 Gemini 4 这些大版本号。但更值得长期跟踪的，可能是模型正在从一个万能聊天框，拆成一组可以组合的能力。

旗舰负责复杂判断，轻量模型承接高频工作，语音与音乐模型提供交互和创作能力，嵌入模型负责检索，决策模型把一部分判断变成可编程接口。

接下来真正要比的，不只是“谁的新模型分数最高”，而是**谁能把这些能力组合成可靠、可负担、可审计的完整工作流。**

## 来源与核验说明

本文各台账行与补充项目均附官方公告、更新日志或模型仓库链接。第三方月度追踪页仅用于发现线索，不用于替代首发证据。

核验截至 **2026 年 10 月 2 日**。预览访问、套餐权限与开放权重的许可可能继续变化；文中没有统一横向比较厂商跑分，也不把未发布的预告写成已上线。日期仍待核实的项目已单列，后续有一手证据时再补入主时间线。
