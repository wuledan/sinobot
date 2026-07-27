---
title: "Daily Pulse | July 28, 2026 Tuesday Edition | Moonshot AI Opens Kimi K3 Weights on HuggingFace — First Public 3T-Class Open Model; Anthropic Launches Claude Opus 5 at Half the Cost of Fable; Microsoft's In-House MAI Models Claim 89% Cost Cut vs OpenAI; Anthropic CEO: Don't Ban Open-Weights"
date: 2026-07-28
author: "SinoBot Editorial"
tags: [daily-pulse, kimi-k3, moonshot-ai, open-weights, huggingface, anthropic, claude-opus-5, microsoft, mai, ai-cost, chinese-ai, open-source]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-28-cover.jpg"
excerpt: "Moonshot AI publicly released Kimi K3's full weights on HuggingFace — the first 3T-class open model ever made available to the public. Anthropic released Claude Opus 5, matching or exceeding flagship Fable 5 on multiple coding and knowledge-work benchmarks at half the cost. Microsoft formally launched its in-house MAI model family, claiming up to 89% cost reduction versus OpenAI models across its product lines. Anthropic CEO Dario Amodei published a clear position: don't ban open-weights models."
---

> 🎯 **Tuesday Briefing (July 28)**
>
> Today's news clusters around a single theme: the open-weight inflection point. Moonshot AI published Kimi K3's full 2.8T-parameter weights on HuggingFace — the first fully open 3T-class model, competing directly with Claude Fable 5 and GPT-5.6 Sol on multiple benchmarks. Anthropic launched Claude Opus 5 with an explicit "half-price flagship" strategy — not claiming it's the smartest model, but the smartest **value** model. Microsoft backed its claims with hard numbers: in-house MAI models have fully replaced OpenAI models across Bing, OneDrive, and PowerPoint, with GPU cost reductions of up to 89%. Three releases point to the same conclusion: the AI industry is shifting from "who can build the strongest model" to "who can build the most cost-effective one."
>
> • **🏆 Kimi K3 Goes Open-Weight on HuggingFace** — Moonshot AI's 2.8T MoE model, first open 3T-class
> • **🔧 Anthropic Launches Claude Opus 5** — Frontier-level coding capability at half the cost, positioned as the "daily driver"
> • **🏭 Microsoft Goes All-In on In-House MAI Models** — 84-89% cost reductions, Bing/OneDrive/PPT fully migrated
> • **🛡️ Anthropic CEO: Don't Ban Open-Weights** — Dario Amodei clarifies position, says protectionist bans miss the point

---

### 1. 🏆 Kimi K3 Goes Open-Weight: First 3T-Class Open Model Hits HuggingFace

**One-liner**: _Moonshot AI publicly released Kimi K3's full model weights on HuggingFace — a 2.8-trillion-parameter Mixture-of-Experts model with 104B activated parameters, becoming the first 3T-class model ever made openly available to the public._

> 💡 **Why It Matters**: Kimi K3's open-weight release raises the "open-source model ceiling" to an unprecedented level. With 2.8T total parameters (104B active), its MoE architecture allows it to compete head-to-head with top-tier closed-source models like Claude Fable 5 and GPT-5.6 Sol — with fully public weights.

![Kimi K3 vs Top Closed Models Benchmark Comparison](/images/daily-pulse-2026-07-28-kimi-bench.jpg "Kimi K3 benchmarks against Claude Fable 5 and GPT-5.6 Sol")

**Key Technical Highlights**:

- **Architecture**: Kimi Delta Attention (KDA) and Attention Residuals (AttnRes), 896 experts with 16 activated per token, ~2.5× scaling efficiency improvement over Kimi K2
- **Native Multimodality**: MoonViT-V2 vision encoder, supporting text, images, and video understanding
- **Extreme Context Window**: 1,048,576 tokens (~1M tokens)
- **Benchmark Performance**: Terminal-Bench 2.1: **88.3**, BrowseComp: **91.2**, OSWorld-Verified: **84.8**, MCPMark-Verified: **94.5**

> 📊 **Kimi K3 vs Top Closed Models — Key Benchmarks**
> | Benchmark | Kimi K3 | Claude Fable 5 | GPT-5.6 Sol |
> |-----------|---------|----------------|-------------|
> | Terminal-Bench 2.1 | **88.3** | 88.0 | **88.8** |
> | DeepSWE | 67.5 | **70.0** | **73.0** |
> | BrowseComp | **91.2** | 88.0 | 90.4 |
> | MCPMark-Verified | **94.5** | 87.4 | 92.9 |
> | OSWorld-Verified | **84.8** | — | — |

The model is released under the **Kimi K3 License**, permitting research, deployment, and further innovation — commercial use terms need careful review.

> 📌 **Robotics Relevance**: Kimi K3's open-weight release gives robotics startups a compelling option: a 3T-class multimodal model that can be deployed locally or on private cloud, avoiding the latency and cost of closed API calls. The 1M context window is particularly valuable for robotics tasks requiring sustained understanding across multiple technical documents before making decisions.

🔗 [HuggingFace: moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | [Moonshot AI Tech Blog](https://www.kimi.com/blog/kimi-k3) | [Full Tech Report](https://github.com/MoonshotAI/Kimi-K3/blob/main/k3_tech_report.pdf)

---

### 2. 🔧 Anthropic Launches Claude Opus 5: Frontier Performance, Half the Price

**One-liner**: _Anthropic released Claude Opus 5 — a mid-premium "daily driver" model matching or exceeding flagship Fable 5 on multiple coding and knowledge-work benchmarks at half the inference cost._

> 💡 **Why It Matters**: Opus 5 is the linchpin of Anthropic's "tiered model strategy." Fable 5 is the smartest (and most expensive), Opus 5 is the best choice for 90% of work, Sonnet 5 for scaled deployment, Haiku 4.5 for sub-agents and instant answers — Anthropic is shifting from "one strongest model" to "workload-appropriate matching."

Pricing holds steady at Opus 4.8 levels: $5/M input tokens, $25/M output tokens. The performance gains, however, are dramatic:

- **Frontier-Bench v0.1** (terminal coding): Opus 5 scores **43.3%** — more than double Opus 4.8's 18.7% and well ahead of Fable 5's 33.7% — at lower cost per task
- **ARC-AGI 3**: Scored **3×** higher than the next best model
- **OSWorld 2.0** (computer use): Surpasses Fable 5's best result at just over **1/3 the cost**
- On DeepSWE and other coding benchmarks, Opus 5 approaches but slightly trails GPT-5.6 Sol

> 📌 **Key Distinction**: An Anthropic spokesperson drew a clear line worth noting — "Opus 5 is the best tool for jobs benchmarks can see. Fable 5 is what you reach for when the job outruns the benchmark." This "bounded tasks vs long-horizon autonomy" framing may become the defining axis of model differentiation in 2026.

**Industry Implications**: Opus 5's launch continues the trend demonstrated by last week's Poolside Laguna S 2.1 and Google Gemini 3.6 Flash — AI competition is shifting from "raw intelligence" to "efficiency intelligence." For robotics: the model running a robot doesn't need to be the smartest available — it needs to complete tasks efficiently within a fixed compute budget.

🔗 [Anthropic: Claude Opus 5](http://anthropic.com/news/claude-opus-5) | [VentureBeat Coverage](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)

---

### 3. 🏭 Microsoft Goes All-In on In-House MAI Models: Up to 89% Cost Reduction

**One-liner**: _Microsoft formally launched MAI-Cyber-1-Flash, MAI-Image-2.5-Pro, and MAI-Voice-2-Flash — three in-house models backed by detailed production data showing complete replacement of OpenAI models across Bing, OneDrive, and PowerPoint with GPU cost reductions of up to 89%._

> 💡 **Why It Matters**: This is Microsoft's strongest "model independence" signal yet. In roughly one year, Microsoft has gone from relying on OpenAI to nearly full self-sufficiency. For OpenAI, it means their biggest customer is gradually decoupling.

**Production Deployment Data**:

- **Bing Image Creator**: Fully migrated to MAI-Image-2.5, end-to-end — no longer using OpenAI models
- **PowerPoint**: MAI-Image-2.5 reduces GPU costs by **84%** compared to GPT-Image-2
- **OneDrive**: Save rates up **26%**, P95 latency down ~**25%**, efficiency improved **2.5×**
- **Dynamics 365 Contact Center** (powering T-Mobile and EasyJet): GPU cost reduction of up to **89%** with MAI-Voice-2-Flash
- **Healthcare**: Dragon Copilot integrated with MAI Voice models

> 📊 **MAI Model Pricing**
> | Model | Input Pricing | Output Pricing | Positioning |
> |-------|-------------|---------------|-------------|
> | MAI-Image-2.5-Pro | $5/M text / $8/M image tokens | $106/M image tokens | Premium image generation |
> | MAI-Voice-2-Flash | $15/M characters | — | High-volume voice (call centers, voice agents) |
> | MAI-Cyber-1-Flash | — | — | Cybersecurity, integrated with MDASH |

Microsoft's subtext is unambiguous: "Microsoft products, powered by Microsoft models" is no longer a roadmap. It's the current state.

🔗 [VentureBeat: Microsoft launches in-house AI models](https://venturebeat.com/infrastructure/microsoft-launches-new-in-house-ai-models-it-says-cut-costs-up-to-89-versus-openai) | [Microsoft AI Announcement](https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/) | [MAI-Cyber-1-Flash](https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/)

---

### 4. 🛡️ Anthropic CEO Dario Amodei: Don't Ban Open-Weights Models

**One-liner**: _Anthropic CEO Dario Amodei published a definitive blog post clarifying that Anthropic has never advocated banning open-weights models and that protectionist bans fail to address genuine national security concerns._

> 💡 **Why It Matters**: The past week saw intensifying debate around potential US restrictions on Chinese open-weight models. Multiple tech companies signed a letter supporting open-weights, while some accused Anthropic of wanting bans to protect its business. Amodei's post is both a clarification and a direct policy recommendation.

**Amodei's Core Position**:

1. **"Open-weights models that don't have dangerous capabilities are a public good"** — they cost nothing beyond compute to run, providing value to developers, businesses, and researchers
2. **Two genuine nightmare scenarios**: authoritarian states (particularly the CCP) building more powerful models than the US for military superiority or deep repression; and powerful AI being misused for cyberattacks or biological attacks
3. **"Banning the use of these models by US businesses does nothing to address this risk"** — bad actors won't be legitimate US businesses; the most dangerous model is one secretly trained and handed only to military forces

**Three measures Amodei supports instead**:

1. **Don't sell advanced chips or chipmaking equipment to China** — the most direct and efficient way to address threat #1
2. **Crack down on industrial-scale distillation operations** — distillation allows China to build much better models than its chip count would ordinarily enable
3. Maintain transparency in AI safety research

> 📌 **SinoBot Perspective**: This debate directly affects the Chinese robotics companies SinoBot covers. If the US ultimately restricts Chinese companies' access to advanced AI chips, companies like Unitree, UBTECH, and Deep Robotics may see their robot AI capabilities impacted — potentially forcing a shift to domestic chip platforms (e.g., Huawei Ascend) for AI inference deployment.

🔗 [Anthropic: Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) | [Hacker News Discussion](https://news.ycombinator.com/item?id=49039450) | [Axios: US-China open-source AI](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi)

---

### 📰 More Headlines

- **OpenAI Unveils Presence Enterprise Agent Platform** — A deployment and management platform for customer-facing AI agents, supporting voice and chat channels, currently in limited GA (Source: VentureBeat)
- **Mistral CEO Confirms "Leaked" New Open-Source Model** — A model approaching GPT-4 performance reportedly circulating in the community (Source: Hacker News)
- **Inflection AI Returns to Consumer Market** — Launches Pi Journeys and publishes a "Consumer AI Habits" research report (Source: VentureBeat)
- **Microsoft's MAI-Cyber-1-Flash Inside MDASH** — New cybersecurity-specific model, integrated with Microsoft's security operations platform (Source: Microsoft AI / HN)

---

*Data Sources: HuggingFace, Moonshot AI, Anthropic, VentureBeat, Hacker News (Algolia API), Microsoft AI, OpenAI, Axios*
