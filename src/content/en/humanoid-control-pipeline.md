---
title: "The Humanoid Robot Control Pipeline: From Perception to Actuation"
date: 2026-06-03
author: "SinoBot编辑部"
tags: [humanoid robot, control pipeline, technical architecture, MPC, reinforcement learning]
tier: "hands-on"
excerpt: "From sensor input to joint actuation — breaking down the technical choices and engineering challenges across the full humanoid robot control pipeline."
---

## The Control Pipeline: A Humanoid's Digital Spinal Cord

How does a humanoid robot walk across uneven ground, pick up a box, and adapt to a room it has never seen before? The answer lies in a complete control pipeline stretching from sensors to actuators. Wheeled platforms and quadruped robots already have mature control frameworks. Bipedal humanoids face a far tougher problem — more degrees of freedom, harder balance constraints, and stricter real-time demands.

The pipeline breaks down into six layers: sensor acquisition → environmental perception → state estimation → motion planning → gait/whole-body control → joint actuation. Decisions at each layer determine how well upstream algorithms and downstream hardware work together. This article walks through each level from an engineering standpoint, examining the technical approaches and where the industry stands today.

## Layer 1: Sensor Acquisition — Where Data Begins

The control pipeline starts with multi-modal sensor fusion. A typical configuration includes:

**Vision sensors (depth cameras / stereo vision)** deliver terrain height maps and obstacle information. Unitree H1 carries an Intel RealSense D435i, outputting 1280×720 depth frames at 30 fps. Tesla's Optimus takes a vision-only approach with multiple automotive-grade fisheye cameras. Vision data is the backbone of environmental perception.

**Inertial measurement units (IMUs)** supply three-axis acceleration and angular velocity — essential for state estimation and balance. Six-axis IMUs provide accelerometer + gyroscope data; nine-axis variants add a magnetometer. Boston Dynamics' Atlas uses a high-precision fiber-optic gyro IMU (roughly $2000–5000 per unit). Most other humanoids make do with consumer-grade MEMS IMUs like the ICM-20948 (roughly $15).

**Joint encoders and force/torque sensors** report joint position, velocity, and external torque. Atlas uses 18-bit magnetic absolute encoders (0.0014° precision); mainstream solutions typically run 12–14-bit magnetic encoders (Unitree's in-house joint modules, for example). Six-axis force/torque sensors — such as Fourier Intelligence's FT-3000 sampling at 1 kHz — sit at the feet and wrists, directly measuring ground reaction forces and grasp forces. These provide the feedback signals that make gait control and manipulation possible.

**Tactile and proprioceptive sensing** — Figure 02 embeds tactile sensor arrays in its fingertips for spatial contact force distribution. Proprioceptive data (joint temperature, motor current, bus voltage) supports safety protection and power management.

## Layer 2: Environmental Perception — Making Sense of the World

Raw sensor data needs to become structured understanding. Vision data passes through the following stages:

**Visual Odometry (VO)** estimates 6-DOF camera motion by matching features across frames (ORB-SLAM3 or Droid-SLAM). Droid-SLAM, built on differentiable optimization, achieves centimeter-level positioning accuracy at roughly 50–100 ms per frame on a Jetson Orin.

**Terrain perception** converts depth maps into traversability maps. The usual approach: project point clouds onto a 2D elevation grid, then analyze slope and roughness. Typical thresholds: slope < 15°, step height < robot shin length (roughly 25–35 cm for humanoids). Anything exceeding these thresholds gets marked non-traversable, directly constraining the path planner downstream.

**Object detection and semantic segmentation** — YOLOv8 or Mask R-CNN identify obstacles, stairs, doors, and other environmental features. Inference runs at 10–30 Hz. Drop below that and perception lag creeps in, destabilizing the control loop.

## Layer 3: State Estimation — The Robot's Proprioception

The robot needs to know where it is, how it is oriented, and how its joints are configured. That is the job of the state estimation layer.

**Extended Kalman Filters (EKF)** remain the industry standard. They fuse IMU acceleration and angular velocity (prediction step) with position updates from visual odometry or motion capture (update step) and leg kinematics from joint encoders, producing smooth 6-DOF pose and velocity estimates. Typical rates: IMU prediction at 1 kHz, visual updates at 30–100 Hz.

**Floating-base dynamics** is a challenge unique to bipedal robots. There is no fixed connection to the ground, so the "base" (torso) orientation shifts continuously. The state estimator must simultaneously track torso position, orientation, linear/angular velocity, and every joint angle. For a 28-DOF humanoid (Unitree H1 has 17–19 DOF), the state vector exceeds 50 dimensions.

**MPC internal state** depends on forward simulation through a prediction model. MPC solves for the optimal control sequence over N steps (typically 10–20 steps, each 20–50 ms). This means state estimation must finish before the MPC optimization loop starts, and its latency must stay under the control period (usually < 1 ms).

## Layer 4: Motion Planning and Gait Generation — Deciding How to Move

Motion planning answers "where to go" and translates that into "how to move the joints." This is one of the most complex layers in the pipeline.

**Whole-Body Control (WBC)** distributes task-space objectives (torso movement, end-effector trajectories) to individual joints. Constraints include: ZMP (Zero Moment Point) inside the support polygon, joint position/velocity/torque limits, and foot-ground contact force cones. WBC typically runs at 100–400 Hz using a priority-constrained QP (Quadratic Programming) solver, with complexity scaling exponentially with degrees of freedom.

**Gait generation** revolves around foot trajectory design. Common patterns:

- **Static walking**: At least two feet (or one foot plus a cane) stay on the ground at all times. Foot trajectories use quintic polynomial interpolation; swing-phase duty cycle is roughly 60%.
- **Dynamic walking**: Includes a "flight phase" where both feet leave the ground — Atlas's backflip is the extreme case. Nonlinear lattice optimization plans the gait phase sequence.
- **Running/jumping**: Must simultaneously handle CoM trajectory, angular momentum regulation, and ground reaction force constraints.

**Generative gait planners** are a newer direction. Deep neural networks produce gait phases and footstep placements directly. These work with QP-WBC after training in simulation and transfer to real hardware (Sim-to-Real). Figure 02 builds some of its locomotion on this kind of approach.

## Layer 5: Control Strategy — MPC vs. RL vs. Imitation Learning

This is the decision-making core that turns plans into torque commands. Three major approaches, each with their own trade-offs.

### Model Predictive Control (MPC)

MPC solves a finite-horizon optimal control problem and recomputes it periodically. **Strengths**: strong constraint handling (joint limits, friction cones, ZMP), high interpretability. **Weaknesses**: depends on an accurate dynamic model, sensitive to model errors, computational cost scales quadratically with DOF.

**Convex MPC** was benchmarked by ETH Zurich on the ANYmal quadruped: online solve time < 3 ms (OSQP solver), with a 5–7 step, ~0.5 s horizon. This is also the mainstream approach for humanoids — Atlas's omni-directional jumps and backflips depend on MPC to plan torso trajectories and ground reaction forces in real time, with WBC distributing them to the joints.

**Nonlinear MPC (NMPC)** directly optimizes a nonlinear cost function with kinematic and dynamic constraints. Higher accuracy but heavier computation — solve cycles in the 10–50 ms range, making it more suitable for offline planning than real-time control.

### Reinforcement Learning (RL)

Deep RL outputs control policies by learning from reward functions. Training happens in simulation (Isaac Gym, MuJoCo, etc.). Once trained, neural network inference latency drops below 1 ms. **Strengths**: naturally handles high-dimensional nonlinear systems (26+ DOF), robust to modeling errors, a single training run produces multiple locomotion modes. **Weaknesses**: reward function design is difficult, Sim-to-Real transfer gaps exist, and safety constraints cannot be strictly enforced.

Unitree H1's RL policy trained in Isaac Gym (4096 parallel environments, roughly 4–6 hours on a single RTX 4090 GPU). The policy learns a direct controller — no dynamic model needed. Inference runs on the onboard compute platform. Validation included slopes (up to 20°), random steps, and rubble surfaces. Walking robustness improved significantly over classical methods.

**EagerM5** (Tsinghua University, published 2025, accepted at RSS) proposed an event-triggered model-reference adaptive control framework that marries MPC and RL. The RL policy generates coarse high-level gait macro-commands; MPC handles fine-grained joint torque tracking. This hybrid architecture achieved 3.0 m/s human-like running on the Unitree G1.

### Imitation Learning

Imitation learning starts from human motion capture data and learns pose-to-action mappings. **Strengths**: produces natural, human-like movement — no "bent-arm penguin walk." **Weaknesses**: depends on large annotated motion capture datasets, and generalization to unseen terrain degrades. Recent work uses small demonstrations (20–30 trajectories) combined with RL fine-tuning. Character control in DRL, for example, generates stylized running and jumping gaits in simulation from sparse motion data.

**Physics-based character animation** (DeepMimic, AMP) encodes motion capture data as implicit reward functions, with RL policies generating stylized motions. Figure 02's research team has cited this work extensively.

**Key comparison:**

| Dimension | MPC | RL | Imitation Learning |
|-----------|-----|----|--------------------|
| Model dependency | High (precise dynamics) | Low (simulation-based) | Medium (human data) |
| Constraint guarantees | Strong (QP hard constraints) | Weak (penalty terms, no guarantee) | Weak |
| Generalization to new terrain | Medium | Strong | Weak |
| Motion naturalness | Medium (robotic) | Medium | High (human-like) |
| Real-time inference latency | 1–10 ms | < 1 ms | < 1 ms |
| Deployment difficulty | Medium (tuning required) | High (training setup) | High (data collection) |

## Layer 6: Joint Actuation — The Last Mile

Torque commands from the control strategy are ultimately executed by joint servo drives.

**Motor selection** is a pivotal decision. Frameless torque motors paired with harmonic drives are the mainstream choice. Unitree's in-house joint modules deliver 120 Nm peak torque at roughly 1.2 kg. Atlas uses hydraulic servo valves — higher power density, but bulkier, heavier, and noisier than motor-driven alternatives.

**Torque control** is a generational step up from position control. Simple PID position loops (position + velocity + current) cannot handle dynamic walking in humanoids — rigid position control collapses under external disturbance. Two approaches exist:

- **Direct torque control**: Torque commands go through the current loop, closed-loop with joint torque sensors. Tesla Optimus uses Series Elastic Actuators (SEA), placing an elastic element between motor and load for intrinsic torque measurement and impact absorption.
- **Indirect torque control**: Torque achieved through position commands — impedance control is the classic example. Lower sensor precision requirements, but dynamic performance falls short of direct torque control.

**Communication bus** real-time performance matters more than most engineers expect. EtherCAT (100 μs cycle time) is the industrial standard for high-performance humanoids. CAN-FD is more common in consumer-class products (Unitree H1), with 5 Mbps bandwidth and roughly 1 ms cycle time.

## Full Pipeline Integration: System Latency and Lifecycle

The combined latency across all pipeline layers determines overall response speed. A typical humanoid control latency budget (perception to actuation) runs 10–30 ms. Above 50 ms, a human operator can feel the lag (teleoperation scenarios). Above 100 ms, dynamic balance fails outright.

Every real system faces the same tension: **perception resolution vs. update frequency vs. compute budget**. A higher-resolution depth map (640×480 → 1280×720) quadruples data throughput for richer semantic information, but strains the onboard compute. On resource-constrained platforms, this trade-off is never fully resolved.

The industry trend is unmistakable: **end-to-end learning is compressing traditional pipeline layers**. RT-2 and other Vision-Language-Action (VLA) models try to collapse "perception → planning → control" into a single large model. RT-Trajectory further eases policy learning by incorporating demonstration trajectories. But understanding the full pipeline — from each sensor's raw reading to each joint's delivered torque — remains the foundation that designers and researchers rely on to build systems that actually work.

From Atlas's MPC-driven jumps to Unitree H1's RL-climbed stairs, from Figure 02's imitation-learned grasps to Optimus's SEA elastic joints — the control pipeline is the digital spinal cord that gives a steel skeleton the soul of movement.
