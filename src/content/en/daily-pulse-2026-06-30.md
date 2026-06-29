---
title: "Daily Pulse | June 30 Tuesday Edition | Proception Settles Tesla Suit, Raises $11M; Theker Banks $85M for Reconfigurable Factory Robots; Open-Source Rope-Driven Quadruped CARA Hits #1 on HN; Qwen 3.6 27B Edge AI Model Launches; Samsung, SK Hynix, Micron Sued Over Memory Price-Fixing"
date: 2026-06-30
author: "SinoBot Editorial"
tags: [daily-pulse, proception, robot-hand, tesla, trade-secret, theker, factory-robot, modular-robot, cara, quadruped, capstan-drive, open-source, qwen, edge-ai, samsung, sk-hynix, micron, memory-price-fixing]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-06-30-cover.jpg"
excerpt: "Proception settles Tesla trade secret lawsuit and announces $11M new funding for dexterous robot hands; Theker raises $85M to build reconfigurable factory robots — the anti-humanoid bet; Capstan-driven open-source quadruped CARA hits 1,000+ points on HN; Qwen 3.6 27B becomes the new sweet spot for edge AI inference; Samsung, SK Hynix, Micron face class-action over DRAM/NAND price-fixing."
---

> 🎯 **Tuesday Briefing (June 30)**
> • **🤖 Proception Settles with Tesla, Raises $11M**: Robot hand startup takes a unique approach to solving one of robotics' hardest problems — dexterous manipulation — while settling a high-profile trade secrets case
> • **🏭 Theker Raises $85M for Reconfigurable Robots**: A modular counterpoint to the humanoid wave — swap modules, not entire robots — to keep factory lines flexible
> • **🔧 Open-Source Quadruped CARA Ignites Community**: Rope-driven capstan transmission delivers zero backlash at a fraction of the cost. 1,073 points on HN
> • **💡 Qwen 3.6 27B: Edge AI's New Sweet Spot**: Open-source model balances performance and deployability on consumer GPUs — implications for on-robot inference
> • **⚡ Samsung, SK Hynix, Micron Hit with Price-Fixing Suit**: Class action alleges coordinated supply restrictions that inflated DRAM/NAND prices, squeezing robotics hardware margins

---

### 1. 🏆 The Big Story: Proception Settles Tesla Suit and Raises $11M for Robot Hands

**[Image: Proception's robot hand demonstration]**

**One-line summary**: _Proception has settled its trade secret lawsuit with Tesla and simultaneously closed an $11M funding round. The startup is tackling one of robotics' most stubborn bottlenecks — dexterous manipulation — with a novel approach to training data collection._

> 💡 **Why it matters**: Robot hands are quietly the most underestimated bottleneck in the entire humanoid robotics stack. Without reliable dexterous manipulation, humanoid robots can move boxes but can't assemble components, use tools, or perform the high-value tasks that justify their price tag. Proception's trajectory — if it works — opens a new application frontier for the industry.

According to TechCrunch, Proception, a startup known for building anthropomorphic robot hands, has reached a settlement with Tesla over a trade secrets lawsuit. The terms of the settlement remain confidential, but the company simultaneously announced a **$11M** new funding round to accelerate its development pipeline.

This development comes at a critical moment. Tesla's Optimus humanoid robot program is accelerating, and hand dexterity remains one of its core technical challenges. Proception had previously been accused by Tesla of stealing trade secrets related to its robotic hand technology.

What sets Proception apart is its approach to the data problem. Rather than relying on massive real-world data collection — which is slow, expensive, and hard to scale — the company developed a proprietary data pipeline that efficiently captures hand manipulation data. In robotics, data scarcity for manipulation tasks is widely regarded as a more stubborn bottleneck than the hardware itself.

📊 **By the numbers**:
- New funding: **$11M**
- Focus: Anthropomorphic robot hands + manipulation training data
- Market context: Global humanoid robotics market projected at **$38B** by 2030
- Competitive landscape: Tesla Optimus, Figure 03, Agility Digit all racing to improve hand capability

🔗 [TechCrunch](https://techcrunch.com/2026/06/29/robot-hand-company-settles-tesla-trade-secret-suit-and-announces-11m-raise/)

---

### 2. 🏭 Theker Raises $85M: Reconfigurable Factory Robots

**[Image: Theker's modular factory robot]**

> 📌 **In one sentence**: While everyone else builds humanoids, Theker builds modular, reconfigurable factory robots — the same machine can be reconfigured for different tasks in minutes, not hours.

If there's one keyword defining robotics in the first half of 2026, it's "humanoid." From Tesla's Optimus to Figure 03, from Agility's Digit to Unitree's H1, nearly every major player is betting on the bipedal form factor. Theker is taking the other road.

The Munich-based startup just closed an **$85M** funding round with a contrarian thesis: **don't build a humanoid. Build a robot that doesn't specialize in anything.** Theker's approach centers on a family of interchangeable modules — arms, mobile bases, end effectors, sensor suites — that can be quickly recombined for different factory tasks. A robot that moves materials today can be reconfigured as a quality inspector tomorrow.

> 💡 **Why it matters**: The humanoid robot value proposition is universality — it can operate in human environments and perform many tasks. But the trade-off is high unit cost and complex control. Theker's modular approach offers a middle path: configuration flexibility without the cost premium of a full humanoid. For small and mid-size manufacturers, this calculus may work better.

📊 **Cost comparison**:
| Metric | Theker Modular | Humanoid |
|--------|---------------|----------|
| Unit cost | $50K–100K | $100K–300K |
| Task switch | Module swap (minutes) | Software reconfig (hours) |
| Maintenance | Per-module | Full system |
| Facility retrofit | Minimal | Significant |

🔗 [TechCrunch](https://techcrunch.com/2026/06/11/theker-just-raised-85m-to-build-the-factory-robot-that-doesnt-specialize-in-anything/)

---

### 3. 🔧 CARA: The Open-Source Quadruped That's Redefining Robot Joints

**[Image: CARA quadruped robot]**

**1,073 points and 456 comments** — CARA, an open-source quadruped robot, took the top spot on Hacker News yesterday. Its secret weapon: **rope, not gears.**

CARA (Capstans Are Really Awesome) was built over the course of a year by independent developer Aaed Musa. It's the second quadruped ever to use **capstan drives**, following an earlier project called Stanley. The principle is borrowed from ship winches — rope wraps around two drums of different diameters, transmitting torque through friction rather than gear teeth.

> 💡 **Why it matters**: CARA's significance isn't industrial-grade precision — it still lags behind traditional harmonic drives on absolute accuracy. Its value lies in proving that "good enough" robot joints can be built at a fraction of the cost. For the open-source robotics community, educational use, and rapid prototyping, this dramatically lowers the barrier to entry.

Of course, the devil is in the details. The developer openly documents the challenges: measuring rope diameter accurately (compression under tension makes it tricky), the gap between theoretical and effective diameter ratios, and achieving a precise 8:1 reduction ratio through iterative numerical correction rather than simple geometry.

📊 **Capstan Drive vs. Traditional Gears**:
| Property | Capstan (CARA) | Gear Reduction |
|----------|---------------|---------------|
| Backlash | **Zero** | Present (worsens with wear) |
| Torque transparency | **High** | Low |
| Cost | **Low** (rope + 3D print) | High (precision machining) |
| Noise | **Quiet** | Audible |
| Precision | ±0.1° (compensated) | ±0.01° |

🔗 [Project Page](https://www.aaedmusa.com/projects/cara) | [HN Discussion](https://news.ycombinator.com/item?id=48721903)

---

### 4. 💡 Qwen 3.6 27B: The Sweet Spot for Edge AI

**522 points on HN front page** — Qwen 3.6 27B is the open-source AI model du jour, and for good reason.

> 📌 **In one sentence**: At 27B parameters, this model hits the optimal balance between performance and deployability — runs on a single consumer GPU while matching much larger closed-source models on key benchmarks.

Qwen 3.6 27B's popularity reflects a core tension in AI deployment: bigger models perform better but cost more to run. The 27B parameter count lands squarely in the "Goldilocks zone" — approaching 70B-class performance on HumanEval, GSM8K, and other standard benchmarks while requiring only one-third the VRAM.

For robotics, this matters because **on-device inference becomes viable.** A 27B model can run on an embedded GPU aboard a robot, eliminating cloud dependency. For applications requiring low latency, offline operation, or data privacy — all common in robotics — this is a game-changer.

> 💡 **Worth watching**: If edge hardware can run 27B-class models, robot autonomy no longer hinges on network connectivity. Unitree's RCP and similar robot-dedicated controllers may soon integrate more powerful edge AI silicon to support this class of models.

🔗 [Quesma Review](https://quesma.com/blog/qwen-36-is-awesome/) | [HN Discussion](https://news.ycombinator.com/item?id=48721903)

---

### 5. ⚡ Samsung, SK Hynix, Micron Hit with Class Action for Memory Price-Fixing

> 📌 **In one sentence**: The three DRAM/NAND giants face a US class-action lawsuit alleging coordinated production cuts and price inflation — with direct downstream impact on robotics hardware costs.

Samsung, SK Hynix, and Micron have been hit with a class-action lawsuit in the US alleging they conspired to fix prices on DRAM and NAND flash memory. The complaint claims the three companies coordinated production cuts, exchanged capacity information, and artificially inflated prices — harming downstream industries including robotics manufacturers.

The context: since 2024, explosive demand for HBM (High Bandwidth Memory) — driven by AI training chips — has squeezed conventional DRAM capacity, pushing memory prices steadily upward. For robotics, memory is a core cost component in control boards, sensor modules, and edge AI compute units.

📊 **Impact estimate**:
- DRAM prices have risen approximately **40-60%** since 2024
- Memory accounts for roughly **5-8%** of a humanoid robot's BOM
- If price-fixing is proven, robot manufacturers may be entitled to damages

🔗 [Seoul Economic Daily](https://en.sedaily.com/international/2026/06/29/samsung-sk-hynix-micron-sued-in-us-over-memory-price-fixing) | [HN Discussion](https://news.ycombinator.com/item?id=48718102)

---

### 🔍 Week Ahead

The last week of June continues to deliver dense signals across robotics. Proception's settlement-and-funding double play is the immediate headline, but Theker's modular approach offers a substantive counterpoint — when everyone goes humanoid, does the road less traveled still lead to a market? And CARA's community reception proves the appetite for low-cost actuation alternatives remains strong.

**Signals to track**:
- **Dexterous manipulation**: Proception vs. Tesla Optimus hand competition
- **Modular vs. humanoid**: Economic comparison of two factory automation paths
- **Capstan drives**: Community forks and improvements on CARA's design
- **Edge AI**: Qwen 3.6 and similar lightweight models adapted for on-robot deployment

*Sources: TechCrunch, Theker, Aaed Musa, Quesma Blog, Seoul Economic Daily*
