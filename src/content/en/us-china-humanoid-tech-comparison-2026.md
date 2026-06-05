---
title: "US-China Humanoid Robot Tech Stack Showdown: A Five-Way Technical Comparison"
date: 2026-06-05
author: "SinoBot Editorial"
tags: [humanoid-robot, tech-comparison, figure-02, tesla-optimus, unitree-g1, zhiyuan, fourier]
tier: "deep-signal"
cover: "/images/galbot-robot.jpeg"
excerpt: "A comprehensive technical comparison of five leading humanoid robots — Figure 02, Tesla Optimus Gen 3, AgiBot Expedition A2, Unitree G1, and Fourier GR-3 — from actuators to AI models, production scale to burn rate."
---

## I. Bottom Line Up Front: Two Technical Philosophies Are Diverging

Between 2025 and 2026, the humanoid robot industry crossed the historic threshold from "lab prototype" to "small-batch production." Five benchmark humanoid robots — Figure 02, Tesla Optimus Gen 3, AgiBot Expedition A2, Unitree G1, and Fourier GR-3 — now represent distinctly different technical philosophies emerging from the US and China.

The core conclusion: US companies (Figure, Tesla) hold advantages in AI model integration, dexterous hand design, and capital reserves. Chinese companies (AgiBot, Unitree, Fourier) lead in production scale, supply chain cost, and motion control. This is not a "who is better" question — it is a strategic fork with distinct trade-offs. The US approach pursues "one robot to rule them all" — more AI capability, more dexterous hands, higher cost. The Chinese approach pursues "scale first" — build it, ship it, and iterate through deployment.

## II. Comprehensive Five-Way Comparison

### Hardware Specification Comparison

| Dimension | Figure 02 | Tesla Optimus Gen 3 | AgiBot Expedition A2 | Unitree G1 | Fourier GR-3 |
|-----------|-----------|-------------------|---------------------|-----------|-------------|
| **Height** | 1.70m | 1.75m | 1.70m | 1.27m | 1.70m |
| **Weight** | 70kg | ~73kg | ~75kg | ~35kg | ~80kg |
| **DoF (total)** | 40+ | 48+ | 49+ | 23+ | 44+ |
| **Hand DoF** | 22 | 25 (per side) | ~12 | 7 | 18 |
| **Payload** | 25kg | ~20kg | ~25kg | ~3kg | ~10kg |
| **Walking speed** | ~1.2m/s | ~1.5m/s | ~1.6m/s | ~2.0m/s | ~1.0m/s |
| **Battery life** | ~5 hrs | ~4 hrs (est.) | ~3 hrs | ~2 hrs | ~4 hrs |
| **AI compute** | Custom + OpenAI | FSD computer | Custom NVIDIA Orin | Custom MCU | NVIDIA Orin |
| **Sensor config** | RGB-D + force + tactile | Vision + force + IMU | RGB-D + force | RGB-D + force | RGB-D + force + tactile |
| **Price tag** | Undisclosed (est. ≥$50k) | ~$100,000+ (B2B batch) | Undisclosed | $13,500 (edu edition) | Undisclosed |
| **Shipment status** | Industrial trial deployed | Batch pre-production | Mass production (10,000+) | Mass production (5,500+) | Small-batch shipping |
| **Actuation type** | Electric servo | Electric servo (Tesla self-developed) | Electric servo | Electric servo (self-developed) | Electric servo |

Sources: Company disclosures, Counterpoint Research, TrendForce, public technical documentation and industry estimates

### Motion Control and Actuation Comparison

| Dimension | Figure 02 | Tesla Optimus Gen 3 | AgiBot Expedition A2 | Unitree G1 | Fourier GR-3 |
|-----------|-----------|-------------------|---------------------|-----------|-------------|
| Joint drive architecture | Motor + reducer | Motor + reducer (self-developed) | Motor + reducer | Motor + reducer (self-developed) | Motor + reducer |
| Reducer type | Harmonic drive | Custom planetary/harmonic (self-developed) | Harmonic drive (Chinese sourcing) | Harmonic drive (self-developed) | Harmonic drive (Chinese sourcing) |
| Joint torque sensing | Yes | Yes | None or limited | None (base version) | Yes |
| Whole-body compliance control | Yes | Yes | Limited | Basic | Yes |
| Dynamic walking capability | Limited | Limited | Good | Excellent | Moderate |

Unitree G1 demonstrates China's motion control advantage most clearly. At roughly 2.0m/s, it is among the fastest-walking humanoid robots globally. Its dynamic walking and jumping capability are direct carry-overs from Unitree's years of quadruped robot development. By comparison, Figure 02 and Optimus prioritize stable walking and precision manipulation in industrial environments — speed is not the primary metric.

### AI and Software Stack Comparison

| Dimension | Figure 02 | Tesla Optimus Gen 3 | AgiBot Expedition A2 | Unitree G1 | Fourier GR-3 |
|-----------|-----------|-------------------|---------------------|-----------|-------------|
| AI model architecture | Helix AI (Vision-Language-Action) | End-to-end neural net (FSD-derived) | Embodied LLM (brain + cerebellum architecture) | Basic motion AI | Rehab AI + general motion model |
| AI training scale | OpenAI partnership; large video/simulation training | Tesla FSD compute pool (hundreds of thousands GPU-hrs) | Proprietary training cluster | Limited | Limited |
| Natural language interaction | Yes (OpenAI integration) | Basic | Yes | Limited | Limited |
| Cross-scenario generalization | Strong | Medium (narrow domain) | Medium | Low | Medium |
| Platform openness | Closed system | Closed system | Semi-open | Open (ROS2/Python/C++) | Open (N1 open-source hardware) |
| Simulation training platform | Internal | Tesla Sim | Internal | NVIDIA Isaac integrated | Internal |

The AI capability gap is the most consequential difference between US and Chinese humanoid robots. Figure 02's deep integration with OpenAI gives it a significant edge in visual recognition, natural language understanding, and complex task planning. In a recent internal evaluation, Figure 02 demonstrated zero-shot adaptation to an unfamiliar room — entering a space it had never seen before, accepting natural language instructions to retrieve and deliver objects, without pre-programming. That level of generalization has only been demonstrated by Figure and, to a lesser degree, Tesla.

Chinese companies trail on this front. AgiBot employs a "brain + cerebellum" layered architecture — the brain handles task planning, and the cerebellum manages motion execution. Unitree's strength is its open software ecosystem — the G1 natively supports ROS2 and NVIDIA Isaac simulation, making it a popular choice for overseas research labs conducting secondary development. However, Unitree itself does not deliver a complete advanced AI stack. Fourier took a differentiated path with its N1 open-source hardware initiative, seeking to attract developers through ecosystem building rather than competing on AI capability directly.

### Production Scale and Cost Comparison

| Dimension | Figure 02 | Tesla Optimus Gen 3 | AgiBot Expedition A2 | Unitree G1 | Fourier GR-3 |
|-----------|-----------|-------------------|---------------------|-----------|-------------|
| 2025 shipments | ~150 units | Not publicly sold | ~8,000+ | ~5,500 | ~200 |
| 2026E shipments | ~500-1,000 | 5,000-50,000 | 15,000-20,000 | 10,000-15,000 | ~1,000 |
| Capacity plan | Undisclosed | 50k-100k (2026 target) | Continuous ramp | 75,000 (2026-27 target) | Undisclosed |
| Self-developed components ratio | Low | Very high (actuators/computer/AI chip/sensors) | Medium | Very high (>90%) | Medium |
| BOM cost (est.) | $50k-$80k | $30k-$60k | $20k-$40k | $8k-$12k | $30k-$50k |
| Profitability | Loss-making | Loss-making (parent profitable) | Loss-making | Profitable (RMB 591M adj. net profit 2025) | Loss-making |

Scale and cost are China's home turf. Unitree G1's estimated BOM cost of $8,000-12,000 is less than one-sixth of Figure 02's. Even at a retail price of just $13,500-16,000 (education edition), Unitree maintains roughly 55% gross margin. This is a structural advantage built on >90% in-house component production — a cost position overseas competitors cannot replicate.

AgiBot is the global volume leader, shipping roughly 8,000 units in 2025 (including both the wheeled dual-arm Expedition A2 and the Lingxi X2), with plans to double that in 2026. AgiBot's scalability comes from a "flexible order-driven + standardized supply chain" model rather than Unitree's in-house component strategy. The two approaches deliver similar cost outcomes — AgiBot wins on capacity flexibility, Unitree wins on profit margin.

### Funding and Valuation Comparison

| Dimension | Figure AI | Tesla Optimus | AgiBot | Unitree | Fourier |
|-----------|-----------|---------------|--------|---------|---------|
| Total raised | ~$1.5B | Parent $1T+ market cap | Several hundred million RMB | ¥4.2B ($580M) IPO in progress | ~¥1B ($140M) |
| Latest valuation | ~$2.6B | N/A | Undisclosed | ¥40-60B ($5.5-8.3B) IPO target | ~¥8B ($1.1B) |
| Key backers | OpenAI, Microsoft, Amazon, NVIDIA | Tesla internal funds | Tencent, Meituan (?) | Meituan, Tencent, Sequoia, 30+ institutions | Hillhouse, Sequoia, etc. |
| Annual burn rate | ~$300-400M | N/A | ~Several hundred million RMB | Profitable | ~¥300-500M |
| Listing status | Private | Parent listed | Backdoor listing in progress | STAR Market IPO approved | Pre-IPO |

The funding gap reflects fundamentally different capital market dynamics. Figure AI attracted massive Silicon Valley capital with an "AI + humanoid robot" narrative, accumulating roughly $1.5B in total funding. However, its burn rate is correspondingly high — approximately $300-400M annually — with a business model still unvalidated. Tesla, backed by its trillion-dollar parent, enjoys effectively unlimited funding for Optimus — at the cost of needing Elon Musk to continuously demonstrate viability.

Chinese funding rounds are smaller but far more capital-efficient. Unitree had raised only approximately ¥1.5B ($200M) cumulatively before its IPO, yet had already achieved profitability. AgiBot reached tens of thousands of units shipped in a shorter timeframe on a fraction of Figure AI's capital. Fourier sustained through Series E on roughly ¥1B ($140M) total funding — an order of magnitude more capital-efficient than Figure AI.

## III. The Strategic Fork: Two Underlying Logics

### The US Approach: AI First, One Robot To Rule Them All

Figure and Tesla's flagship products share a strategic assumption: the humanoid robot's core competitive advantage is AI capability. Stronger visual understanding, more natural language interaction, more general task execution — once the robot is "smart enough," it will naturally find applications in almost every scenario.

The benefit is extremely high technical barriers — if the breakthrough works, it is transformative. The cost is long development cycles, massive capital deployment, and uncertain commercial return timelines. Figure's $1.5B+ cumulative funding and Tesla's astronomical investment in FSD compute and self-developed actuators are the "entry fees" for this path.

### The China Approach: Scale First, Scenario-Driven

AgiBot, Unitree, and Fourier operate on the opposite strategic logic: first get the robot walking and working in real factories and labs, use scale to drive down costs, and iterate AI capability through real-world deployment.

Unitree's logic is the most extreme — build a robot cheap enough to sell, ship it, and use customer feedback to drive technical upgrades. The G1 Education Edition at $13,500-16,000 is priced far below any overseas competitor. At this price point, university robotics labs around the world can afford to purchase and experiment with the platform, creating a positive feedback loop: hardware sales → data accumulation → AI training.

AgiBot's strategy is more pragmatic — rather than building a general-purpose robot, it develops specific capabilities for manufacturing scenarios. Expedition A2 is deployed in BYD and SAIC factories performing material handling, screw fastening, and quality inspection assistance — accumulating data and experience through actual production use cases.

The benefit of this approach is earlier commercial deployment, less cash flow pressure, and faster iteration cycles. The cost is less breakthrough technology, lower brand premium, and greater vulnerability to imitation.

## IV. Where the Two Paths Converge

### Key Variables for H2 2026

**1. Figure AI's production delivery.** Figure consistently faces a "good reviews, weak delivery" problem. $1.5B in total funding but only 150 units shipped annually. If H2 2026 sees meaningful deliveries to BMW and other customers, it will validate the industrial use case.

**2. Tesla Optimus's real-world deployment.** Musk admitted over 1,000 Optimus units deployed internally "were doing no useful work." Whether the first B2B deliveries in H2 2026 generate genuine production value will determine near-term market confidence.

**3. AgiBot's profitability inflection.** AgiBot is the global volume leader but has not disclosed profitability data. If it approaches break-even in 2026, the "scale-first" model gains broad validation.

**4. Unitree's AI capability upgrade.** G1 excels at motion control but is weak in AI generalization. Unitree plans to allocate 36.2% of its ¥4.2B IPO proceeds to AI model R&D (¥1.52B). If this investment yields meaningful AI breakthroughs, the AI gap with Figure/Tesla could narrow significantly.

**5. Fourier's open-source experiment.** Can the N1 open-source hardware platform attract enough developers to form a viable ecosystem? If successful, Fourier could carve a unique path that diverges from all competitors.

### Long-Term Assessment

The two technical philosophies will likely not converge into a single winner. A more probable scenario over the next 2-3 years: US companies dominate the high-end AI market, while Chinese companies build cost moats in home and mid-range industrial applications through supply chain advantages.

A potential tipping point: large-scale cost reduction in AI capability. If humanoid robot AI becomes a commodity service similar to cloud APIs (analogous to calling GPT API today), then "hardware cost" becomes the decisive variable. Under this scenario, Unitree and AgiBot's supply chain advantages translate into a durable long-term moat.

The data is stark: building a humanoid robot using Chinese suppliers carries a minimum BOM of approximately $46,000. Relying entirely on non-Chinese suppliers pushes that figure to $131,000 — enough to buy two more Chinese-sourced robots. This gap will not shrink with AI progress; it will only amplify once AI capability becomes commoditized.

---

*Sources: Company disclosures, Counterpoint Research, TrendForce, 36Kr, Tesla Q1 2026 Earnings Call Transcript, Figure AI public disclosures, Unitree IPO Prospectus*
