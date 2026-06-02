---
title: "Daily Pulse｜2026年6月2日"
date: 2026-06-02
author: "SinoBot编辑部"
tags: [daily-pulse, humanoid, robotics, AI]
tier: "daily-pulse"
excerpt: "Reachy Mini接入GPT Realtime 2实时语音交互；UBC冰球机器人基于强化学习完成本科毕设；NVIDIA AgenticROS演示OpenClaw+Claude具身AI；社区讨论VLA/模仿学习快速上手路径。"
---

## 📡 快讯速览

### 1. Reachy Mini 接入 GPT Realtime 2，桌面机器人实现实时语音交互

Pollen Robotics 为其桌面机器人 Reachy Mini 接入了 OpenAI GPT Realtime 2 模型，实现了端到端实时语音对话。机器人可同时接收语音和视觉输入，调用19个运动/感知工具（包括表情控制、头部/天线/身体运动、摄像头、声源定位等），并能模仿人类动作（挥手、点头、歪头）。项目已在 GitHub 开源（MIT协议）。

🔗 [github.com/opper-ai/reachy-voice-realtime](https://github.com/opper-ai/reachy-voice-realtime)

---

### 2. AgenticROS：NVIDIA 展示 OpenClaw + Claude + Gemini 具身AI

在 Robotics Summit & Expo 上，NVIDIA 发布了 AgenticROS 演示——将 OpenClaw（NemoClaw）与 Claude、Gemini 等大模型结合，运行在 ROS + RealSense 平台上，实现具身AI智能体的构建与闭环控制。这一演示为机器人开发者提供了将大语言模型与机器人操作系统深度融合的参考框架。

🔗 [NVIDIA AgenticROS at Robotics Summit & Expo](https://developer.nvidia.com/agenticros)

---

### 3. UBC 冰球机器人：强化学习从仿真到实体一次打通

UBC Engineering Physics 团队将本科毕业设计打造成一台完整的冰球机器人系统。项目使用强化学习训练策略后直接部署到实体机器人冰球桌，涵盖计算机视觉、强化学习训练、嵌入式控制系统等全链路技术栈，是端到端机器人学习落地的优秀案例。

🔗 [Reddit r/robotics 讨论帖](https://reddit.com/r/robotics/)

---

### 4. Cubemars 展示 400mm 力臂执行器负载测试

机器人执行器厂商 Cubemars 发布了其 400mm 力臂执行器的负载测试视频，展示了高扭矩密度执行器在较大力臂下的实际负载能力。这类组件对协作机械臂、人形机器人关节等应用场景具有重要参考价值。

🔗 [Cubemars 负载测试](https://www.cubemars.com/)

---

### 5. ESP32 开源四足机器人项目 sesame-robot 持续出圈

Reddit 用户 m0rg0t-anton 分享了其首个机器人项目——基于 sesame-robot 开源 ESP32 四足机器人项目搭建的迷你四足机器人。该开源项目门槛低、成本可控，适合机器人爱好者入门足式机器人开发。

🔗 [Reddit r/robotics 展示帖](https://reddit.com/r/robotics/)

---

### 6. 社区热议：VLA / 模仿学习 / 强化学习快速上手路线

Reddit r/robotics 社区近期围绕 Vision-Language-Action（VLA）模型展开了热烈讨论，成员们分享使用 LeRobot 等框架进行端到端模仿学习和强化学习训练的实际经验。新手如何选择学习路径、搭建仿真环境、获取训练数据成为讨论焦点。

🔗 [Reddit r/robotics VLA 讨论](https://reddit.com/r/robotics/)

---

## 🔍 值得关注

### 7. 机器人遥测与远程控制方案梳理

社区梳理了当前主流机器人遥测和远程操控方案，涵盖基于 WebRTC 的低延迟视频回传、MQTT 数据通道、以及面向工业场景的机器人远程操作平台。随着具身智能的发展，远程人机协同与遥操作将成为一个持续升温的技术方向。

🔗 [Reddit r/robotics 遥测讨论帖](https://reddit.com/r/robotics/)

---

*每日更新，追踪智能硬件与机器人前沿动态。*
