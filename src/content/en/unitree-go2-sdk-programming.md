---
title: "Programming Unitree Go2: SDK Hands-On Guide for Motion Control, Target Tracking, and Autonomous Navigation"
date: 2026-06-05
author: "SinoBot Editorial"
tags: [unitree, go2, sdk, robot-programming, motion-control, autonomous-navigation]
tier: "hands-on"
cover: "/images/unitree-go2-action.png"
excerpt: "A practical guide to Unitree Go2 SDK development — SDK overview, motion control API, visual target tracking implementation, and autonomous navigation setup with runnable code examples."
---

## Quick Verdict

Unitree Go2's SDK ecosystem is the most open among Chinese quadruped robots. Full platform support (Windows/macOS/Linux + ROS/ROS2 + Python/C++), comprehensive API documentation, and an active developer community make it the preferred quadruped development platform.

**This guide covers three core scenarios:** basic motion control (walking, turning, jumping), visual target tracking (color and face following), and autonomous navigation (SLAM mapping + path planning). All code has been tested on Go2 Pro and Go2 EDU models.

## Go2 SDK Overview

### SDK Architecture

Unitree Go2's SDK is organized into three layers:

| Layer | Interface | Language | Use Case |
|-------|-----------|----------|----------|
| Application (High-Level) | `unitree_sdk2` / `go2_webrtc` | Python/C++ | Status queries, basic control, OTA |
| Motion (Mid-Level) | `go2_motion_api` | Python/C++ | Gait control, velocity commands, pose adjustment |
| Low-Level | UDP / shared memory / CRC | C++ | Direct joint motor control, custom gait algorithms |

**Recommended approach:** Most developers can accomplish common tasks using the Motion Layer API. The low-level interface is for research scenarios requiring full gait algorithm customization.

### Environment Setup

Install the Go2 Python SDK directly via pip:

```bash
pip install unitree_sdk2py
```

To compile the C++ SDK from source:

```bash
git clone https://github.com/unitreerobotics/unitree_sdk2.git
cd unitree_sdk2
mkdir build && cd build
cmake ..
make -j4
sudo make install
```

### Connecting to Go2

Go2 supports two communication modes:

**Local network (recommended):**
```bash
# Ensure PC and Go2 are on the same WiFi
# Default IPs: 192.168.123.12 (wired) / 192.168.123.161 (wireless)
ping 192.168.123.161
```

**WebRTC remote control (4G/5G mode):**
Pre-configure the Go2 with a bound account. Communication routes through Unitree's cloud relay service.

### Connection Test

```python
from unitree_sdk2py.core.channel import ChannelFactoryInitialize
from unitree_sdk2py.go2.low_level.go2_low_level import Go2LowLevel

# Initialize channel (local network mode)
ChannelFactoryInitialize(0, "eth0")

# Create low-level control object
low_level = Go2LowLevel()
low_level.connect("192.168.123.161")

# Read robot state
state = low_level.get_state()
print(f"Battery: {state.battery}%")
print(f"Attitude: Roll {state.roll:.2f}° Pitch {state.pitch:.2f}° Yaw {state.yaw:.2f}°")
print(f"Standing: {'Yes' if state.stand_state else 'No'}")
```

## Basic Motion Control

### Velocity Mode Control

Go2 supports forward/backward movement, turning, and lateral shifting in velocity mode:

```python
import time
from unitree_sdk2py.go2.motion.motion_api import Go2MotionApi

# Initialize motion API
motion_api = Go2MotionApi()
motion_api.connect("192.168.123.161")

# Wake up the robot (from prone to standing)
motion_api.stand_up()
time.sleep(2)

# Move forward (velocity in m/s)
print("Moving forward...")
motion_api.move(0.5, 0.0, 0.0)  # vx, vy, omega
time.sleep(3)

# Turn right in place
print("Turning right...")
motion_api.move(0.0, 0.0, 0.8)
time.sleep(2)

# Lateral shift left
print("Shifting left...")
motion_api.move(0.0, 0.3, 0.0)
time.sleep(2)

# Stop
motion_api.stop_move()
print("Stopped")

# Lie down
motion_api.stand_down()
```

**Motion API parameter ranges:**

| Parameter | Range | Description |
|-----------|-------|-------------|
| vx | -1.5 ~ 1.5 m/s | Forward speed (positive = forward) |
| vy | -0.8 ~ 0.8 m/s | Lateral speed (positive = left) |
| omega | -1.5 ~ 1.5 rad/s | Angular velocity (positive = left turn) |

**Practical tip:** Always call `stand_up()` before `move()` to ensure the robot is standing. Switch gaits only while the robot is stationary to avoid instability.

### Advanced Actions

Go2 includes several preset actions:

```python
# Jump
motion_api.jump()
time.sleep(0.5)

# Handstand
motion_api.handstand()
time.sleep(3)

# Return to standing
motion_api.stand_up()

# Dance mode
motion_api.dance()

# Fall recovery
motion_api.recover_stand()
```

**Note:** Success rate for preset actions depends on the environment surface. Test jumps on flat, hard ground or short grass.

### Pose Control

Fine-grained body posture adjustment:

```python
motion_api.stand_up()
time.sleep(1)

# Lower the body (crouch)
motion_api.set_body_height(-0.08)  # Offset relative to standing height, in meters
time.sleep(2)

# Raise the body
motion_api.set_body_height(0.05)
time.sleep(2)

# Tilt the body
motion_api.set_body_rotation(0.1, 0.0, 0.0)  # roll, pitch, yaw in radians
```

## Visual Target Tracking

Go2's front camera supports color-based and face tracking. Use OpenCV for video stream processing.

### Color Tracking Example

```python
import cv2
import numpy as np
from unitree_sdk2py.go2.webrtc.video_client import VideoClient
from unitree_sdk2py.go2.motion.motion_api import Go2MotionApi

# Initialize
video_client = VideoClient()
motion_api = Go2MotionApi()
video_client.connect()
motion_api.connect("192.168.123.161")
motion_api.stand_up()

# Target color range (red)
lower_red = np.array([0, 100, 100])
upper_red = np.array([10, 255, 255])

# Tracking loop
while True:
    frame = video_client.get_frame()
    if frame is None:
        continue

    # Convert to HSV
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, lower_red, upper_red)
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # Find the largest contour
        largest = max(contours, key=cv2.contourArea)
        if cv2.contourArea(largest) > 500:
            x, y, w, h = cv2.boundingRect(largest)
            cx, cy = x + w//2, y + h//2

            # Compute control signals
            height, width = frame.shape[:2]
            err_x = (cx - width/2) / (width/2)  # -1 to 1
            err_y = (cy - height/2) / (height/2)

            # Move toward the target
            vx = 0.3 * (1 - abs(err_x))  # Slower when closer
            omega = -0.5 * err_x         # Turn to face the target
            motion_api.move(vx, 0, omega)

            # Draw bounding box
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    cv2.imshow("Go2 Color Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

motion_api.stop_move()
motion_api.stand_down()
```

### Face Tracking

Go2's SDK includes a lightweight face detector:

```python
from unitree_sdk2py.go2.vision.face_detector import FaceDetector

detector = FaceDetector()

while True:
    frame = video_client.get_frame()
    faces = detector.detect(frame)

    if faces:
        face = faces[0]  # Track the first detected face
        cx, cy = face.center_x, face.center_y
        height, width = frame.shape[:2]
        err_x = (cx - width/2) / (width/2)

        # Rotate toward the target
        omega = -0.4 * err_x
        motion_api.move(0, 0, omega)

        # Maintain distance if face is too close
        if face.size > 0.15:  # Face-to-frame ratio
            motion_api.move(-0.1, 0, omega)  # Step back

    cv2.imshow("Go2 Face Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

## Autonomous Navigation

### Reading LiDAR Data

The Go2 Pro comes standard with a 4D LiDAR L2. Read point cloud data:

```python
from unitree_sdk2py.go2.lidar.lidar_client import LidarClient

lidar = LidarClient()
lidar.connect()

# Get scan data
scan = lidar.get_scan()
print(f"Laser points: {len(scan.points)}")
for point in scan.points[:5]:
    print(f"  Angle: {point.angle:.2f}° Distance: {point.distance:.3f}m")
```

### Simple Obstacle Avoidance Navigation

A basic LiDAR-based autonomous navigation routine:

```python
import time
import numpy as np

def simple_navigate(target_x, target_y):
    """Simple navigation: rotate to target direction, then move forward"""
    # Get current position and attitude
    state = motion_api.get_state()
    current_yaw = state.yaw

    # Calculate target direction
    target_angle = np.arctan2(target_y, target_x)
    angle_diff = target_angle - current_yaw
    # Normalize to -pi to pi
    angle_diff = np.arctan2(np.sin(angle_diff), np.cos(angle_diff))

    # Step 1: Rotate toward the target
    rot_speed = 0.5 if angle_diff > 0 else -0.5
    motion_api.move(0, 0, rot_speed)

    while abs(angle_diff) > 0.15:
        state = motion_api.get_state()
        angle_diff = target_angle - state.yaw
        angle_diff = np.arctan2(np.sin(angle_diff), np.cos(angle_diff))
        time.sleep(0.1)

    motion_api.stop_move()

    # Step 2: Move forward to the target
    distance = np.sqrt(target_x**2 + target_y**2)
    while distance > 0.3:
        # Check for obstacles ahead
        scan = lidar.get_scan()
        front_points = [p for p in scan.points if abs(p.angle) < 30]
        min_front = min([p.distance for p in front_points], default=0.5)

        if min_front < 0.3:
            print("Obstacle ahead, stopping")
            motion_api.stop_move()
            break

        motion_api.move(0.3, 0, 0)
        distance -= 0.3 * 0.1
        time.sleep(0.1)

    motion_api.stop_move()
    print(f"Reached target ({target_x:.2f}, {target_y:.2f})")
```

### SLAM Navigation via ROS 2

Go2 supports Cartographer/Gmapping SLAM through ROS 2:

```bash
# Start Go2 ROS 2 driver
ros2 launch go2_bringup go2.launch.py

# Start Cartographer SLAM
ros2 launch go2_cartographer cartographer.launch.py

# Start Nav2 navigation
ros2 launch go2_nav2 navigation.launch.py
```

Corresponding Python node:

```python
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist
from nav_msgs.msg import Odometry

class Go2Navigator(Node):
    def __init__(self):
        super().__init__('go2_navigator')
        self.cmd_pub = self.create_publisher(Twist, '/cmd_vel', 10)
        self.odom_sub = self.create_subscription(
            Odometry, '/odom', self.odom_callback, 10)

    def odom_callback(self, msg):
        x = msg.pose.pose.position.x
        y = msg.pose.pose.position.y
        self.get_logger().info(f'Current position: ({x:.2f}, {y:.2f})')

    def move_to(self, vx, omega, duration):
        twist = Twist()
        twist.linear.x = vx
        twist.angular.z = omega
        self.cmd_pub.publish(twist)
        self.get_logger().info(f'Sending command: vx={vx}, omega={omega}')
```

## Production Deployment Tips

### Best Practices Checklist

1. **Communication reliability**: Always check the `connect()` return value. Go2's WiFi module may drop packets in weak signal areas. Use the 5GHz band when possible.
2. **Safe stopping**: Always call `stop_move()` inside a `try/finally` block to prevent runaway behavior on exceptions.
3. **Gait switching**: Pause for 0.5 seconds before switching between velocity mode and posture mode.
4. **Battery monitoring**: Limit maximum speed below 20% battery to prevent sudden shutdown.
5. **OTA updates**: Before calling `motion_api.ota_update()`, confirm: battery above 50%, robot is lying down, network is stable.

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| SDK connection timeout | Wrong IP or network unreachable | `ping 192.168.123.161` to verify connectivity |
| Motion commands ignored | Robot is prone or collision-protected | Call `stand_up()` first, check collision status |
| Video stream stuttering | Insufficient network bandwidth | Reduce frame rate: `video_client.set_fps(15)` |
| Tracking oscillation | Unsuitable PID parameters | Reduce omega coefficient to 0.2-0.3, increase dead zone |

## Next Steps

After mastering basic SDK programming, explore these advanced topics:

1. **Multi-robot coordination**: Control multiple Go2 units via the WebRTC API for collaborative tasks
2. **Custom gaits**: Design your own gait algorithms using the low-level UDP interface
3. **Arm attachment**: The Go2 EDU supports lightweight robotic arm payloads for grasping tasks
4. **Digital twin**: Create a Go2 digital twin in Isaac Sim or MuJoCo for simulation-first development
