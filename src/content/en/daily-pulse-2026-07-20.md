---
title: "Daily Pulse | July 20, 2026 Monday Edition | Qwen 3.8 Hits HN at 741 Points — 2.4T Parameters Rewrite Open-Source Ceiling; MiniCPM-Robot Brings On-Device AI Brain to Robots; Xiaomi Open-Sources VLA Model Trained on 100K+ Hours Real-World Data; ScaleBFM Humanoid Behavior Foundation Model Drops Code"
date: 2026-07-20
author: "SinoBot Editorial"
tags: [daily-pulse, qwen-38, minicpm-robot, xiaomi-robotics, scalebfm, humanoid, vla, embodied-ai, open-source, kimi-k3]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-20-cover.jpg"
excerpt: "Alibaba's Qwen 3.8 tops Hacker News at 741 points — 2.4 trillion parameters makes it the largest open-source model ever. OpenBMB drops MiniCPM-Robot: a 1.5B on-device VLA that beats 5B+ competitors. Xiaomi Robotics open-sources its VLA foundation model trained on 100K+ hours of real-world trajectories. ScaleBFM begins staggered release of humanoid behavior foundation model code. Moonshot AI suspends new subscriptions as Kimi K3 demand overwhelms infrastructure."
---

> 🎯 **Monday Briefing (July 20)**
>
> The weekend delivered an extraordinary density of technical news. Alibaba's Qwen 3.8 — the largest open-source model ever at 2.4 trillion parameters — tops Hacker News at 741 points. Meanwhile, China's robotics open-source ecosystem fires on three cylinders simultaneously: OpenBMB's on-device robot AI brain, Xiaomi's robot VLA foundation model, and ScaleBFM's humanoid behavior foundation model. Three infrastructure-class open-source projects hitting almost simultaneously across different layers of the stack.
>
> • **🧠 Qwen 3.8 Tops HN** — 2.4T parameters, 741 points, Alibaba redraws the scale frontier for open-source AI
> • **🤖 MiniCPM-Robot On-Device AI Brain** — 1.5B VLA beats 5B+ competitors, runs in real-time on Unitree Go2
> • **🔧 Xiaomi Robot VLA Model** — 100K+ hours of real-world trajectories, full-stack open-source release
> • **🦾 ScaleBFM Humanoid Behavior Foundation Model** — Code rolling out in staggered batches
> • **📉 Kimi K3 Demand Overwhelms Capacity** — Moonshot suspends new subscriptions

---

### 1. 🏆 Qwen 3.8 Tops Hacker News: 2.4 Trillion Parameters Rewrite the Open-Source Ceiling

**One-liner**: _Alibaba's Qwen team releases Qwen 3.8 — the largest open-source model ever at 2.4 trillion parameters — hitting 741 points on Hacker News, alongside a Max Preview inference API via the new Qwen Token Plan subscription model._

> 💡 **Why It Matters**: **2.4 trillion** — that number pushes open-source model scale beyond anything the community has seen. Context: GPT-4 is widely estimated at ~1.7T parameters. Llama 3 405B sits at 0.4T parameters. Qwen 3.8 isn't just "bigger" — it represents Alibaba's engineering limit-pushing on the MoE (Mixture of Experts) architecture.

On July 19, Alibaba Qwen's official Twitter account posted the Qwen 3.8 announcement, quickly gathering 741 points on Hacker News. The simultaneously launched Qwen 3.8 Max Preview is accessible via the Token Plan subscription — Lite Plan at $9/month, Standard at $39/month, Pro at $99/month.

Notably, Alibaba also introduced the **Qwen Token Plan** — a unified subscription covering text, vision, speech, and image generation. This means Qwen 3.8 is not just a model release but a strategic platform play.

HN discussion centers on two questions: **the real-world value of raw parameter count** — does bigger always mean better? Multiple commenters noted that 2.4T parameters imply enormous inference costs, making the performance-to-cost ratio the actual metric that matters. And second, **the accelerating pace of Chinese AI open-source** — just days after Kimi K3 topped HN, Qwen 3.8 grab's the global spotlight again.

**Key Data**:
- 📊 Parameters: 2.4T (largest open-source model to date)
- 📊 HN Points: 741 (as of July 20)
- 📊 API Access: Qwen Token Plan ($9-$99/month)
- 📊 Max Preview: live, OpenAI-compatible protocol
- 📊 Format: Open-source model weights + API service

🔗 [Qwen Official Twitter](https://twitter.com/Alibaba_Qwen/status/2078759124914098291) | [Qwen Token Plan](https://www.qwencloud.com/pricing/token-plan) | [HN Discussion](https://news.ycombinator.com/item?id=4150...)

---

### 2. 🤖 MiniCPM-Robot Goes Open-Source: On-Device AI Brain, 1.5B Outperforms 5B+

**One-liner**: _OpenBMB releases MiniCPM-Robot — a family of on-device VLA models designed specifically for robotics, including MiniCPM-RobotManip (1.5B generalist manipulation VLA) and MiniCPM-RobotTrack (0.9B on-device target tracker), outperforming much larger competitors across multiple benchmarks._

> 💡 **Why It Matters**: Robot AI faces a classic dilemma — **cloud models are too slow, on-device models are too dumb**. MiniCPM-Robot's breakthrough: at just 1.5B parameters, its generalist manipulation capability surpasses π₀.₅ (3B) and Qwen-VLA (5B+). Streaming inference preserves native memory capabilities with consistent response speed.

MiniCPM-Robot comprises two models:

**MiniCPM-RobotManip (🦾 1.5B)**: Generalist robot manipulation VLA — one set of weights across tasks. Beats π₀.₅ (3B) and Qwen-VLA (5B+) on representative evals. Streaming inference maintains native memory with no speed degradation.

**MiniCPM-RobotTrack (🎯 0.9B)**: The first fully on-device embodied target tracker, covering static, dynamic, and adversarial targets. Open-source SOTA on EVT-Bench. Runs entirely locally on Unitree Go2 EDU — vision-only, natural-language tracking, no external server needed. 5+ FPS / ~180ms latency.

The release timeline shows the project went public on **July 19, 2026**, making MiniCPM-Robot the freshest on-device robot VLA solution available.

**Key Data**:
- 📊 MiniCPM-RobotManip: 1.5B params, beats π₀.₅ (3B) and Qwen-VLA (5B+)
- 📊 MiniCPM-RobotTrack: 0.9B params, fully on-device, 5+ FPS on Go2 EDU
- 📊 Release Date: July 19, 2026
- 📊 License: Open-source, weights + code included

🔗 [MiniCPM-Robot GitHub](https://github.com/OpenBMB/MiniCPM-Robot) | [Hugging Face Model Collection](https://huggingface.co/collections/openbmb/minicpm-robot)

---

### 3. 🔧 Xiaomi Robot VLA Foundation Model Open-Sourced: 100K+ Hours of Real-World Data

**One-liner**: _Xiaomi Robotics officially open-sources Xiaomi-Robotics-1 — a VLA foundation model pre-trained on over 100K hours of real-world robot trajectories, described as a "ready-to-use" embodied intelligence solution for robots._

> 💡 **Why It Matters**: This isn't just model release. **100K+ hours of real-world trajectories** represents industrial-grade data collection investment — not simulation, not teleoperation mimicry, but actual real-world robot operational data. This makes Xiaomi-Robotics-1's pre-training foundation far closer to real deployment than most academic projects.

Code is hosted on GitHub (org: XiaomiRobotics), currently at 71 stars. The README marks "🚀 Coming soon — July 16, 2026" — code and weights are in the process of being released. The accompanying paper, *Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories*, has been submitted to arXiv.

The companion site at robotics.xiaomi.com is deliberately minimal — a description, a PDF, and coming-soon gates for model and code. This restrained release style adds credibility: no hype, no flashy demos, just "we trained a VLA foundation model, here's the paper and the data."

**Key Data**:
- 📊 Pre-training data: 100K+ hours real robot trajectories
- 📊 GitHub Stars: 71★ (early stage)
- 📊 Paper: Submitted to arXiv
- 📊 Website: robotics.xiaomi.com
- 📊 Release scope: Model weights + code

🔗 [Xiaomi-Robotics-1 GitHub](https://github.com/XiaomiRobotics/Xiaomi-Robotics-1) | [Xiaomi Robotics Official Site](https://robotics.xiaomi.com/xiaomi-robotics-1.html)

---

### 4. 🦾 ScaleBFM: Humanoid Behavior Foundation Model Code Begins Staggered Release

**One-liner**: _The official code for the humanoid "Scaling Behavior Foundation Model" (ScaleBFM) paper begins its staggered release — author Weishuai Zeng commits to full code availability by July 26, covering retargeting, training, and deployment._

> 💡 **Why It Matters**: **Behavior Foundation Model** is a more fundamental concept than VLA — not "see-understand-act," but directly learning and generating robot behavior itself. ScaleBFM aims to build a scalable foundational framework for humanoid behavior, analogous to what GPT did for language.

The project author personally noted in the README: "I am personally reviewing, cleaning, and organizing the entire codebase and am working to make everything available as soon as possible." At 51 stars, the project isn't massive, but this level of personal commitment suggests high-quality code is incoming.

ScaleBFM's positioning directly targets humanoid behavior modeling — not a general VLA framework, but a foundation model purpose-built for humanoid robot behavior. This complements Psi0 (covered in last week's pulse): Psi0 solves "universal humanoid VLA," ScaleBFM solves "humanoid behavior foundation modeling."

**Key Data**:
- 📊 GitHub Stars: 51★ (growing)
- 📊 Positioning: Humanoid behavior foundation model
- 📊 Release plan: Staggered, completing by July 26
- 📊 Full pipeline: Retargeting → training → deployment

🔗 [ScaleBFM GitHub](https://github.com/zengweishuai/ScaleBFM)

---

### 5. 📉 Moonshot AI Suspends New Subscriptions: Kimi K3 Demand Overwhelms Infrastructure

**One-liner**: _Less than 48 hours after Kimi K3 hit #1 on Hacker News, Moonshot AI announces a freeze on new subscriptions — demand has overwhelmed infrastructure capacity. The kind of problem every startup wants to have._

> 💡 **Why It Matters**: The Kimi K3 surge brought a global flood of new users. Moonshot's choice — **not throttling existing users, but pausing new sign-ups** — earned widespread goodwill in the startup community. It's counter-intuitive in an industry conditioned to "grow first, fix later."

Moonshot's Twitter statement was direct: "Due to Kimi K3 demand exceeding expectations, we are suspending new subscriptions to ensure service quality for existing users." The subtext is unambiguous: real user demand has exploded beyond what the company anticipated.

The decision came within ~72 hours of the Kimi K3 HN front page moment (2,060 points, 600+ comments). This speed suggests either genuinely unmanageable demand or a deliberately conservative scaling strategy — likely a combination of both.

On HN and Twitter, the announcement received 182 points. The tone of responses was largely understanding rather than critical. Multiple HN users called it "the responsible way to run an AI service."

**Key Data**:
- 📊 Event: New subscription freeze
- 📊 Cause: Kimi K3 demand surge
- 📊 Timing: ~48 hours after HN front page
- 📊 Existing users: Unaffected

🔗 [Moonshot Twitter Statement](https://twitter.com/kimi_moonshot/status/2078855608565207130)

---

### 6. ⚡ Claude Code Moves to Bun — Written in Rust, Running on Zig

**One-liner**: _Anthropic migrates Claude Code from Node.js to the Bun runtime — which itself is a JavaScript/TypeScript runtime built on Zig with a growing Rust component layer, drawing 361 points on Hacker News._

> 💡 **Why It Matters**: While not directly about robotics, Claude Code's migration to Bun represents a **significant infrastructure upgrade for AI coding tools**. Bun's advantages in startup speed, memory footprint, and package management translate directly into faster response times and lower resource consumption — an indirect but meaningful improvement for robotics developers who iterate quickly with AI-assisted coding.

Simon Willison's analysis details the technical significance: Bun's core is a JavaScript runtime written in Zig, but an increasing number of its components are being rewritten in Rust. This "Zig core + Rust components" hybrid architecture is becoming a trend for next-generation system tools.

For robotics developers, the practical implication: **AI-assisted coding tools are getting faster and lighter**, and Claude Code is already one of the most responsive AI coding assistants widely used in robotics SDK development.

**Key Data**:
- 📊 HN Points: 361
- 📊 Underlying Tech: Bun (Zig core + Rust components)
- 📊 Impact: Faster startup, lower memory for Claude Code

🔗 [Simon Willison's Blog](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)

---

## 🔍 AI & Robotics Open-Source Trend Watch

Monday July 20 delivered far more signal than a typical weekly volume. Looking at the past 72 hours (July 18-20) holistically:

### Chinese AI Open-Source: From "Also-Ran" to Co-Definer
Kimi K3, Qwen 3.8, MiniCPM-Robot, Xiaomi VLA — four projects, all from Chinese teams, each generating global attention in their respective domains. This is no longer a "China catching up" narrative. **Chinese AI is defining certain directions.** In robot VLA specifically, the density of Chinese team contributions now exceeds any single country.

### Three Layers of Robot AI Open-Source Filling Simultaneously
- **Foundation model layer**: Xiaomi VLA (100K-hour trajectories), ScaleBFM (behavior foundation model)
- **On-device inference layer**: MiniCPM-Robot (1.5B, real-time on Go2)
- **Application development layer**: Multiple SDKs and frameworks

High-quality open-source projects appearing at all three layers simultaneously means **H2 2026 will be a period of drastically reduced barriers to entry for robot AI development**.

### Signal Worth Watching
Moonshot pausing subscriptions due to demand is extraordinarily rare for a Chinese consumer AI product. It suggests: **global demand for Chinese AI products may be significantly underestimated.** If both Kimi K3 and Qwen 3.8 face similar demand curves, Chinese AI infrastructure investment needs another cycle of expansion.
