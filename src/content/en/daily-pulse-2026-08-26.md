---
title: "Daily Pulse #73 | Aug 26 | The Robot Games Close — What the Floor-Exercise Rule Upgrade Reveals, and Five Questions to Track Next"
date: 2026-08-26
author: "SinoBot Editorial"
tags: [daily-pulse, humanoid-robots, world-humanoid-robot-games, floor-exercise, somersault, motion-control, reproducibility, commercialization, embodied-ai]
tier: "daily-pulse"
cover: "/images/daily-pulse-2026-08-26-games.jpg"
excerpt: "The second World Humanoid Robot Games closes on Aug. 26. The closing is not the end of the story — it is the start of the real questions. The floor-exercise program expanded from nine moves to eight categories with more than 20 moves, with somersaults named the hardest challenge, showing that torso and aerial control remain humanoid robots' clearest weak spot. A competition is only worth as much as the data it publishes: one fastest record matters far less than reproducible, measurable performance that can make it into a procurement list."
---

> 🎯 **Wednesday Briefing (Aug. 26)**
>
> The second World Humanoid Robot Games reaches its closing day. The closing should be treated less as a result than as the start of a larger test — the problems the competition exposed carry more information than the medals it handed out.
>
> • **🤸 Floor-exercise rules were substantially upgraded** — from nine single moves in the first edition to eight categories and more than 20 moves, with front and side somersaults added for the first time
> • **⚠️ The torso remains the weak point** — the event's technical representative said plainly that "the robot's waist is its weakness," and completing a somersault in midair is itself a hard challenge
> • **📏 A record is not capability** — a single fastest run carries limited industrial value; reproducibility, completion rate and energy use are the comparable metrics
> • **🔭 Five questions to track after the closing** — from whether results can be reproduced, to whether data is published, to whether orders follow

## 1. Closing-Day Framing: The Competition Ends, the Real Questions Begin

**In one sentence**: _The five-day second World Humanoid Robot Games closes on Aug. 26, but its industrial meaning lies not in who won a medal, but in how it moved the question from "can a robot do this move?" to "under what rules, stability and energy budget can it complete the task?"_

Earlier robot competitions often looked like capability showcases: a robot could run, stand up after a fall, or complete a few scripted moves. This edition pushed the scale to 51 events and 1,301 matches across racing, ball sports, combat, dexterous hands and industrial or household scenarios, with 16 countries, 666 teams and 2,056 robots. Scale alone is unremarkable. What changed is that the rules became measurable — moves are grouped into categories with scoring boundaries and a shared timing and scoring standard. For the first time, competition results carry the potential to resemble product metrics.

But "potential" is not the same as "equal." A competition, however well run, only proves that a machine completed a task in a controlled arena with support staff nearby and clear task boundaries. It cannot answer, on its own, whether the robot can run continuously in the real world, who repairs it when it fails, and what it costs. **The closing simply pushes those answers one step further down the road — it does not answer them for anyone.**

> 📌 **Conclusion**: The real value of the competition is turning "can run," "can flip," and "can grab" into recordable, comparable data. Medals are for the audience. Data is for buyers and engineering teams.

## 2. The Floor-Exercise Upgrade: A Stress Test for Torso and Aerial Control

**In one sentence**: _Floor-exercise technical representative Ling Hui said publicly before the event that the program's team count grew from three in the first edition to 18, and the rules expanded from nine single moves to eight categories with more than 20 moves, adding static, support and somersault families, with front and side somersaults introduced for the first time; somersaults were singled out as the biggest challenge for the robots._

The engineering meaning of this change is worth more attention than the headline "more moves":

- **Static and support moves** test center-of-gravity control and joint holding torque. Holding a pose over time exposes servo temperature rise, friction and backlash more quickly than a burst of motion;
- **Front and side somersaults** broaden the test from a single backward-flip path to new paths that require coupled torso pitch and lateral attitude solving, placing a clearly higher demand on state estimation and the controller;
- **The waist being named the weak point** signals that, during multi-axis midair flips, the torso segment remains the most likely place for a humanoid robot to lose stability.

Ling Hui's wording was direct and important: "The robot's waist is its weakness; completing a somersault in midair is itself a difficult challenge." Behind that sentence sits a chain of concrete questions: whether the torso joints have enough peak torque, how large the aerial-pose estimation error is, how many steps are needed to recover balance after landing impact, and whether the system degrades safely when a protective mode trips.

> 📌 **Conclusion**: Floor exercise is no longer a "good-looking" showcase item. It is a concentrated stress test for torso control, aerial posture and landing recovery. The more refined the rules, the more specific the engineering weaknesses they expose.

## 3. From "Record" to "Reproducibility": Data Transparency Sets the Value

**In one sentence**: _Public reports highlight robots beating the human 400-meter record, but a single data point like that is only useful for procurement and R&D when it is accompanied by average time, completion rate, energy use, fall rate and human-takeover count._

A 400-meter event tests far more than peak speed. It simultaneously exposes battery thermal management, continuous gait stability, turning strategy, fault recovery and controller degradation. A single burst of acceleration is interesting; repeatable performance under shared rules, across battery levels and dates, is what approaches a comparable product metric.

That raises an observation more important than "who is fastest": **whether the competition data is published, and at what granularity.** Only when average time, split times, energy curves, fall counts and takeover counts are released together can a competition result move from "a headline" to "a procurement reference." Otherwise, one fastest record is not meaningfully different from a promotional poster.

> 📌 **Conclusion**: The standard for judging a robot competition's value is not how many "firsts" it produced, but how many data points it produced that a third party can reproduce. Medals expire; data accumulates.

## 4. Five Questions to Track in the Week After the Closing

After the closing, tracking whether these five signals materialize matters more than reviewing the medal table:

| Dimension | Question to track | Why it matters |
|---|---|---|
| Reproducibility | Can the same team reproduce results on different days and battery levels? | Decides whether a "record" equals "capability" |
| Data transparency | Does the organizer publish split times, energy, fall rate and takeovers? | Decides whether the event can inform R&D and procurement |
| Standards | Does the standards-framework draft cover whole robots, components, data and safety? | Decides whether "how to measure" is unified |
| Order conversion | Do medals and scenario results create a visible path to procurement? | Decides whether the event feeds commercialization |
| Service chain | Is deployment, maintenance and spare-parts cost discussed openly? | Decides whether "can compete" becomes "can deliver" |

Competition, standards and capital formed a loop in late August: the arena exposes the limit, standards define the measurement, and capital tests delivery. None of the three can substitute for the others, and none alone represents industry maturity. **The real news on closing day is not inside the five days of the program — it is in how the data, standards and orders get written down next.**

## 📅 Three Metrics to Watch Next

- **Result reproducibility**: whether the record-setting team can produce a verifiable result again on a non-competition day at low battery
- **The full standards draft**: whether test boundaries, data fields and safety requirements land in one document rather than a specification list
- **Unitree's operating data**: whether its first post-listing disclosure makes "share of revenue from industry applications" and "after-sales investment" verifiable

*Daily Pulse by SinoBot Editorial | Data current as of Aug. 26, 2026 | Primary sources: China News Service public floor-exercise rules briefing, public event reporting, public standards information and Yicai Global | Images: public event materials*
