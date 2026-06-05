---
title: "Daily Pulse｜2026年6月5日"
date: 2026-06-05
author: "SinoBot编辑部"
tags: [daily-pulse, humanoid, robotics, AI, microsoft-build, computex, openai, autonomous-delivery, industrial-robotics, home-robots]
tier: "daily-pulse"
cover: "/images/humanoid-robot-cctv.jpg"
excerpt: "Microsoft Build发布MXC AI智能体安全沙箱；微软Surface RTX Spark Dev Box支持120B参数本地模型；Computex 2026上Perplexity展示混合推理方案；OpenAI Codex企业版大更新；ICRA 2026在维也纳闭幕；MiniMax公布M3开源路线图；Serve Robotics跨界洗衣配送；新石器×QuikBot构建新加坡配送网络；ABB RL节能专利；Hello Robot Stretch 4发布。"
---

## 📡 快讯速览

### 1. Microsoft Build 2026：MXC——AI 智能体的操作系统级安全沙箱

在 Microsoft Build 2026 上，微软发布了 MXC（Microsoft Execution Containers）——一种操作系统级的沙箱机制，专为 AI 智能体设计。MXC 在 Windows 内核层面构建隔离环境，使 AI 智能体在访问本地文件、浏览器、系统 API 时不会逃逸至宿主系统。OpenAI 和 NVIDIA 均作为首批合作伙伴参与生态建设。

MXC 的核心理念是"最小权限执行"：每个智能体只能访问其任务必需的系统资源，且所有跨域请求（如读取文件、调用外部 API）均需通过内核级审核。这与传统沙箱不同——MXC 不仅隔离资源，还提供了完整的审计日志，记录了智能体的每一次系统调用。

微软表示，MXC 将从 Windows 24H2 版本开始逐步集成，并与 Azure AI 安全链打通。在机器人领域，智能体安全是企业部署的最后一道防线。MXC 提供了一个"可信执行"的参考框架，机器人厂商可借鉴其内核级隔离理念。

🔗 [Microsoft Build 2026 — MXC Announcement](https://build.microsoft.com/en-US/sessions/mxc-agent-security)
🔗 [The Verge: Microsoft Build 2026 Day 1 Highlights](https://www.theverge.com/microsoft-build-2026)
🔗 [Ars Technica: Microsoft MXC deep dive](https://arstechnica.com/gadgets/2026/06/microsoft-mxc-operating-system-level-sandbox-ai-agents/)

---

### 2. 微软 Surface RTX Spark Dev Box：1 Petaflop AI 算力的紧凑桌面

同场在 Build 2026 上，微软发布了 Surface RTX Spark Dev Box——一款搭载 NVIDIA Blackwell RTX Spark SoC 的紧凑台式机。该设备配备 128GB 统一内存，AI 算力高达 1 petaflop，可本地运行超过 1200 亿参数的 AI 模型。

Surface RTX Spark Dev Box 的定位非常明确：替代按 token 付费的云端推理。开发者可以在本地部署全尺寸模型进行调试、微调和测试，再部署到云端或边缘设备。对于机器人研发团队，这意味着他们可以在本地运行大型视觉语言模型，无需为每一次推理调用支付云端费用。

价格方面，微软尚未公布最终定价，但内部消息称起售价在 $15,000 至 $20,000 区间。对于需要频繁调用大模型的企业级团队，这笔一次性投入在 6-12 个月内即可通过云端费用节省收回。

🔗 [VentureBeat: Microsoft debuts Surface RTX Spark Dev Box](https://venturebeat.com/infrastructure/microsoft-debuts-surface-rtx-spark-dev-box-to-run-large-ai-models-without-cloud-costs)
🔗 [Microsoft Surface RTX Spark Dev Box Product Page](https://www.microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box)

---

### 3. Computex 2026：Perplexity AI 展示首个混合本地-云端推理编排器

在 Computex 2026 上，Perplexity AI 展示了与 Intel 合作开发的首个混合推理编排器。该方案可在用户端设备和云端服务器之间实时路由 AI 工作负载，根据任务复杂度、延迟要求和数据敏感性自动选择推理位置。

Perplexity 的混合引擎支持粒度级调度：简单查询在本地用 Intel NPU 完成，复杂推理任务（如代码生成、长文档分析）路由至云端大模型。编排器在切换过程中保持上下文连续性，用户不会感知到推理位置的切换。

这一方案的潜在影响在于：它打破了"本地推理能力有限，云端推理成本高"的二元困境。对于机器人领域的边缘部署而言，混合推理策略意味着机器人可以在本地处理 80% 的日常感知任务，仅在需要高级推理时才调用云端。

🔗 [Computex 2026: Perplexity AI Hybrid Inference](https://www.computexonline.com.tw/sessions/perplexity-ai-hybrid-inference)
🔗 [Tom's Hardware: Perplexity AI and Intel debut hybrid inference at Computex](https://www.tomshardware.com/news/perplexity-intel-hybrid-inference-computex-2026)

---

### 4. OpenAI Codex 企业版重大更新：Sites、Annotations 与领域工作流

OpenAI 在 6 月初发布了 Codex 企业版的大规模更新，新增了 Sites、Annotations 和领域专属工作流三个核心功能。Sites 允许团队将 Codex 直接部署到自有网站或内部平台，Annotations 支持在代码片段上附加上下文说明，领域工作流则预配置了合规、医疗和金融等行业的审查流程。

值得关注的是，Codex 企业版目前有 20% 的用户并非开发者——这些用户来自产品管理、数据分析和市场研究等领域。且这一非开发人员用户群的增速是开发者的 3 倍。这表明 Codex 正在从"开发者工具"演变为"组织级 AI 工作平台"。

对于机器人研发团队，Codex 的 Sites 功能可以直接嵌入内部硬件调试界面或仿真平台，让研究员在熟悉的环境中调用 AI 辅助能力。

🔗 [OpenAI Codex Enterprise Update Blog](https://openai.com/blog/codex-enterprise-june-2026)
🔗 [TechCrunch: OpenAI Codex Enterprise targets non-developers](https://techcrunch.com/2026/06/04/openai-codex-enterprise-non-developer-growth/)

---

### 5. ICRA 2026 在维也纳闭幕：人形机器人、具身 AI 与强化学习的三重焦点

国际机器人与自动化大会（ICRA 2026）于 6 月 5 日在维也纳落下帷幕。本届大会为期五天，吸引超过 8,000 名全球机器人研究者参会，论文投稿数量突破 6,000 篇。三大主题贯穿全场：人形机器人全身控制、具身 AI 的多模态感知、以及强化学习在真实环境中的迁移应用。

在闭幕主题演讲中，多位学者指出当前人形机器人面临的关键瓶颈并非硬件，而是"仿真到现实"的迁移——在仿真中训练的策略难以直接部署到真实物理环境中。这与 Boston Dynamics Atlas 等前沿成果形成了有趣对照：技术领先者已经在解决迁移问题，而大部分研究者仍在为此挣扎。

ICRA 2026 还首次设立了"机器人安全与标准"专题分论坛，呼应了 ISO 13482 等国际标准的修订趋势。这标志着机器人行业正从"能做"转向"安全地做"。

🔗 [ICRA 2026 Conference Website](https://2026.ieee-icra.org/)
🔗 [IEEE Spectrum: ICRA 2026 Wrap-up](https://spectrum.ieee.org/icra-2026-vienna-wrapup)

---

### 6. MiniMax M3 公布开源路线图：开放权重与社区生态构建

MiniMax 在 M3 模型发布后公布了详细的开源路线图。M3 在多项基准测试中超越 GPT-5.5 和 Gemini 3.1 Pro，而推理成本仅为后者的 5%-10%。开源计划将分阶段进行：第一阶段开放模型权重和推理代码，第二阶段开放微调工具链和数据集，第三阶段发布社区协作框架。

MiniMax 表示，M3 的开源目标不是简单地"发布权重"，而是构建一个可持续的社区生态。模型支持百万级 token 上下文窗口和原生多模态（文本、图像、音频），在机器人领域中，这种大容量上下文窗口使得机器人可以在本地缓存完整的任务执行历史。

开源社区反响热烈。Hugging Face 上的 M3 模型页面在发布后 24 小时内获得了超过 5 万次下载。对于具身 AI 开发者而言，M3 的低成本和开放权重意味着可以大幅降低机器人认知模块的模型部署成本。

🔗 [VentureBeat: MiniMax M3 debuts](https://venturebeat.com/technology/minimax-m3-debuts-eclipsing-gpt-5-5-and-gemini-3-1-pro-on-key-benchmark-performance-for-just-5-10-of-the-cost)
🔗 [MiniMax M3 Open Source Roadmap](https://minimax.com/m3-open-source-roadmap)
🔗 [Hugging Face: MiniMax M3 Model Card](https://huggingface.co/MiniMax/M3)

---

### 7. Serve Robotics 跨界洗衣配送，首次超越餐饮外卖

Serve Robotics 宣布与按需洗衣服务 NoScrubs 合作，进军餐饮外卖之外的配送市场。洛杉矶试点本周启动，现有 sidewalk 机器人车队直接承接洗衣订单——同一批机器人、同一套自主堆栈，无需新建车队。在线洗衣服务市场预计从 2025 年 400 亿美元增长至 2030 年 1300 亿美元。Serve 将此视为扩展第一步，后续瞄准干洗、零售、药房和生鲜配送。Serve 在全美运营约 2,000 台机器人，洗衣取送时间通常避开餐饮高峰期，能在不增加车队的情况下提升利用率。

🔗 [Serve Robotics + NoScrubs Announcement](https://roboticsandautomationnews.com/2026/06/04/serve-robotics-expands-beyond-food-delivery-with-autonomous-laundry-service/102255/)

### 8. 新石器 × QuikBot：构建新加坡端到端自动驾驶配送网络

中国 L4 自动驾驶物流公司新石器（Neolix）与新加坡深科技公司 QuikBot 达成战略合作，构建「公路到门口」的端到端自主配送方案。合作覆盖公共道路（Neolix L4 自动驾驶）、建筑内部和门口最后一米（QuikBot AFMD PaaS）三段路径。新加坡交通部正推进《自动驾驶车辆法案》立法，榜鹅数字园区 2026 年底建成物理 AI 测试平台。Neolix 已在全球近 20 个国家、300 余城市部署，累计自动驾驶超 1.5 亿公里。

🔗 [Neolix + QuikBot Partnership](https://roboticsandautomationnews.com/2026/06/04/neolix-partners-with-quikbot-to-develop-autonomous-delivery-network/102275/)

### 9. ABB 联合 Salzburg 大学：RL 专利降低工业机器人能耗

ABB 机器自动化部门（B&R）与 Salzburg 应用科学大学联合申请专利，使用强化学习（RL）优化工业驱动系统能耗。方案让 RL 智能体直接在物理系统上学习不同运动曲线对能耗的影响，无需完整系统模型。关键创新是一种新的数学公式，大幅降低 RL 数据需求和学习时间，让 RL 方法在工业场景可行。目标应用于机器人、机床和自动化产线的高动态运动控制。

🔗 [ABB + Salzburg Energy Optimization Patent](https://roboticsandautomationnews.com/2026/06/03/abb-and-salzburg-researchers-patent-ai-system-to-cut-energy-use-in-industrial-robots/102231/)

### 10. Hello Robot Stretch 4：$29,950 全向轮式家用机器人（详见深度文章）

Hello Robot 发布 Stretch 4 移动操作机器人。核心升级为全向移动底座（可在不转弯的情况下朝任意方向平移）和大幅增强的传感器套件（双激光雷达 + Luxonis 视觉 + 腕部深度相机）。定价 $29,950。Stretch 4 刻意选择轮式+单臂路线而非人形构型，瞄准行动辅助、研究和企业三类场景。出厂即具备建图、导航、自主回充和基础抓取能力。详见今日深度文章「Stretch 4 与实用主义」。

🔗 [IEEE Spectrum: Stretch 4](https://spectrum.ieee.org/stretch-4-home-robot)

---

## 🔍 本周看点

### Build + Computex 双展周：AI 基础设施正在经历范式转变

本周微软 Build 2026 与 Computex 2026 同期举行，两条看似独立的展会线实则指向同一个趋势：AI 基础设施正在经历从"全云端"到"云端-本地协同"的范式转变。

MXC 提供了操作系统级的安全沙箱为智能体运行兜底；Surface RTX Spark Dev Box 让本地运行 120B+ 参数模型成为现实；Perplexity 的混合推理编排器则在软件层面完成了本地与云端的无缝切换。三条技术路线共同指向一个方向：AI 智能体的"可信执行"正在从概念走向工程化落地。

对于机器人行业，这意味着未来的人形机器人可以搭载更强的本地模型、在安全的执行环境中运行、并仅在必要时调用云端——这才是具身 AI 走向大规模部署的合理路径。

*每日更新，追踪智能硬件与机器人前沿动态。*
