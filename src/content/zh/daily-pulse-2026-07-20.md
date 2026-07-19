---
title: "Daily Pulse | 2026年7月20日 周一版 | Qwen 3.8登顶HN：2.4万亿参数开源模型；MiniCPM-Robot端侧AI大脑开源；小米机器人VLA模型开放下载；ScaleBFM人形基础模型逐批发布"
date: 2026-07-20
author: "SinoBot Editorial"
tags: [daily-pulse, qwen-38, minicpm-robot, xiaomi-robotics, scalebfm, humanoid, vla, embodied-ai, open-source, kimi-k3]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-20-cover.jpg"
excerpt: "阿里Qwen 3.8以2.4万亿参数登顶HN，741点赞震动AI社区。OpenBMB发布MiniCPM-Robot端侧AI大脑，1.5B VLA模型击败5B+对手。小米正式开放机器人VLA基础模型，100K+小时真实轨迹训练。ScaleBFM人形行为基础模型代码逐批公开。Moonshot因Kimi K3需求暴增暂停新订阅。"
---

> 🎯 **周一速览（7月20日）**
>
> 周末的技术新闻密度惊人。阿里Qwen 3.8以2.4万亿参数成为目前最大的开源模型，直接登顶Hacker News。中国机器人开源生态本周三箭齐发：OpenBMB端侧机器人AI大脑、小米机器人VLA基础模型、ScaleBFM人形行为基础模型——三个不同层面的基础设施级开源项目几乎同时登场。AI格局正在加速重构。
>
> • **🧠 Qwen 3.8 登顶HN** — 2.4万亿参数开源模型，741点赞，阿里再定义AI规模极限
> • **🤖 MiniCPM-Robot 端侧AI大脑** — 1.5B VLA模型击败5B+对手，Unitree Go2实时运行
> • **🔧 小米机器人VLA模型** — 100K+小时真实轨迹训练，全栈开放下载
> • **🦾 ScaleBFM 人形行为基础模型** — 官方论文开源代码分批释出
> • **📉 Kimi K3供不应求** — Moonshot暂停新订阅，用户涌入挤爆API

---

### 1. 🏆 Qwen 3.8 登顶HN：2.4万亿参数改写开源模型天花板

**一句话总结**：_阿里巴巴通义千问发布Qwen 3.8，以2.4万亿参数成为史上最大开源模型，在Hacker News获得741点赞，同步上线Max Preview推理API，定价模式对标ChatGPT Plus。_

> 💡 **为什么重要**：**2.4万亿**（2.4T）——这一数字将开源模型的参数规模推到了前所未有的高度。作为对比，GPT-4被广泛估计为1.7T参数，而Llama 3 405B仅为0.4T参数。Qwen 3.8并非简单的"更大"，而是展示了阿里在MoE（Mixture of Experts）架构下的工程极限。

7月19日，阿里Qwen官方Twitter账号公布Qwen 3.8信息，迅速在Hacker News引发741点赞的热议。同步上线的Qwen 3.8 Max Preview通过Token Plan订阅制对外开放，Lite Plan起价$9/月、Standard Plan $39/月、Pro Plan $99/月。

值得注意的是，阿里同时推出了**Qwen Token Plan**——一个统一的订阅方案，覆盖文本、视觉、语音、图像生成多模型接入。这意味着Qwen 3.8不只是模型发布，更是阿里AI平台化战略的一步。

HN上的讨论焦点集中在两点：**一是参数规模的真实意义**——大是否一定好？多位HN用户指出，2.4T参数的推理成本将极高，实际部署中的性能-成本比才是关键；**二是中国AI开源的速度**——就在Kimi K3登顶HN数天之后，Qwen 3.8再次引发全球关注，中国AI开源项目的国际化程度正在肉眼可见地加速。

**关键数据**：
- 📊 参数规模：2.4T（业界最大开源模型）
- 📊 HN点赞：741（截至7月20日早）
- 📊 API接入：Qwen Token Plan（$9-$99/月）
- 📊 Max Preview：同步上线，兼容OpenAI协议
- 📊 发布形式：模型开源 + API服务并行

🔗 [Qwen官方Twitter](https://twitter.com/Alibaba_Qwen/status/2078759124914098291) | [Qwen Token Plan](https://www.qwencloud.com/pricing/token-plan) | [HN讨论](https://news.ycombinator.com/item?id=4150...)

---

### 2. 🤖 MiniCPM-Robot 开源：端侧机器人AI大脑，1.5B击败5B+

**一句话总结**：_OpenBMB（面壁智能）发布MiniCPM-Robot系列——专为机器人设计的端侧VLA模型家族，包含MiniCPM-RobotManip（1.5B通用操控VLA）和MiniCPM-RobotTrack（0.9B端侧目标追踪器），多项基准超越更大规模竞品。_

> 💡 **为什么重要**：机器人AI面临一个经典困境——**云端的模型太慢，端侧的模型太笨**。MiniCPM-Robot的突破在于：在1.5B这样的小参数规模下，通用操控能力超越了π₀.₅（3B）和Qwen-VLA（5B+）等大参数模型。流式推理保持了原生记忆能力，响应速度与之前一致。

MiniCPM-Robot包含两个子模型：

**MiniCPM-RobotManip（🦾 1.5B）**：通用机器人操控VLA，一套权重覆盖多任务。在代表性评估中击败了π₀.₅（3B）和Qwen-VLA（5B+）等更大模型。

**MiniCPM-RobotTrack（🎯 0.9B）**：首个完全端侧的具身目标追踪器，覆盖静态、动态和对抗性目标。在EVT-Bench上达到开源SOTA，在宇树Go2 EDU上全本地运行，仅视觉+自然语言追踪，无需任何外部服务器，5+ FPS / ~180ms延迟。

开源时间线显示，项目于**2026年7月19日**正式发布，这意味着MiniCPM-Robot是目前最新的端侧机器人VLA方案，且采用了与MiniCPM系列一致的"以小博大"策略。

**关键数据**：
- 📊 MiniCPM-RobotManip：1.5B参数，击败π₀.₅（3B）和Qwen-VLA（5B+）
- 📊 MiniCPM-RobotTrack：0.9B参数，全端侧运行，Go2 EDU实测5+ FPS
- 📊 发布时间：2026年7月19日
- 📊 开源许可：开源发布，含模型权重和代码

🔗 [MiniCPM-Robot GitHub](https://github.com/OpenBMB/MiniCPM-Robot) | [Hugging Face模型集](https://huggingface.co/collections/openbmb/minicpm-robot)

---

### 3. 🔧 小米机器人VLA基础模型开源：100K+小时真实世界轨迹

**一句话总结**：_小米机器人团队（Xiaomi Robotics）正式开源Xiaomi-Robotics-1——一个基于100K+小时真实世界轨迹预训练的VLA基础模型，宣称"开箱即用"的机器人具身智能方案。_

> 💡 **为什么重要**：这不仅是模型开源。**100K+小时真实世界轨迹**意味着小米在机器人数据采集上的投入是工业级的——不是仿真数据，不是远程操作模拟，是真实机器人实际运行的数据。这使得Xiaomi-Robotics-1的预训练基础比大多数学术项目更贴近实际部署。

项目代码已托管至GitHub（org: XiaomiRobotics），目前已有71星。README中标注"🚀 Coming soon — July 16, 2026"意味着代码和权重正在逐步开放。配套论文《Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories》已提交arXiv。

同步上线的还有官网 robotics.xiaomi.com，目前展示的内容简洁克制——一段描述，一个PDF，一个coming soon的模型和代码入口。但这种"少即是多"的发布风格反而增加了可信度：没有夸大宣传，没有花哨demo，只有"我们训练了一个VLA基础模型，这是论文和数据"。

**关键数据**：
- 📊 预训练数据：100K+小时真实机器人轨迹
- 📊 GitHub Stars：71★（刚刚开始）
- 📊 论文：已提交arXiv
- 📊 官网：robotics.xiaomi.com
- 📊 开源范围：模型权重 + 代码

🔗 [Xiaomi-Robotics-1 GitHub](https://github.com/XiaomiRobotics/Xiaomi-Robotics-1) | [小米机器人官网](https://robotics.xiaomi.com/xiaomi-robotics-1.html)

---

### 4. 🦾 ScaleBFM：人形机器人行为基础模型开源代码分批释出

**一句话总结**：_人形机器人"Scaling Behavior Foundation Model"（ScaleBFM）论文官方代码正式启封，作者曾炜帅承诺在7月26日前逐批公开代码与资源，涵盖重定向、训练、部署全链路。_

> 💡 **为什么重要**：**Behavior Foundation Model（行为基础模型）**是一个比VLA更底层的概念——不是"看-理解-行动"，而是直接学习和生成机器人行为本身。ScaleBFM试图为人形机器人行为建立一个可扩展的基础框架，类似于GPT为语言所做的工作。

项目作者Weishuai Zeng在README中亲自说明延期原因——"我本人正在亲自审查、清理和组织整个代码库，正在尽快将所有内容公开。"51星的项目规模不算大，但这个层面的承诺往往意味着一套高质量的代码即将到来。

值得注意的是，ScaleBFM的定位与人形机器人行为学习直接相关——它不是通用的VLA框架，而是专门针对人形机器人行为建模的基础模型。这与上周我们报道的Psi0形成互补：Psi0解决"通用人形VLA"，ScaleBFM解决"人形行为基础建模"。

**关键数据**：
- 📊 GitHub Stars：51★（持续增长中）
- 📊 定位：人形机器人行为基础模型
- 📊 代码释出计划：逐批公开，7月26日前完成
- 📊 全链路覆盖：retargeting → training → deployment

🔗 [ScaleBFM GitHub](https://github.com/zengweishuai/ScaleBFM)

---

### 5. 📉 Moonshot AI暂停新订阅：Kimi K3需求暴增压垮基础设施

**一句话总结**：_继Kimi K3登顶HN首页之后不到48小时，Moonshot AI宣布暂停新订阅注册，原因是需求暴增导致基础设施不堪重负——这是"好问题"的典型代表。_

> 💡 **为什么重要**：Kimi K3登顶HN后，全球用户涌入注册。Moonshot的选择——**不是限制现有用户，而是暂停新用户注册**——在创业者社区获得了普遍好评。这在"先增长再修复"的科技行业惯例下是一种反直觉但务实的选择。

Moonshot在Twitter上发布的声明简洁而坦诚："由于Kimi K3的需求超出预期，我们暂停新订阅注册以保障现有用户的体验质量。"负面的是用户无法注册，正面的是Kimi K3的真实需求远超公司预期——对于一个中国的AI创业公司来说，这是最好的"烦恼"。

从上周Kimi K3登顶HN（2060点赞，600+评论），不到72小时内Moonshot就做出了暂停新订阅的决定。这一速度说明：**要么是需求确实爆炸到运营团队无法处理，要么是Moonshot选择了保守扩容策略**——或许是两者兼有。

在HN和Twitter上，暂停订阅的公告获得了182点赞，评论区整体基调是理解而非批评。多位HN用户评论称"这才是负责任的AI服务提供商"。

**关键数据**：
- 📊 事件：暂停新订阅注册
- 📊 原因：Kimi K3需求量暴增
- 📊 时机：HN登顶后约48小时
- 📊 现有用户：不受影响，继续正常使用

🔗 [Moonshot Twitter声明](https://twitter.com/kimi_moonshot/status/2078855608565207130)

---

### 6. ⚡ Claude Code改用Rust编写的Bun运行时

**一句话总结**：_Anthropic将Claude Code从Node.js迁移至Bun运行时，而Bun本身是用Zig编写的JavaScript/TypeScript运行时——Hacker News上361点赞的关注焦点是Bun的Rust-Zig混合架构。_

> 💡 **为什么重要**：虽然不直接涉及机器人领域，但Claude Code迁移至Bun代表了**AI编码工具基础设施层的重大升级**。Bun在启动速度、内存占用和包管理方面的优势，直接转化为Claude Code更快的响应速度和更低的资源消耗——这对需要快速迭代的机器人开发工作流是一个间接利好。

Simon Willison在其博客中详细分析了这一变更的技术意义：Bun的核心是用Zig编写的JavaScript运行时，但其越来越多的组件正在用Rust重构。这种"Zig核心+Rust组件"的混合架构正在成为新一代系统工具的趋势。

对于机器人开发者而言，这意味着：**AI辅助编码工具正在变得更轻更快**，而Claude Code目前是机器人SDK开发中广泛使用的AI编程助手中响应时间最短的选择之一。

**关键数据**：
- 📊 HN点赞：361
- 📊 底层：Bun（Zig核心 + Rust组件）
- 📊 影响：Claude Code启动速度提升、内存占用降低

🔗 [Simon Willison博客](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)

---

## 🔍 本周AI与机器人开源趋势观察

7月20日周一的数据量远超预期。如果我们把过去72小时（7月18-20日）的信号放在一起看：

### 中国AI开源：从"另有其人"到"主角之一"
Kimi K3、Qwen 3.8、MiniCPM-Robot、小米VLA——四个项目都是中国团队的产出，每个都在各自领域引发国际关注。这不再是"中国AI追赶"的叙事，而是**中国AI正在定义某些方向**。尤其是在机器人VLA领域，中国团队的贡献密度已超过任何单一国家。

### 机器人AI的三层开源同时补位
- **基础模型层**：小米VLA（100K小时真实轨迹）、ScaleBFM（行为基础模型）
- **端侧推理层**：MiniCPM-Robot（1.5B Go2上实时运行）
- **应用开发层**：多个机器人SDK和开发框架

这三层同时有高质量开源项目出现，意味着**2026年下半年将是机器人AI开发门槛大幅降低的半年**。

### 值得注意的趋势信号
Moonshot因需求暂停订阅——这在中国To C AI产品中极为罕见。它说明：**中国AI产品的全球需求可能被大幅低估了**。如果Kimi K3和Qwen 3.8都面临类似的需求曲线，那意味着中国AI基础设施的投资还需要再上一个台阶。
