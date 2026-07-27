---
title: "每日脉搏 | 2026年7月28日 周二版 | Moonshot AI开源Kimi K3权重，首个开源3T级模型上线HuggingFace；Anthropic发布Claude Opus 5，半价狙击前沿；微软自研MAI模型家族，成本直降89%；Anthropic CEO发声：不要禁开源权重"
date: 2026-07-28
author: "SinoBot 编辑部"
tags: [daily-pulse, kimi-k3, moonshot-ai, open-weights, huggingface, anthropic, claude-opus-5, microsoft, mai, ai-cost, chinese-ai, open-source]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-07-28-cover.jpg"
excerpt: "Moonshot AI正式在HuggingFace上公开Kimi K3完整权重，这是全球首个面向公众开放的3T级开源模型。Anthropic发布Claude Opus 5，在多项编码基准上达到或超越旗舰Fable 5水平，成本仅为其一半。微软正式发布MAI自研模型家族，称在多个产品线上成本比OpenAI模型低89%。Anthropic CEO Dario Amodei公开发文：不应禁止开源权重模型。"
---

> 🎯 **周二速递（7月28日）**
>
> 今天的新闻矩阵围绕"开源权重的拐点"展开。Moonshot AI正式在HuggingFace上公开Kimi K3的2.8T参数完整权重——这是全球首个完全开放的3T级模型，在多项基准上直接对标Claude Fable 5和GPT-5.6 Sol。与此同时，Anthropic发布Claude Opus 5，明确打出"半价狙击"策略——他们不声称这是最聪明模型，而是最聪明的性价比选择。微软则用一堆数据说话：自研MAI模型在Bing、OneDrive、PowerPoint中已全面替代OpenAI模型，成本最高降低89%。三项发布指向同一个结论：AI行业正在从"谁能造最强模型"转向"谁能造最划算的模型"。
>
> • **🏆 Kimi K3权重正式开源** — Moonshot AI在HuggingFace上公开2.8T MoE模型，首个开源3T级
> • **🔧 Anthropic发布Claude Opus 5** — 旗舰级别的编码能力，一半的成本，主打"每日驱动模型"
> • **🏭 微软全面转向自研MAI模型** — 成本降低84-89%，Bing/OneDrive/PPT均已完成替代
> • **🛡️ Anthropic CEO：不应禁止开源权重** — Dario Amodei发文澄清立场，称保护主义禁令不是答案

---

### 1. 🏆 Kimi K3权重正式开源：全球首个3T级开源模型上线HuggingFace

**一句话**：Moonshot AI（月之暗面）正式在HuggingFace上公开了Kimi K3的完整模型权重——一个2.8万亿参数的Mixture-of-Experts（MoE）模型，激活参数104B，成为全球首个面向公众开放的3T级模型。

> 💡 **为什么重要**：Kimi K3的开源将"开源模型的天花板"提高到了前所未有的高度。2.8T总参数（其中104B激活）的MoE架构让它足以与Claude Fable 5和GPT-5.6 Sol等顶级闭源模型同台竞技——而且权重完全公开。

![Kimi K3 vs 顶级闭源模型基准对比](/images/daily-pulse-2026-07-28-kimi-bench.jpg "Kimi K3在多项基准上与Claude Fable 5和GPT-5.6 Sol直接对标")

Kimi K3的核心技术亮点包括：

- **架构**：采用Kimi Delta Attention（KDA）和Attention Residuals（AttnRes），896个专家中激活16个，缩放效率相比Kimi K2提升约2.5倍
- **多模态**：原生视觉能力，支持文本、图像、视频理解，MoonViT-V2视觉编码器
- **超长上下文**：1048576 token（约100万token）上下文窗口
- **性能表现**：在多项基准上达到顶级水平，Terminal-Bench 2.1得分88.3%、BrowseComp 91.2%、OSWorld-Verified 84.8%、MCPMark-Verified 94.5%

> 📊 **Kimi K3 vs 顶级闭源模型部分基准对比**
> | 基准 | Kimi K3 | Claude Fable 5 | GPT-5.6 Sol |
> |------|---------|----------------|-------------|
> | Terminal-Bench 2.1 | **88.3** | 88.0 | **88.8** |
> | DeepSWE | 67.5 | **70.0** | **73.0** |
> | BrowseComp | **91.2** | 88.0 | 90.4 |
> | MCPMark-Verified | **94.5** | 87.4 | 92.9 |
> | OSWorld-Verified | **84.8** | 8* | — |

（*Claude Fable 5的OSWorld得分数据不完整）

**Kimi K3使用的Kimi K3 License**允许研究、部署和进一步创新，但具体条款需要关注商业使用限制。

**对机器人行业的启示**：Kimi K3的开源为机器人创业公司提供了一个极具吸引力的选择——一个3T级的多模态模型，可以在本地或私有云部署，避免了调用闭源API的延迟和成本问题。对于需要长期上下文理解（如阅读多份技术文档后做出决策）的机器人任务，100万token上下文窗口尤为关键。

🔗 [HuggingFace: moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | [Moonshot AI技术博客](https://www.kimi.com/blog/kimi-k3) | [完整技术报告](https://github.com/MoonshotAI/Kimi-K3/blob/main/k3_tech_report.pdf)

---

### 2. 🔧 Anthropic发布Claude Opus 5：旗舰水平，半价驱动

**一句话**：Anthropic发布Claude Opus 5，这是一款定位"中高端每日驱动"的模型——在多项编码和知识工作基准上达到或超越旗舰Fable 5水平，但成本仅为其一半。

> 💡 **为什么重要**：Opus 5是Anthropic"分层模型战略"的核心棋子。Fable 5是最聪明的但最贵，Opus 5是做90%工作时的最佳选择，Sonnet 5用于规模化部署，Haiku 4.5用于子Agent和即时应答——Anthropic正在将其产品线从"单一最强"转向"工作负载匹配"。

定价方面，Opus 5维持了上一代Opus 4.8的价格：输入$5/百万token，输出$25/百万token。但性能提升巨大：

- **Frontier-Bench v0.1**（终端编码基准）：Opus 5得分43.3%，是Opus 4.8（18.7%）的两倍多，且超越Fable 5（33.7%）——成本更低
- **ARC-AGI 3**：得分比最接近的竞品高出3倍
- **OSWorld 2.0**（计算机使用基准）：超越Fable 5的最佳成绩，成本仅为其三分之一
- 在DeepSWE等编码基准上，Opus 5接近但略微落后于GPT-5.6 Sol

> 📌 **关键区分**：Anthropic发言人划分的清晰界限值得关注——"Opus 5适合有明确结果的有限任务（bounded tasks），Fable 5适合需要数小时或数天保持连贯的长程任务。" 这个"有限任务vs长程自主"的分界可能成为2026年模型差异化的核心轴。

Hashimoto等人对Opus 5的评价："它是基准能看到的任务的**最佳工具**，而当任务超出基准范围时，你需要Fable 5。"

**行业意义**：Opus 5的发布延续了上周Poolside Laguna S 2.1和Google Gemini 3.6 Flash所展示的趋势——AI竞争的焦点正从"原始智商"转向"效率智商"。对于机器人领域，这意味着：驱动机器人的模型不需要是最聪明的，但需要在成本预算内高效完成任务。

🔗 [Anthropic: Claude Opus 5](http://anthropic.com/news/claude-opus-5) | [VentureBeat报道](https://venturebeat.com/orchestration/anthropic-launches-claude-opus-5-a-cheaper-ai-model-for-coding-agents-and-enterprise-workflows)

---

### 3. 🏭 微软全面转向自研MAI模型：成本降低89%，OpenAI被"冷落"

**一句话**：微软正式发布MAI-Cyber-1-Flash、MAI-Image-2.5-Pro和MAI-Voice-2-Flash三款自研模型，并公布了详尽的部署数据——在Bing、OneDrive、PowerPoint等产品线中，自研模型已全面替代OpenAI模型，GPU成本最高降低89%。

> 💡 **为什么重要**：这是微软"模型自立"的最强信号。从依赖OpenAI到几乎全面替代，微软用一年时间完成了从"AI外包"到"自研AI"的转身。对OpenAI而言，这意味着最大客户正在逐步"脱钩"。

具体部署数据：

- **Bing Image Creator**已完全切换到MAI-Image-2.5，端到端不再使用OpenAI模型
- **PowerPoint**中，MAI-Image-2.5相比GPT-Image-2的GPU成本降低**84%**
- **OneDrive**图像编辑场景，保存率提升26%，P95延迟降低约25%，效率提升2.5倍
- **Dynamics 365 Contact Center**（服务T-Mobile和EasyJet的平台）中，MAI-Voice-2-Flash的GPU成本降低高达**89%**
- **医疗领域**：Dragon Copilot已集成MAI语音模型

> 📊 **微软MAI模型定价**
> | 模型 | 输入定价 | 输出定价 | 定位 |
> |------|---------|---------|------|
> | MAI-Image-2.5-Pro | 文本$5/百万token / 图片$8/百万token | 图片$106/百万token | 高端图像生成 |
> | MAI-Voice-2-Flash | $15/百万字符 | — | 高容量语音场景（呼叫中心、语音Agent） |
> | MAI-Cyber-1-Flash | — | — | 网络安全专用，集成MDASH |

微软的潜台词很明确："微软产品，由微软模型驱动"不再是路线图，而是现状。

🔗 [VentureBeat: Microsoft launches in-house AI models](https://venturebeat.com/infrastructure/microsoft-launches-new-in-house-ai-models-it-says-cut-costs-up-to-89-versus-openai) | [Microsoft AI公告](https://microsoft.ai/news/introducing-mai-image-2-5-pro-and-mai-voice-2-flash/) | [MAI-Cyber-1-Flash](https://microsoft.ai/news/introducing-mai-cyber-1-flash-inside-mdash/)

---

### 4. 🛡️ Anthropic CEO Dario Amodei：不应禁止开源权重模型

**一句话**：Anthropic CEO Dario Amodei公开发文澄清，公司从未主张禁止开源权重模型，且保护主义禁令无助于解决国家安全关切。

> 💡 **为什么重要**：过去一周围绕"美国可能禁止中国开源权重模型"的讨论持续升温。多家科技公司联名签署支持开源权重的公开信，也有人指责Anthropic想通过禁令保护自身商业利益。Amodei的这篇文章既是对误读的澄清，也是对政策制定者的直接建议。

Amodei的核心立场：

1. **"不具有危险能力的开源权重模型是公共品"**——它们除了运行所需的算力外不花任何成本，为开发者、企业和研究人员提供价值
2. **真正的担忧是两个噩梦场景**：一是专制政府（特别是CCP）构建比美国更强的AI模型用于军事优势或深度监控；二是强大AI模型被用于网络攻击或生物攻击
3. **"禁止美国企业使用中国开源权重解决不了这两个问题"**——坏人不会是合法美国企业；最危险的模型可能是秘密训练、只交给军方的那个

Amodei支持的不是禁令，而是三项措施：
1. **不向中国出售高性能芯片和芯片制造设备**——这是阻止威胁#1最直接有效的方式
2. **打击工业规模的蒸馏（distillation）行为**——蒸馏使中国能在有限芯片条件下快速逼近前沿水平
3. 保持AI安全研究的透明度

> 📌 **SinoBot视角**：这场讨论直接关系到SinoBot覆盖的中国机器人公司。如果美国最终限制中国企业使用先进AI芯片，Unitree、UBTECH、Deep Robotics等公司的机器人AI能力将受到影响——它们可能被迫转向中国自研芯片平台（如华为昇腾）来部署AI推理。

🔗 [Anthropic: Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) | [Hacker News讨论](https://news.techdirt.com/2026/07/27/judge-rejects-googles-attempt-to-dmca/) | [Axios报道](https://www.axios.com/2026/07/20/ai-us-china-open-source-kimi)

---

### 📰 更多头条

- **OpenAI发布Presence企业Agent平台** — 面向企业客户的AI Agent部署与管理平台，支持语音和聊天通道，当前有限公开阶段（来源：VentureBeat）
- **Mistral CEO确认新开源模型"泄露"** — 接近GPT-4性能的开源模型据称已在社区流传（来源：Hacker News）
- **Inflection AI重返消费市场** — 推出Pi Journeys产品以及"消费者AI习惯"研究报告（来源：VentureBeat）

---

*数据来源：HuggingFace, Moonshot AI, Anthropic, VentureBeat, Hacker News (Algolia API), Microsoft AI, OpenAI, TechCrunch*
