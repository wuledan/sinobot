---
title: "Daily Pulse | 2026年6月26日 | NVIDIA发布Halos安全系统+Isaac GR00T开源人形机器人平台；Agility Robotics以$25亿估值SPAC上市；摩根士丹利翻倍中国人形机器人出货预期至5万台"
date: 2026-06-26
author: "SinoBot Editorial"
tags: [daily-pulse, nvidia, halos, isaac-gr00t, robotics-safety, humanoid, unitree, agility-robotics, ipo, spac, morgan-stanley, china-humanoid-forecast, figure-03, bmw, boston-dynamics, galbot, catl]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-06-26-cover.jpg"
excerpt: "NVIDIA连续两日重磅发布——Halos全栈机器人安全系统+Isaac GR00T开源人形机器人平台（搭载Unitree H2 Plus）；Agility Robotics签署$25亿SPAC协议，人形机器人公司首位美股上市；摩根士丹利翻倍中国人形机器人2026年出货预测至50,000台；Figure 03进驻BMW Spartanburg工厂；Boston Dynamics宣布$1亿马萨诸塞扩建计划；Unitree科创板IPO获批。"
---

> 🎯 **本周速览（6月23-26日）**
> • **🏆 NVIDIA双重发布：Halos安全系统 + Isaac GR00T开源人形平台**：全栈安全系统为Physical AI建立行业安全标准；联手Unitree推出H2 Plus参考机器人，向全球大学开放，OpenCat开源框架同步上线
> • **🏭 Agility Robotics签署$25亿SPAC协议**：Digit人形仓储机器人公司将与Churchill Capital Corp XI合并上市，成美股首个人形机器人IPO
> • **🇨🇳 摩根士丹利翻倍中国人形机器人出货预测**：2026年上调至50,000台，商业化部署加速驱动，CATL+Galbot等落地项目提供实证
> • **🤖 Figure 03进驻BMW Spartanburg工厂**：Figure AI与BMW联合推进Physical AI在量产车间的应用，标志着人形机器人走出试点进入规模化部署
> • **🏢 Boston Dynamics宣布$1亿扩建**：在Waltham建立先进机器人与AI制造中心，新增1,250个岗位
> • **🇨🇳 Unitree科创板IPO获批**：拟募资42亿元，中国"人形机器人双雄"格局成形——Unitree与Agibot各据一方；Galbot同期完成25亿C轮融资

---

### 1. 🏆 NVIDIA连续重拳：Halos安全系统 + Isaac GR00T开源人形机器人平台

**一句话总结**：_NVIDIA在本周连续两天发布重磅机器人相关产品——6月24日的Halos全栈安全系统和6月25日的Isaac GR00T开源人形机器人参考平台（基于Unitree H2 Plus），一举覆盖了Physical AI从安全到研发的全链条。_

> 💡 **为什么重要**：NVIDIA正在从"AI算力供应商"向"机器人产业基础设施平台"转型。Halos定义了Physical AI的安全标准，而GR00T开源平台则解决了大学和实验室研发人形机器人的最大瓶颈——硬件获取难、软件栈不统一。两者叠加，NVIDIA实质上在搭建机器人领域的"Android生态"。

#### Halos：Physical AI的行业安全标准

Halos被定位为业界首个全栈机器人安全系统，覆盖从芯片到云端的完整安全栈：

| 层级 | 功能 |
|------|------|
| **芯片级安全** | NVIDIA Blackwell/Thor芯片内置安全岛（Safety Island），实时监控传感器和执行器状态 |
| **操作系统级** | 安全关键型内核隔离，防止非安全任务干扰实时控制 |
| **中间件/网络** | 安全通信协议，防止传感器数据篡改或指令注入 |
| **AI模型层** | 行为边界约束（Safety Cage），确保模型输出不超出物理安全范围 |
| **云端/运维** | 远程安全监控、OTA安全更新、故障回滚 |

关键创新在于**Outside-In Safety**——与FORT Robotics合作，将传统工业机器人安全理念（安全区域、速度限制）引入AI驱动的机器人系统。这套方案不是用AI"检测"安全，而是从硬件架构上强制安全边界。

> 📌 **一句话**：Halos让"AI机器人安不安全"这个问题从主观感受变成了可度量、可审计的工程标准。

#### Isaac GR00T：开源人形机器人平台的野心

6月25日，NVIDIA正式发布Isaac GR00T Reference Humanoid Robot——一款面向学术研究的开源人形机器人平台，基于**Unitree H2 Plus**硬件，整合NVIDIA的全栈软件生态。

**平台组成**：
- **硬件**：Unitree H2 Plus人形机器人本体（带NVIDIA Jetson AGX Orin模块）
- **感知**：深度相机+IMU+力传感器套件，集成NVIDIA Isaac Perceptor
- **操控**：可选配Skilled Hands/Sharpa灵巧手，支持Isaac Manipulator
- **软件栈**：开源框架OpenCat + NVIDIA Isaac Sim仿真平台
- **训练框架**：支持模仿学习（IL）、强化学习（RL）、大模型微调

> 💡 **与Tesla Bot的路径差异**：Tesla走的是纵向整合（自研一切），NVIDIA GR00T走的是平台化路线——自己不造机器人，但让全世界的大学和创业公司都能低成本获得人形机器人研发平台。这条路径一旦跑通，NVIDIA将成为人形机器人时代的"操作系统+芯片"标准制定者。

**新加坡Sharpa加入生态**：以灵巧触觉操控闻名的Sharpa宣布加入GR00T平台，为参考机器人提供高精度触觉感知能力——标志着新加坡在机器人灵巧操控领域的技术积累获得国际顶级平台认可。

🔗 [NVIDIA Halos官方公告](https://nvidianews.nvidia.com/news/nvidia-announces-halos-for-robotics) | [Isaac GR00T官方](https://developer.nvidia.com/isaac/gr00t) | [Unitree H2 Plus发布](https://www.prnewswire.com/news-releases/unitree-announces-h2-plus-an-nvidia-isaac-gr00t-reference-humanoid-robot-for-academic-research-302389168.html)

---

### 2. 🏭 Agility Robotics签署$25亿SPAC协议：人形机器人IPO第一股

**一句话总结**：_制造Digit仓储机器人的Agility Robotics宣布与Churchill Capital Corp XI合并，以$25亿估值通过SPAC方式在纽交所上市，成为美股市场第一个纯人形机器人IPO。_

> 💡 **为什么重要**：Agility的IPO不仅是对这家公司自身的验证，更是对整个"人形机器人商业化"赛道的信心投票。如果资本市场对这个故事给出积极定价，将打开后续Figure AI、Tesla Bot、Unitree等公司的上市通道。

**交易细节**：
- 合并估值：$25亿
- SPAC方：Churchill Capital Corp XI
- 上市地点：纽约证券交易所（NYSE）
- 资金用途：扩大Digit机器人在仓储和物流领域的部署，加速下一代产品研发

**Digit的差异化定位**：

Agility的产品策略有其独特性——它不追求通用人形机器人的全能路线，而是专注仓储物流场景的垂直深耕。Digit已经在多个客户现场部署，包括亚马逊的测试项目。

> 💡 **对标分析**：Agility选择了一条"先垂直再横向"的路径——先用Digit在仓储场景证明ROI，再逐步拓展到制造、配送等场景。这与Figure、Tesla的"直接挑战通用人形机器人"路线形成鲜明对比。在资本市场上，专注的叙事可能比宽泛的愿景更容易获得认可。

🔗 [WSJ独家报道](https://www.wsj.com/tech/ai/agility-robotics-spac-churchill-capital-ipo-9c4b4b04) | [TechCrunch](https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/)

---

### 3. 🇨🇳 摩根士丹利翻倍中国人形机器人出货预测至50,000台

**一句话总结**：_摩根士丹利将2026年中国人形机器人出货量预测从此前的约25,000台上调至50,000台，核心驱动因素是商业化部署速度远超预期，CATL×Galbot、UBTECH、Fourier等企业的落地案例提供了强有力支撑。_

> 💡 **为什么重要**：这是主流国际投行对中国"人形机器人产业化"给出的最新且最乐观的预测。50,000台意味着中国将占2026年全球人形机器人出货量的大半壁江山——中国正在从"机器人消费市场"转变为"机器人生产和应用市场"。

**预测上调的核心依据**：

1. **CATL + Galbot**：全球最大电池制造商CATL在其电池工厂部署了Galbot重载人形机器人——这是全球首个在动力电池产线上连续运行的人形机器人
2. **UBTECH Walker S量产加速**：UBTECH的Walker S已经进入多家汽车工厂（蔚来、比亚迪供应链）
3. **Fourier GR-2医疗/康养场景落地**：Fourier Intelligence在康复医疗领域的人形机器人部署节奏加快
4. **政策层面**：地方政府的"机器人+产业"扶持政策密集出台，补贴加速下游采购

**从"概念"到"装机量"的转折点**：

摩根士丹利的报告特别强调了一个关键变化——15个月前的预测争论焦点是"人形机器人能不能走出实验室"，现在的问题已经变成"产能够不够、交付周期多长"。这个问题的转换本身就说明了行业阶段的变化。

🔗 [CNBC报道](https://www.cnbc.com/2026/06/25/morgan-stanley-doubles-china-humanoid-robot-shipment-forecast.html) | [SCMP](https://www.scmp.com/tech/tech-trends/article/3312345/chinas-robot-rush-morgan-stanley-raises-2026-forecast-50000-units)

---

### 4. 🤖 Figure 03进驻BMW Spartanburg工厂：Physical AI从试点到量产

**一句话总结**：_Figure AI与BMW宣布深化合作，Figure 03人形机器人正式进入BMW位于南卡罗来纳州的Spartanburg工厂执行生产任务——这是Physical AI首次在全球顶级汽车工厂实现批量化部署。_

> 📌 **此前的背景**：Figure 02在2025年已在BMW产线上完成概念验证（PoC），展示了对冲压件搬运、车身装配辅助等任务的能力。Figure 03的进驻意味着从"试运行"进入了"实际生产"阶段。

**Figure 03的关键升级**：
- 全身自由度增加至42个，运动范围更广
- 负载能力从20kg提升至35kg
- 秀域AI（Foundation Model）集成度更高，可在不超过50次示教后学会新任务
- 电池热管理优化，单次充电续航提升至6小时

BMW表示，初期将使用Figure 03执行物料搬运、部件分拣和质量检查辅助等高频重复任务，并计划在评估后扩大至车身焊接和总装辅助。

🔗 [BMW官方公告](https://www.press.bmwgroup.com/global/article/detail/T0441992EN/bmw-group-advances-the-use-of-physical-ai-in-production-with-figure-03-project-in-spartanburg) | [Automotive World](https://www.automotiveworld.com/articles/bmw-group-brings-figure-03-humanoid-to-spartanburg/)

---

### 5. 🏢 Boston Dynamics $1亿扩建：人形机器人以外的另一条路

**一句话总结**：_Boston Dynamics宣布在马萨诸塞州Waltham投资1亿美元建设先进机器人与AI制造中心，预计新增1,250个就业岗位——Hyundai入主后的BD正在从"研究型实验室"向"量产制造企业"转型。_

> 📌 **值得注意的角度**：当全行业都在追捧通用人形机器人时，Boston Dynamics选择了一条不同的路——继续深耕四足（Spot）和非人形（Atlas作为研究平台），但通过扩大制造能力来巩固工业机器人的市场份额。Atlas退役液压方案后，BD的电驱动技术路线尚未推出后续产品。

**关键数据**：
- 投资额：$1亿
- 新岗位：1,250个
- 地点：Waltham, MA（距原总部不远）
- 定位：先进制造与AI研发中心

🔗 [CBS News](https://www.cbsnews.com/boston/news/boston-dynamics-robotics-ai-center-massachusetts-jobs/) | [Boston Business Journal](https://www.bizjournals.com/boston/news/2026/06/24/boston-dynamics-100-million-waltham-expansion.html)

---

### 6. 🇨🇳 中国人形机器人生态加速

本周还有多项中国市场的关键动态值得关注：

#### Unitree科创板IPO获批

宇树科技的科创板IPO申请正式获得上市委员会审议通过，拟募集资金42亿元（约$5.8亿）。按此规模，Unitree有望成为"A股人形机器人第一股"。上市募资将主要用于：
- 新一代人形机器人（H系列）研发
- 产能扩张（年产10,000台目标）
- 海外市场拓展

同时，**PANews报道了一个有趣的巧合**："Unitree上市当天，NVIDIA发布了人形机器人。"——Unitree作为NVIDIA GR00T平台的硬件合作伙伴，其IPO与NVIDIA的发布形成共振，进一步强化了"中国硬件+美国AI"的协同叙事。

#### CATL + Galbot：重载人形机器人在电池产线投产

CATL与Galbot联合宣布，全球首台由CATL电池驱动的重载人形机器人已在CATL电池工厂中正式上岗，执行极片搬运和模组装配任务。这是人形机器人在动力电池制造中的全球首次规模化部署，具有极高的行业标杆意义。

**关键数据**：
- 负载能力：40kg（重载版）
- 续航：8小时（单次充电）
- 精度：±0.5mm装配精度
- 部署场景：极片搬运、模组装配、质量巡检

Galbot刚完成25亿元C轮融资，估值超过100亿元，已成为中国估值最高的未上市人形机器人公司。

#### BYD、Xpeng、Chery等车企纷纷布局人形机器人

BYD已正式进入人形机器人市场，计划通过经销商网络销售；Xpeng CEO何小鹏亲自接管机器人业务部门；Chery将人形机器人推向消费级市场——中国车企正在集体将人形机器人作为"第二增长曲线"。

🔗 [Caixin: Unitree IPO](https://www.caixinglobal.com/2026-06-25/humanoid-robot-maker-unitree-advances-toward-618-million-shanghai-ipo-102298976.html) | [CnEVPost: CATL+Galbot](https://cnevpost.com/2026/06/25/catl-galbot-humanoid-robot-battery-factory/) | [36氪: Unitree IPO](https://36kr.com/p/3025483969821193)

---

### 📊 本周市场信号

| 信号 | 方向 | 解读 |
|------|------|------|
| NVIDIA建机器人全栈生态 | 🟢 强利好 | Halos+GR00T双平台降低行业门槛，利好整个机器人赛道 |
| Agility SPAC上市 | 🟢 利好 | 人形机器人资产证券化里程碑，打开后续IPO通道 |
| MS翻倍中国出货预测 | 🟢 强利好 | 中国从概念验证进入规模部署，最利好供应链企业 |
| Figure 03量产部署 | 🟢 利好 | 证明人形机器人可以在顶级汽车工厂创造实际价值 |
| BD坚持非人形路线 | 🟡 信号分化 | 四足+工业机器人路线与通用人形路线的高低搭配 |
| 中国车企集体入场 | 🟢 强利好 | 人形机器人从"创业公司赛道"升级为"巨头必争之地" |

---

*本文仅作行业信息整理与趋势分析，不构成投资建议。*
