---
title: "Daily Pulse | July 16, 2026 Thursday Edition | Thinking Machines Lab Drops 975B Open-Weight Inkling; Grok Build Goes Open Source; UFO Unsupervised RL Framework for Humanoid Robots"
date: 2026-07-16
author: "SinoBot Editorial"
tags: [daily-pulse, inkling, thinking-machines-lab, open-weights, grok-build, xai, coding-agent, ufo, humanoid, rl, gemma-4, edge-inference, robot, open-source]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-16-cover.jpg"
excerpt: "Thinking Machines Lab releases Inkling — a 975B MoE open-weights model (41B active) with 1M context and native multimodal reasoning. xAI open-sources Grok Build, its coding agent CLI/TUI. The UFO framework brings unsupervised RL training to Unitree G1 humanoid robots. One developer runs Gemma 4 26B on a 13-year-old Xeon at 5 tok/s for under $300."
---

> 🎯 **Thursday Briefing (July 16)**
>
> A single thread runs through today's headlines: **AI is pivoting from a "bigger model" arms race to a "better deployment" phase.** A 975B-parameter model with open weights just landed. Coding agents are shedding their proprietary shells. And humanoid robot training is creeping out of elite labs into the open-source community.
>
> • **🧠 Inkling 975B Open-Weight Model** — Thinking Machines Lab ships its first open-weight model: 975B MoE, 41B active, 1M context, native multimodal reasoning, fine-tunable on Tinker
> • **🔧 Grok Build Goes Open Source** — xAI releases Grok's terminal coding agent CLI/TUI in Rust on GitHub, with ACP protocol support for editor embedding
> • **🤖 UFO: Unsupervised RL Framework for Humanoids** — Open-source framework supports Unitree G1 training and deployment, decouples learning pipeline from robot config
> • **💻 Gemma 4 26B on a 13-Year-Old Xeon** — No GPU, 5 tok/s, a $300 repurposed server running a modern MoE model
> • **🚫 "We Don't Use AI" — A Counter-Statement Gains Traction** — Hardware design firm Mass-Driver publicly states zero AI use in its design and production pipeline

---

### 1. 🧠 Inkling 975B: Thinking Machines Lab Drops an Open-Weight Bombshell

**In one sentence**: _Thinking Machines Lab releases Inkling — a 975B-parameter MoE model (41B active) with a 1M-token context window, native multimodal reasoning over text, images, and audio, available for fine-tuning on the Tinker platform._

> 💡 **Why It Matters**: This is **one of the largest commercially viable open-weight models available today**. With only 41B of its 975B parameters active per token, inference costs stay manageable. The 1M-token context window opens up long-document analysis, codebase-wide reasoning, and multimodal agent workflows that were previously off-limits for open models.

Inkling was pretrained on 45 trillion tokens spanning text, images, audio, and video. It uses a Mixture-of-Experts transformer, so compute scales with its 41B active parameters rather than the full 975B. A smaller sibling — Inkling-Small at 12B active parameters — ships alongside for lighter workloads.

In a neat demonstration of its own capabilities, Thinking Machines Lab had Inkling **write its own fine-tuning job**, execute it on Tinker, and evaluate the output — a self-improving loop that highlights just how far automated model customization has come.

> 📊 **Key Specs**
> | Metric | Value |
> |--------|-------|
> | Total Parameters | 975B |
> | Active Parameters | 41B |
> | Context Window | 1M tokens |
> | Pretraining Data | 45T tokens (text + image + audio + video) |
> | Fine-tuning | Tinker platform, self-serve |
> | License | Open weights, Apache 2.0-like |

🔗 [Thinking Machines Lab Announcement](https://thinkingmachines.ai/news/introducing-inkling/) | [HN Discussion](https://news.ycombinator.com/item?id=47613622)

---

### 2. 🔧 Grok Build Goes Open Source: xAI's Coding Agent CLI Hits GitHub

**In one sentence**: _xAI open-sources Grok Build — its terminal-based AI coding agent — as a full Rust codebase on GitHub, featuring an interactive TUI, headless scripting mode, and ACP protocol support for editor embedding._

> 💡 **Why It Matters**: The coding agent space is getting crowded — Claude Code, OpenCode, Cursor, Codex CLI — but xAI is the first major player to go fully open source. Developers can inspect, modify, and fork the agent runtime. Compare that with OpenAI's Codex CLI or Anthropic's Claude Code, both of which remain closed-source.

Grok Build runs as a full-screen terminal app that understands codebases, edits files, executes shell commands, searches the web, and manages long-running tasks. Its ACP (Agent Client Protocol) support lets editors like VS Code and Neovim embed it directly.

> 📌 **Bottom line**: After months of debate around Grok model openness, xAI is betting that open-sourcing the tooling infrastructure will earn developer trust faster than keeping it locked down. Early signs suggest they might be right.

🔗 [GitHub: xai-org/grok-build](https://github.com/xai-org/grok-build) | [x.ai/cli](https://x.ai/cli)

---

### 3. 🤖 UFO: Unsupervised RL Framework for Humanoid Robots Goes Open Source

**In one sentence**: _The Roboparty team open-sources UFO — an unsupervised reinforcement learning framework for humanoid control — with full Unitree G1 training and deployment support, decoupling the learning pipeline from robot-specific configuration._

> 💡 **Why It Matters**: Humanoid robot training has traditionally demanded massive human annotation and hand-crafted reward functions. UFO flips that by taking an unsupervised RL approach: robots discover locomotion skills through exploration, not supervision. **The training pipeline is decoupled from robot configuration**, which means the same framework can — in principle — adapt to different humanoid platforms without a full rewrite.

The best-tested path targets Unitree G1, using MJLab for simulation training. UFO supports multi-source motion data import (RobotState CSV/NPZ), with built-in tracking inference, goal inference, and reward inference. Trained models export via ONNX and deploy to physical robots through the UFO-Deploy runtime.

> 📊 **Technical Status**
> | Capability | Status |
> |-----------|--------|
> | Unitree G1 training | ✅ Fully supported, best-tested |
> | Multi-source motion data | ✅ CSV / NPZ / ufo_pkl |
> | ONNX export | ✅ Direct from training |
> | Real-robot deployment & teleoperation | ✅ Deploy branch |
> | Cross-robot policy transfer | ❌ Not yet supported |

**For China's humanoid robotics ecosystem, this is directly actionable.** Unitree G1 is one of the most talked-about consumer-grade humanoids globally. UFO cuts the barrier for independent developers who want to experiment with G1 locomotion training but don't have a research-lab budget.

🔗 [GitHub: Roboparty/UFO](https://github.com/Roboparty/UFO) | [Project Page](https://roboparty.github.io/UFO/)

---

### 4. 💻 Gemma 4 26B on a 13-Year-Old Xeon: Edge Inference, Repurposed

**In one sentence**: _A hardware enthusiast runs Google's Gemma 4 26B MoE model on a 13-year-old Ivy Bridge Xeon server — no GPU, 5.2 tokens/sec, total hardware cost under $300._

> 📌 **Bottom line**: While the industry chases H100s and B200s, this post proves a different point: **understanding your model beats throwing hardware at it.**

The machine is a repurposed HP StoreVirtual storage server with dual Xeon E5-2690 v2 (Ivy Bridge, 2013), DDR3 RAM, no GPU. The CPU supports only AVX1 — not even AVX2. The author pushed Gemma 4 26B to 5.2 tokens/sec using ik_llama.cpp's CPU-optimized MoE routing, speculative decoding, and a CPU port of Flash Attention. That's reading speed.

> 💡 **Implication**: For robotics developers and embedded engineers in China, this is a practical data point. If a $300 second-hand server can run a 26B model, **the threshold for deploying mid-size models on local robot hardware is much lower than the hype suggests**.

🔗 [NeoMind Labs: Full Write-up](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) | [HN Discussion](https://news.ycombinator.com/item?id=47613622)

---

### 5. 🚫 "We Don't Use AI" — A Hardware Company's Counter-Statement

**In one sentence**: _Hardware design firm Mass-Driver publishes a public statement that it uses no AI whatsoever in its design, production, or creative processes, arguing that "handing design over to generative AI removes the human element."_

> 📌 **Bottom line**: In the 2026 landscape — where AI is baked into every tool and workflow — a "zero AI" declaration is so unusual that it landed on the Hacker News front page.

Mass-Driver traces the letter 'A' from its origin as an ox-head carving in a Sinai mine 3,500 years ago, through Roman brush calligraphy, to modern serif typefaces. Their argument: **friction in the design process is the source of creativity, and AI is a tool designed to eliminate all friction.**

"When we ask Midjourney to draw an ox, it does not think of home. ChatGPT will never invent a new calligraphy technique, because it has no wrists to feel uncomfortable."

> ⚠️ **Worth Watching**: The fact that this article went viral says as much about the current moment as the article itself. The developer community in mid-2026 appears to be moving from reflexive AI adoption toward a more **measured assessment of what AI should — and shouldn't — touch in creative work**.

🔗 [Mass-Driver: "From Human Hands"](https://mass-driver.com/article/from-human-hands)

---

## 🔍 The Week So Far

A few patterns worth tracking:

1. **Open-weight models keep scaling up** — 975B parameters with open weights means small teams can access near-frontier capability. The gap between "open" and "closed" is narrowing fast.
2. **Coding agents are having a "Linux moment"** — Grok Build open-sourced. Developers can now self-host their coding agent infrastructure. This is how Linux ate the server market.
3. **Humanoid robot open-source is accelerating** — UFO + Unitree G1 gives independent developers a path into locomotion research without a million-dollar lab.
4. **Edge inference is becoming practical** — A $300 server running a 26B model at reading speed. As inference costs continue to drop, the question is less "can we deploy AI locally?" and more "why wouldn't we?"

---

*Sources: Hacker News / GitHub / Thinking Machines Lab / xAI / NeoMind Labs / Mass-Driver*
