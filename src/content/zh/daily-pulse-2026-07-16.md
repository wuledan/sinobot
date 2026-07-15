---
title: "Daily Pulse | 2026年7月16日 周四版 | Thinking Machines Lab 发布975B开源模型；Grok Build正式开源；人形机器人无监督RL框架UFO亮相"
date: 2026-07-16
author: "SinoBot Editorial"
tags: [daily-pulse, inkling, thinking-machines-lab, open-weights, grok-build, xai, coding-agent, ufo, humanoid, rl, gemma-4, edge-inference, robot, open-source]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-16-cover.jpg"
excerpt: "Thinking Machines Lab 正式发布 Inkling——975B MoE 开源权重模型（41B活跃），支持1M上下文与多模态原生推理。xAI 将 Grok Build 编码代理 CLI/TUI 完整开源。UFO 无监督强化学习框架让宇树 G1 人形机器人实现自主训练。一位开发者用 13 年前的老 Xeon 服务器跑通 Gemma 4 26B，仅 5 tokens/s。"
---

> 🎯 **今日速览（7月16日）**
>
> 今天的头条围绕一个共同主题：**AI 正在从"谁能造出更大的模型"转向"谁能更好地部署、定制和开放"**。975B级模型开源可用，编码代理工具链拥抱开放，人形机器人训练从实验室走向开源社区。
>
> • **🧠 Inkling 975B 开源模型发布** — Thinking Machines Lab 推出首款开源权重模型：975B MoE，41B 活跃参数，1M 上下文，原生多模态推理，可在 Tinker 平台直接微调
> • **🔧 Grok Build 正式开源** — xAI 将 Grok 的终端编码代理 CLI/TUI 以 Rust 源码形式发布到 GitHub，支持 ACP 协议，可嵌入任意编辑器
> • **🤖 UFO：人形机器人无监督 RL 框架开源** — 支持宇树 G1 训练与真机部署，将学习管道与机器人配置分离，降低人形机器人入门门槛
> • **💻 Gemma 4 26B 在 13 年老 Xeon 上运行** — 无 GPU，5 tokens/s，仅需 $300 的二手服务器即可运行现代 MoE 模型
> • **🚫 "我们不用 AI"——一场反潮流宣言** — 硬件设计公司 Mass-Driver 公开声明所有设计与生产流程完全不使用 AI

---

### 1. 🧠 Inkling 975B：Thinking Machines Lab 发布开源权重模型

**一句话总结**：_Thinking Machines Lab 正式发布 Inkling——975B 总参数/41B 活跃参数的 MoE 开源模型，支持 1M 上下文窗口与文本、图像、音频原生多模态推理，并可在 Tinker 平台直接微调。_

> 💡 **为什么重要**：这是目前**规模最大的可商用开源权重模型之一**，且 Thinking Machines Lab 不仅提供了模型权重，还配套了完整的微调平台（Tinker）和开发者 Playground。对于一个 975B 参数的模型来说，41B 的活跃参数意味着推理成本相对可控，而 1M 的上下文窗口为长文档、代码库分析等场景打开了想象空间。

Inkling 基于 45 万亿 token 的多模态数据预训练，采用 Mixture-of-Experts 架构，在保持 41B 活跃参数的同时实现了 975B 的总参数量。同步发布的还有 Inkling-Small（12B 活跃参数），以更低的成本覆盖轻量场景。

数据显示，Inkling 在文本、代理任务、多模态和音频评估中均表现出均衡的竞争力——并非某个单一基准的"刷榜者"，而是覆盖面极广的通才模型。

**关键数据**：
- 📊 总参数量：975B | 活跃参数：41B | 上下文：1M tokens
- 📊 预训练数据：45 万亿 token（文本 + 图像 + 音频 + 视频）
- 📊 可在 Tinker 平台直接微调，模型可自行编写微调作业
- 📊 开源权重，Apache 2.0 类许可

🔗 [Thinking Machines Lab 官方公告](https://thinkingmachines.ai/news/introducing-inkling/) | [HN 讨论](https://news.ycombinator.com/item?id=47613622)

---

### 2. 🔧 Grok Build 正式开源：xAI 发布编码代理 CLI/TUI

**一句话总结**：_xAI 将 Grok Build——其终端 AI 编码代理工具——以 Rust 源码形式完整发布到 GitHub，支持交互式 TUI、headless 脚本模式，以及通过 ACP 协议嵌入编辑器。_

> 💡 **为什么重要**：在 Claude Code、OpenCode、Cursor 等编码代理激战的当下，xAI 选择将 Grok 的编码工具完整开源，意味着开发者可以审查、修改甚至 fork 自己的版本。这与 OpenAI 的 Codex CLI 和 Anthropic 的 Claude Code 的闭源路线形成鲜明对比。

Grok Build 是一个全屏 TUI 应用，能理解代码库、编辑文件、执行 Shell 命令、搜索网页和管理长期任务。它支持 ACP（Agent Client Protocol），可以嵌入 VS Code、Neovim 等编辑器。

> 📌 **一句话**：继 Grok 模型本身的开源争议之后，xAI 将编码代理基础设施也推向了开源——这可能会加速编码代理领域的"Linux 化"进程。

🔗 [GitHub: xai-org/grok-build](https://github.com/xai-org/grok-build) | [x.ai/cli](https://x.ai/cli)

---

### 3. 🤖 UFO：人形机器人无监督强化学习框架开源

**一句话总结**：_Roboparty 团队开源 UFO——一个面向人形机器人的无监督强化学习框架，已完整支持宇树 G1 的训练与真机部署，分离学习管道与机器人配置，降低人形机器人研发门槛。_

> 💡 **为什么重要**：人形机器人训练长期依赖大规模人工标注和精心设计的奖励函数。UFO 采用无监督 RL 方法，让机器人通过自主探索学习运动技能，**训练管道与机器人配置解耦**，意味着同一个框架可以适配不同的人形机器人平台。

UFO 当前最佳测试路径为宇树 G1，训练基于 MJLab，支持多源运动数据导入（RobotState CSV/NPZ），具备跟踪推断、目标推断和奖励推断能力。训练后的模型可通过 ONNX 导出，并经由 UFO-Deploy 运行时部署到真机。

> 📊 **技术亮点**
> | 功能 | 状态 |
> |------|------|
> | 宇树 G1 训练 | ✅ 已支持且测试最完善 |
> | 多源运动数据导入 | ✅ CSV / NPZ / ufo_pkl |
> | ONNX 导出 | ✅ 训练后直接导出 |
> | 真机部署与遥操作 | ✅ deploy 分支 |
> | 跨机器人策略迁移 | ❌ 暂不支持 |

这一框架对国内人形机器人生态具有直接价值——宇树 G1 是目前国内外关注度最高的消费级人形机器人之一，UFO 极大降低了开发者进行 G1 运动训练的起始门槛。

🔗 [GitHub: Roboparty/UFO](https://github.com/Roboparty/UFO) | [项目主页](https://roboparty.github.io/UFO/)

---

### 4. 💻 Gemma 4 26B 在 13 年老 Xeon 上运行

**一句话总结**：_一位硬件爱好者成功将 Google 的 Gemma 4 26B MoE 模型在 13 年前的 Ivy Bridge Xeon 服务器上以 5.2 tokens/s 的速度运行，硬件成本不到 300 美元，无 GPU。_

> 📌 **一句话**：当整个行业在追逐 H100/B200 时，这篇帖子证明了一件事——**理解和优化模型比单纯堆算力更重要**。

作者使用了一台 HP StoreVirtual 存储服务器（双路 Xeon E5-2690 v2，2013 年 Ivy Bridge 架构），仅支持 AVX1 指令集——连 AVX2 都没有。通过 ik_llama.cpp 的 CPU MoE 路由优化、投机解码和 Flash Attention 的 CPU 移植，将推理速度推到了 5 tokens/s——阅读速度级别的体验。

> 💡 **启示**：这对中国机器人开发者和嵌入式场景意义重大——如果一片 $300 的旧服务器芯片都能跑 26B 模型，那**在机器人本地部署中等规模模型**的实用门槛比很多人想象的要低得多。

🔗 [NeoMind Labs 原文](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) | [HN 讨论](https://news.ycombinator.com/item?id=47613622)

---

### 5. 🚫 "我们不用 AI"——一家硬件公司的反潮流宣言

**一句话总结**：_硬件设计公司 Mass-Driver 发布文章公开声明，其所有设计、生产和创作流程完全不使用 AI，认为"将设计交给生成式 AI 就失去了设计中的人性"。_

> 📌 **一句话**：在 AI 无处不在的 2026 年，这样一篇"零 AI"宣言反而成为了一种稀缺观点，并登上了 Hacker News 首页。

Mass-Driver 在文章中追溯了字母 A 的演化历史——从 3500 年前西奈矿场的牛头岩画，到古罗马的平刷手写体，再到今天的衬线字体。他们的核心论点在于：**设计中的摩擦力（friction）是创造力的来源，而 AI 正是那个试图消除所有摩擦力的工具。**

文中写道："当我们让 Midjourney 画一头牛时，它不会想到家。ChatGPT 永远不会发明一种新的书法技法，因为它没有手腕可以感到不适。"

> ⚠️ **值得关注**：这篇文章的走红本身也说明了——2026 年的开发者社区对 AI 的态度正在从"全面拥抱"进入"理性审视"阶段。这不是反 AI，而是**对 AI 在创作流程中扮演角色的追问**。

🔗 [Mass-Driver: "From Human Hands"](https://mass-driver.com/article/from-human-hands)

---

## 🔍 本周观察

从今天的头条可以读出几个趋势信号：

1. **开源模型的规模天花板在提升**：975B 参数的 Inkling 开源意味着小团队也能用上接近前沿的模型，开源社区不再只是"追着闭源跑"
2. **编码代理正在经历"Linux 时刻"**：Grok Build 开源后，开发者可以选择自建、自托管编码代理，类似 Linux 在服务器领域的路径
3. **人形机器人开源加速**：UFO 框架 + 宇树 G1 的搭配，让人形机器人运动训练从顶级实验室走向独立开发者
4. **边缘推理的实用化**：$300 旧服务器跑 26B 模型——当推理成本持续下降，机器人的"大脑"部署方式将发生根本变化

---

*来源：Hacker News / GitHub / Thinking Machines Lab / xAI / NeoMind Labs / Mass-Driver*
