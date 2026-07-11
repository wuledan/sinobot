---
title: "Daily Pulse | July 11, 2026 Saturday Weekend Edition | Apple Sues OpenAI for Trade Secret Theft; GPT-5.6 Sol Ultra Proves Cycle Double Cover Conjecture; QuadRF Open-Source Phased-Array Radio Spots Drones, Sees Through Walls"
date: 2026-07-11
author: "SinoBot Editorial"
tags: [daily-pulse, apple, openai, gpt-5-6, sol-ultra, trade-secret, cycle-double-cover, conjecture, quadrf, sdr, drone-detection, ai-safety, boko-haram, frontier-ai, xiaomi, mimo]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-11-cover.jpg"
excerpt: "Apple files a bombshell lawsuit against OpenAI, accusing former employees of stealing trade secrets for OpenAI's benefit. GPT-5.6 Sol Ultra produces a formal proof of the Cycle Double Cover Conjecture—an AI-first in original mathematical research. QuadRF, an open-source phased-array radio built on Raspberry Pi 5 and FPGA, demonstrates drone tracking and through-wall WiFi sensing. CASP report reveals Boko Haram systematically using frontier AI models. Xiaomi publishes MiMo v2.5 inference optimization."
---

> 🎯 **Weekend Briefing (July 11)**
> • **🏛️ Apple Sues OpenAI**: Files federal lawsuit alleging former employees stole trade secrets regarding unreleased technologies "for the benefit of OpenAI" — one of the most consequential IP lawsuits in AI history
> • **🧠 GPT-5.6 Sol Ultra Proves Cycle Double Cover Conjecture**: Releases a complete proof PDF for a long-standing graph theory problem, marking the first time an AI independently produces a formal proof of a known open conjecture
> • **📡 QuadRF Open-Source RF Sensing**: Raspberry Pi 5 + FPGA phased-array radio spots drones mid-flight and captures WiFi signals through walls, starting at $499
> • **💣 Boko Haram Using Frontier AI**: CASP report details how the terrorist group systematically uses LLMs for propaganda generation, technical knowledge acquisition, and recruitment
> • **🇨🇳 Xiaomi MiMo v2.5 Inference Optimization**: Publishes Hybrid SWA efficiency improvements for on-device AI deployment

---

### 1. 🏛️ Apple Sues OpenAI: Trade Secret Theft Lawsuit Shakes the AI Industry

**In one sentence**: _Apple filed a federal lawsuit against OpenAI on July 10, accusing former employees of stealing trade secrets regarding unreleased technologies, processes, and products "for the benefit of OpenAI" — one of the highest-stakes IP disputes in the AI industry._

Apple's complaint, filed in California federal court, leaves no room for ambiguity: "This case is about Apple's former employees stealing Apple's trade secrets for the benefit of OpenAI. Apple brings this suit to put a stop to it." An Apple spokesperson further stated that "significant evidence has emerged suggesting individuals employed by OpenAI wrongfully took Apple's secret and confidential information."

**What makes this lawsuit notable**:
- **Insider threat**: The accused are not external hackers but former employees with deep access to Apple's core R&D projects
- **Technology scope**: The lawsuit references unreleased "technologies, processes, and products" — potentially covering Apple's secretive projects in AI chips, on-device models, and robotics
- **Timing**: The suit arrives at the peak of competition between Apple's Fable 5 model family and OpenAI's freshly launched GPT-5.6

> 💡 **Why it matters**: This lawsuit escalates the Apple-OpenAI relationship from "competitive coexistence" to "legal warfare." The outcome could reshape talent mobility rules across the AI industry and set precedents for trade secret protection in an era where top AI talent routinely moves between companies.

Legal observers note that Apple's reference to "significant evidence" suggests the company has communications or internal documents to back its claims. If Apple prevails, OpenAI could face restrictions on using the allegedly misappropriated technology, financial damages, and heightened scrutiny of its hiring practices.

🔗 [9to5Mac report](https://9to5mac.com/2026/07/10/apple-sues-openai-trade-secret-theft/) | [HN discussion](https://news.ycombinator.com/item?id=410)

---

### 2. 🧠 GPT-5.6 Sol Ultra Produces Proof of Cycle Double Cover Conjecture: AI Crosses a New Mathematical Threshold

**In one sentence**: _OpenAI releases a formal proof of the Cycle Double Cover Conjecture produced by GPT-5.6 Sol Ultra — the first instance of an AI independently producing a rigorous proof of a recognized open problem in mathematics._

Just one day after the GPT-5.6 launch, OpenAI dropped another bombshell: the Sol Ultra tier, running at maximum reasoning intensity for approximately 15 minutes, generated a complete mathematical proof of the **Cycle Double Cover Conjecture** — a long-standing problem in graph theory concerning the covering structure of cycles in graphs.

**Key implications**:
- **Problem difficulty**: The Cycle Double Cover Conjecture is recognized as a genuinely challenging open problem that had resisted solution by professional mathematicians
- **Methodology**: Rather than brute-force search or symbolic manipulation, the proof appears to employ genuine mathematical reasoning, constructing novel lemmas and argument structures
- **Industry significance**: This transcends earlier achievements in math olympiad problem-solving — it represents an AI making an *original research contribution* to mathematics

> 💡 **Why it matters**: The graph theory community received the proof with cautious excitement. Early reactions on social media from mathematicians indicate the proof structure appears sound, though rigorous peer review will take weeks or months. Regardless of the final verdict, the message is clear: AI's mathematical reasoning capability has crossed a qualitative threshold — from "assistive tool" to "contributing researcher."

The mathematics community has responded with a mix of excitement and methodological skepticism. Several prominent graph theorists noted that even if the proof contains flaws, the fact that GPT-5.6 Sol Ultra could produce a structured, apparently coherent argument for a known open problem marks a step change in capability.

🔗 [OpenAI proof PDF](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf) | [HN discussion](https://news.ycombinator.com/item?id=410)

---

### 3. 📡 QuadRF: Open-Source Phased-Array Radio Spots Drones and Sees WiFi Through Walls

**In one sentence**: _QuadRF — an open-source phased-array radio built on Raspberry Pi 5 and FPGA with picosecond-level timing — brings drone tracking and through-wall WiFi signal analysis to a handheld, $499 device._

Jeff Geerling's deep-dive on QuadRF this week put a spotlight on a device that makes RF sensing capabilities — previously the domain of government agencies — accessible to hobbyists and researchers. Built around a **Raspberry Pi 5**, an FPGA board, and a phased-array antenna, QuadRF performs advanced signal processing and beamforming in a compact form factor.

**Capabilities that stand out**:
- **Drone detection**: Real-time tracking of drones in flight using RF beamforming
- **Through-wall WiFi analysis**: Captures and decodes WiFi signals through walls for network traffic analysis
- **Full open-source**: Both hardware designs and software are publicly available
- **Scalable architecture**: Multiple QuadRF modules can be chained together for larger phased-array configurations

> 💡 **Why it matters**: Creator Martin McCormick (a former SpaceX engineer who worked on the Starlink Dishy terminal team) designed QuadRF as part of an even more ambitious vision: a Moon-scale antenna array for EME (Earth-Moon-Earth) radio experiments and radio astronomy. But the immediate implication is more grounded: when open-source communities can build RF sensing this capable, security awareness needs to evolve — which is precisely the message QuadRF's creators want to send.

🔗 [Jeff Geerling's review](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/) | [Hackaday coverage](https://hackaday.com/2026/06/20/seeing-the-world-in-radio-waves-with-the-quadrf/)

---

### 4. 💣 CASP Report Reveals How Boko Haram Systematically Uses Frontier AI

**In one sentence**: _A new report from the Center for AI Safety (CASP) details how the terrorist group Boko Haram has systematically adopted frontier AI models for propaganda generation, technical knowledge acquisition, and recruitment operations._

The CASP report, released this week, provides one of the most detailed public analyses of how a designated terrorist organization operationalizes frontier AI technology. Through analysis of publicly available online content, researchers documented Boko Haram's evolving use of large language models.

**Key findings**:
- **Content generation**: AI-generated propaganda materials in English, French, and Arabic
- **Knowledge acquisition**: Using AI to obtain technical knowledge on weapon fabrication and communication encryption
- **Recruitment**: AI-assisted personalized recruitment messaging targeting specific demographics
- **Evasion techniques**: Using AI to optimize content for evading social media platform moderation

> 💡 **Why it matters**: The report delivers the starkest real-world validation yet of the "dual-use" concern surrounding frontier AI. When a designated terrorist group can leverage the same GPT-class models that power legitimate applications, it becomes clear that model alignment alone cannot prevent misuse — structural safeguards, monitoring, and international coordination are essential complements.

The findings reignite debate over open-weight model risks and export controls. While major AI developers maintain content safety policies, the Boko Haram case demonstrates that determined adversaries consistently find ways around restrictions.

🔗 [Full CASP report](https://casp.ac/reports/ai-enabled-terrorism)

---

### 5. 🇨🇳 Xiaomi Publishes MiMo v2.5 Inference Optimization

**In one sentence**: _Xiaomi's AI team publishes inference efficiency improvements for MiMo v2.5, introducing Hybrid SWA (Sliding Window Attention) for reduced memory footprint and faster on-device deployment._

While the tech world's attention is fixed on the Apple-OpenAI legal battle, Xiaomi quietly released a substantive contribution to edge AI efficiency. MiMo v2.5 introduces three key optimizations:
- **Hybrid SWA**: Significantly reduces memory consumption for long-sequence inference
- **Enhanced quantization-aware training**: Reduces precision loss while improving inference speed
- **Device-specific deployment tuning**: Hardware adaptation for Xiaomi's own device lineup

🔗 [Xiaomi AI Blog](https://mimo.xiaomi.com/blog/mimo-v2-5-inference)

---

## 📅 Weekend Outlook

Saturday's tech landscape is dominated by the Apple-OpenAI lawsuit — a story with implications far beyond a single IP dispute. Meanwhile, GPT-5.6 Sol Ultra's mathematical proof achievement sets a new benchmark for what AI can contribute to fundamental research, and the QuadRF open-source radio project demonstrates that RF sensing capability is rapidly democratizing.

**Watch for next week**: Further developments in the Apple-OpenAI litigation, peer review responses to the GPT-5.6 Cycle Double Cover proof, UBTECH U1 order fulfillment progress, and potential market reactions as the implications of this week's events sink in.
