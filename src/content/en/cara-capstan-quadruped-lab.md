---
title: "Hands-On Lab: Teardown of CARA, the Rope-Driven Quadruped — Zero-Backlash Joints Without a Single Gear"
date: 2026-08-01
author: "SinoBot Editorial"
tags: [hands-on-lab, cara, capstan-drive, rope-drive, quadruped, teardown, blcd, odrive, teensy, open-source-hardware, qdd, 5-bar-linkage]
tier: "hands-on-lab"
cover: "/images/cara-quadruped-hero.jpg"
excerpt: "CARA (Capstans Are Really Awesome) is a rope-driven quadruped with zero gears and zero pulleys: all 12 joints are driven by 2mm Dyneema rope through capstan drives, delivering zero backlash, high torque transparency, and low inertia. The full robot costs roughly $3,300, weighs 14.25kg, and pairs a Teensy 4.1 with 12 ODrive S1 controllers running 12 Eaglepower 90KV pancake BLDC motors. This teardown walks through the effective-diameter trap of the 8:1 reduction ratio, the coaxial 5-bar linkage leg design, and the control stack from cycloidal gait to periodic-update stability — the engineering decisions behind a 1,000-upvote Hacker News project."
---

# Hands-On Lab: Teardown of CARA, the Rope-Driven Quadruped

> **Bottom line up front**: CARA proves capstan drives are a viable high-precision reduction scheme for quadruped joints — zero backlash, transparent force control, quiet, and low cost, at the price of rope fatigue and tension maintenance. It's a $3,300, 14.25kg open-hardware experiment, and only the second quadruped ever to use capstan drives, after Stanley.

---

## 1. Why "No Gears" Deserves a Closer Look

Traditional quadruped joints are dominated by three reduction schemes: planetary gearboxes (consumer-grade, e.g., Unitree Go2), harmonic drives (the industrial humanoid standard), and quasi-direct drive (QDD, as in MIT Cheetah).

Their common enemy is **backlash** — the reverse error from gear mesh clearance that undermines force control and precision. Harmonic drives have minimal backlash but cost hundreds to thousands of dollars per unit, and their flexsplines have fatigue-life limits. Planetary gears are cheap but suffer backlash and high inertia.

**Capstan drives bypass gears entirely**: rope wraps around a drum and transmits torque through friction. There is no mesh clearance, so backlash is theoretically **zero**. Friction transmission is inherently "transparent" — external forces are felt at the motor (force-control friendly). Rope is light, so inertia stays low. The cost is a handful of rope and 3D-printed drums. The trade-offs: rope wears out, needs periodic re-tensioning, and ratio design hides a trap.

## 2. Core Design: The Exact 8:1 Ratio and the "Effective Diameter Trap"

CARA's starting point was a **precise 8:1 reduction** per capstan drive. The first design simply scaled the big drum's outer diameter to 8× the small drum's — and none of the drives measured 8:1.

The culprit is a classic misconception: **ratios must be computed from "effective diameters" (aligned with the rope's centerline), not outer diameters** — rope has thickness and lifts the line of force. It's the mechanical version of the 1982 "SAT question everyone got wrong."

- First two drives measured: **7.912:1** and **8.213:1** (one under, one over)
- **Linear interpolation** between the two known data points predicted the big-drum outer diameter for an exact 8:1
- Third drive measured: **8.000619:1** ✅

> 📌 Engineering takeaway: rope compresses under tension and its exact diameter is hard to measure. "Two approximations + interpolation" beats "one measurement" as a reliable engineering path.

## 3. Hardware BOM (Full Parts Breakdown)

| Component | Selection | Purpose / Rationale |
|-----------|-----------|---------------------|
| Joint motors ×12 | Eaglepower 90KV BLDC | Pancake form factor, large gap radius → high torque, QDD-friendly |
| Motor controllers ×12 | ODrive S1 FOC | Onboard magnetic encoders, mounted below motor shafts |
| Main controller | Teensy 4.1 | 600MHz Cortex-M7, CAN bus to all ODrives |
| IMU | BNO086 | Orientation feedback for incline leveling |
| Rope | 2mm Dyneema DM20 | Essentially zero creep, fatigue-resistant |
| Encoder magnets | 8mm + 3D-printed couplers | Mounted on motor shafts |
| Feet | TPU 95A half-spheres ×2/leg | Screw-mounted; wear fast on concrete (author plans silicone) |
| Small drums | PET-CF printed (100% infill) | Highest stress point; PET-CF stronger than PC |
| Structural parts | PC printed (25% gyroid infill) | Gyroid: isotropic strength, great strength-to-weight, fast prints |
| Frame | 4 carbon-fiber tubes full-length + front/rear clamp plates | High strength-to-weight |
| Power | 24V 3000mAh Kobalt battery + 40A fuse | Capacity low (author admits); 5V regulator for Teensy |
| Control | 8-channel RC transmitter/receiver | Manual operation |

**Specs**: 31.41 lbs (14.25 kg) ｜ 630.6 × 456.8 × 427.5 mm ｜ Total cost ≈ **$3,300**

> 📌 Parts observation: the force-control core is the **Eaglepower 90KV + ODrive S1 QDD combo** (same lineage as MIT's open-source quadrupeds), with capstan drives replacing the belt/planetary reduction. All-3D-printed plus carbon tubes — a classic mid-budget open-hardware route.

## 4. Mechanical Design: The Coaxial 5-Bar Linkage Leg

CARA's legs use a **coaxial 5-bar linkage** instead of a conventional quadruped leg, for three reasons:

1. **Even load distribution** between the two motors
2. **Significantly more compact** — the 5-bar reduces the leg envelope
3. **Rarely used in quadrupeds** — a deliberate road-less-traveled choice

Each leg has 3 joints: `a`, `b` (the 5-bar's two inputs) plus an `ab/ad` joint rotating the whole linkage. Every joint is driven by an 8:1 capstan drive. Feet are TPU half-spheres; small drums are PET-CF (highest stress).

> 📌 Engineering takeaway: the 5-bar parallel leg's advantages — motors cluster near the body, lower inertia, more even load — come at the cost of more complex kinematics, which is exactly why the author hand-derived three sets of kinematic equations (below).

## 5. Software Stack: From Homing to Dynamic Stability

**Homing**: With absolute encoders only on motor shafts (no joint-level encoders), every startup requires spinning each joint to its physical limit (detected via current rise) to establish zero. **Mandatory at every boot.**

**Three kinematic equation sets**:
- **IK (inverse)**: foot X/Y/Z target → joint angles
- **FK (forward)**: joint angles → foot position (confirming current pose before planning)
- **RK (rotation)**: foot positions for rolling/pitching/yawing the body about its center (pose control and stability)

**Gait**: a **cycloidal step trajectory** — smooth takeoff and landing, natural appearance (triangular and rectangular trajectories tested worse on smoothness, leg clearance, and naturalness). Walking follows a **trotting sequence** (diagonal legs paired), each step split into swing (airborne) and stance (ground propulsion) phases.

**Stability control (a CARA first)**:
- **Static stability**: continuously reads IMU incline, rotates body equally/oppositely to stay level
- **Dynamic stability**: key difference — **orientation updates only when all four feet are on the ground (once per step cycle)**. The author found that updating too frequently during the stepping sequence causes instability, because the robot never settles into a steady state.

> 📌 Engineering takeaway: "correct orientation once per step cycle" is a counterintuitive but effective decision — higher control frequency isn't always better; it must match the mechanical system's settling time.

## 6. Known Limitations and Iteration Plans (Author's Own Notes)

- **Battery too small**: 3000mAh is low for a 14.25kg robot; next-gen plans double capacity and higher voltage (requires a battery-bay redesign)
- **TPU feet wear fast**: noticeable on outdoor concrete; silicone planned
- **Step height insufficient**: can't clear obstacles without instability; author suggests reinforcement learning as a follow-up
- **Planned additions**: wheels (Unitree B2-W style), GoPro mount, LiDAR, robotic hand; next robot will be a **smaller, more builder-friendly version with a step-by-step build guide** (targeted 2026)

## 7. Implications for DIY and Industry

**For DIY builders**: CARA is a complete roadmap for "low-cost, high-performance joints" — 3D-printed drums, 2mm rope, 90KV pancake motors, ODrive — bypassing expensive reducers. CAD is available (Patreon), and a build guide is planned.

**For industry**: capstan drives' zero backlash and force transparency are already validated in surgical robots. If rope life and tensioning are engineered away (auto-tensioners, wear-resistant rope), this could become a third route for small-joint reduction, challenging harmonic and planetary gears.

**For researchers**: the 5-bar leg + cycloidal gait + periodic-update stability forms a complete, reproducible lightweight quadruped control stack — a solid teaching and experimentation platform.

---

## 📌 Teardown Verdict

> CARA's value isn't about how well it walks — it demonstrates that **gears are not the only answer for high-precision joints**. Rope, drums, and QDD motors deliver zero backlash, transparent force control, and quiet operation for $3,300. As hardware costs fall and rope materials/tensioning mature, this gear-free route deserves serious evaluation by every quadruped and small-robot developer.

*Further reading: [CARA Project Page](https://www.aaedmusa.com/projects/cara) | [HN Discussion](https://news.ycombinator.com/item?id=44661846) | [Capstan Drive explainer video](https://www.aaedmusa.com/)*

*This Hands-On Lab is produced by the SinoBot Editorial Team | Polish pending (Gemini + ChatGPT)*
