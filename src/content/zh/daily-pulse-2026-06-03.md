---
title: "Daily Pulse｜2026年6月3日"
date: 2026-06-03
author: "SinoBot编辑部"
tags: [daily-pulse, humanoid, robotics, AI]
tier: "daily-pulse"
excerpt: "Boston Dynamics Atlas强化学习搬冰箱；Hello Robot发布Stretch 4轮式家务机器人；ISO更新家用人形机器人安全标准；MiniMax发布M3模型性能超GPT-5.5；ICRA 2026本周在维也纳开幕；微软发布Surface RTX Spark本地AI开发机。"
---

## 📡 快讯速览

### 1. Boston Dynamics Atlas 用强化学习学"搬冰箱"，展现全身控制新高度

Boston Dynamics 发布了其电动 Atlas 人形机器人的最新进展——通过强化学习（RL）在仿真环境中反复练习，Atlas 学会了使用全身力量搬运一台迷你冰箱。与传统的指尖操控不同，Atlas 利用手臂、躯干和腿部共同承担负载，体现了"全身物理智能"的理念。团队透露，从 Atlas 今年1月首次公开亮相至今仅数周时间，就已取得了这一里程碑式的进步。

🔗 [Boston Dynamics: Training a Humanoid Robot for Hard Work](https://bostondynamics.com/blog/training-a-humanoid-robot-for-hard-work)

---

### 2. Hello Robot 发布 Stretch 4：不追人形，专注实用

Hello Robot 正式发布 Stretch 4——一款务实的轮式家庭机器人。Stretch 4 放弃了"人形机器人"的噱头，升级了全向移动底盘、全新传感器头部（双半球激光雷达 + Luxonis 双目相机），搭载 Intel 主控平台。CEO Aaron Edsinger 表示，Stretch 4 的目标是从研究平台走向真正的家庭部署。这一设计理念与当下狂热的人形机器人赛道形成鲜明对比。

🔗 [IEEE Spectrum: Hello Robot's Wheeled Home Robot Ditches Humanoid Hype](https://spectrum.ieee.org/stretch-4-home-robot)

---

### 3. ISO 13482 更新：家用机器人安全标准面临大修

IEEE Spectrum 报道，ISO 13482（个人护理机器人安全标准）正在接受12年来的首次重大修订。韩国 ETRI 研究员 Jae-Seong Lee 指出，现有标准仅覆盖碰撞检测等基础安全，而人机交互的"双向耦合"——即人类行为如何受机器人影响、机器人又如何因人类而改变感知——尚未被纳入合规框架。随着人形机器人从实验室走向家庭，安全标准亟需补上这一缺口。

🔗 [IEEE Spectrum: Domestic Humanoid Robot Safety Standards Are Shifting](https://spectrum.ieee.org/domestic-humanoid-robot-safety-standards)

---

### 4. ICRA 2026 在维也纳开幕：全球机器人学界齐聚

国际机器人与自动化大会（ICRA 2026）于6月1日至5日在奥地利维也纳举行。作为机器人领域最顶级的学术会议之一，本届 ICRA 聚焦人形机器人、具身AI、强化学习等前沿方向。来自东京大学 JSK 实验室的轮腿机器人 WiXus 等多个项目在会上亮相。

🔗 [ICRA 2026](https://2026.ieee-icra.org/)

---

### 5. MiniMax M3 发布：中文大模型以十分之一成本超越 GPT-5.5

中国 AI 初创公司 MiniMax 发布了其 M3 大语言模型，在多项基准测试中超越 GPT-5.5 和 Gemini 3.1 Pro，而成本仅为其 5%-10%。M3 拥有百万级 token 上下文窗口，支持原生多模态，并计划以开放权重方式开源。在 AI 编码和智能体任务中，M3 展现出与闭源前沿模型相当的能力，这将显著降低具身AI的底层模型调用成本。

🔗 [VentureBeat: MiniMax M3 debuts](https://venturebeat.com/technology/minimax-m3-debuts-eclipsing-gpt-5-5-and-gemini-3-1-pro-on-key-benchmark-performance-for-just-5-10-of-the-cost)

---

### 6. 微软发布 Surface RTX Spark Dev Box，AI 推理本地化提速

在 Microsoft Build 2026 上，微软发布了 Surface RTX Spark Dev Box——一台搭载 NVIDIA Blackwell RTX Spark 芯片、128GB 统一内存的紧凑台式机，可本地运行超过 1200 亿参数的 AI 模型。这台设备最高可达 1 petaflop AI 算力，旨在让开发者摆脱按 token 付费的云端推理模式。对于机器人领域的边缘 AI 部署和本地模型测试，这一定价模式变革值得关注。

🔗 [VentureBeat: Microsoft debuts Surface RTX Spark Dev Box](https://venturebeat.com/infrastructure/microsoft-debuts-surface-rtx-spark-dev-box-to-run-large-ai-models-without-cloud-costs)

---

### 7. 开源机器人 AI 平台正在让机器人开发"去 Ph.D.化"

IEEE Spectrum 刊发专题报道，梳理了从 ROS 到 Nvidia、Hugging Face、阿里巴巴等公司推动的开源机器人 AI 工具生态。Nvidia 机器人产品总监 Spencer Huang 表示："进入机器人领域不再需要博士学位。"开源运动正在以前所未有的速度降低智能机器人的开发门槛，将机器人从专业学科变成任何人可以参与的平台。

🔗 [IEEE Spectrum: Open-Source AI Makes It Easier to Build Smart Robots](https://spectrum.ieee.org/open-source-robot-ai-platforms)

---

## 🔍 视频解读

### Atlas 搬冰箱：强化学习如何让人形机器人"学会用劲"

本期推荐 Boston Dynamics 最新发布的 Atlas 训练视频。机器人通过 RL 在仿真中经历无数次搬运尝试（包括不同重量、形状、姿态的冰箱变化），最终习得了使用全身表面（手臂、肩膀、膝盖、躯干）承载重物的能力。这一突破的关键不在于"看见了冰箱"，而在于通过触觉和力反馈在互动中实时适应物体。对于人形机器人的工业化落地，这类"全身物理智能"比单纯的多模态感知更为根本。

🔗 [Boston Dynamics: Training a Humanoid Robot for Hard Work](https://bostondynamics.com/blog/training-a-humanoid-robot-for-hard-work)

---

*每日更新，追踪智能硬件与机器人前沿动态。*
