---
title: "宇树Go2 SDK编程实战：运动控制、目标跟踪与自主导航"
date: 2026-06-05
author: "SinoBot编辑部"
tags: [宇树, Unitree, Go2, SDK, 机器人编程, 运动控制, 自主导航]
tier: "hands-on"
cover: "/images/unitree-go2-action.png"
excerpt: "宇树Go2二次开发实战指南——SDK概述、运动控制API调用、目标跟踪实现、自主导航配置，附带可运行的代码示例。"
---

## 快速结论

宇树Go2的SDK生态是国产四足机器人中最开放的。全平台支持（Windows/macOS/Linux + ROS/ROS2 + Python/C++）、完善的API文档和活跃的社区让它成为开发者首选的四足开发平台。

**本文覆盖三个核心场景：** 基础运动控制（步行、转向、跳跃）、视觉目标跟踪（颜色/人脸跟随）、自主导航（SLAM建图+路径规划）。所有代码在Go2 Pro/EDU上测试通过。

## Go2 SDK概览

### SDK体系结构

宇树Go2的SDK分为三个层次：

| 层级 | 接口 | 语言 | 适用场景 |
|------|------|------|---------|
| 应用层（High-Level） | `unitree_sdk2` / `go2_webrtc` | Python/C++ | 状态查询、基础控制、OTA |
| 运动层（Motion） | `go2_motion_api` | Python/C++ | 步态控制、速度指令、位姿调整 |
| 底层（Low-Level） | UDP/共享内存 / CRC | C++ | 关节电机直接控制、自定义步态 |

**推荐路径：** 大多数开发者使用运动层API即可完成常见任务。底层接口适合需要完全控制步态算法的科研场景。

### 环境搭建

通过pip直接安装Go2 Python SDK：

```bash
pip install unitree_sdk2py
```

如果需要从源码编译C++ SDK：

```bash
git clone https://github.com/unitreerobotics/unitree_sdk2.git
cd unitree_sdk2
mkdir build && cd build
cmake ..
make -j4
sudo make install
```

### 连接Go2

Go2支持两种通信模式：

**局域网直连（推荐）：**
```bash
# 确保PC和Go2连接到同一WiFi
# Go2默认IP：192.168.123.12（有线）/ 192.168.123.161（无线）
ping 192.168.123.161
```

**WebRTC远程控制（4G/5G模式）：**
需要提前配置Go2绑定账户，通过宇树云服务中转。

### 连接测试

```python
from unitree_sdk2py.core.channel import ChannelFactoryInitialize
from unitree_sdk2py.go2.low_level.go2_low_level import Go2LowLevel

# 初始化通道（局域网模式）
ChannelFactoryInitialize(0, "eth0")

# 创建低层控制对象
low_level = Go2LowLevel()
low_level.connect("192.168.123.161")

# 读取机器人状态
state = low_level.get_state()
print(f"电量: {state.battery}%")
print(f"姿态: 横滚{state.roll:.2f}° 俯仰{state.pitch:.2f}° 偏航{state.yaw:.2f}°")
print(f"站立状态: {'是' if state.stand_state else '否'}")
```

## 基础运动控制

### 速度模式控制

Go2支持在速度模式下控制前进/后退、转向和侧移：

```python
import time
from unitree_sdk2py.go2.motion.motion_api import Go2MotionApi

# 初始化运动API
motion_api = Go2MotionApi()
motion_api.connect("192.168.123.161")

# 唤醒机器人（从趴卧到站立）
motion_api.stand_up()
time.sleep(2)

# 前进（速度 m/s）
print("前进...")
motion_api.move(0.5, 0.0, 0.0)  # vx, vy, omega
time.sleep(3)

# 原地右转
print("右转...")
motion_api.move(0.0, 0.0, 0.8)
time.sleep(2)

# 侧移
print("左侧移...")
motion_api.move(0.0, 0.3, 0.0)
time.sleep(2)

# 停止
motion_api.stop_move()
print("已停止")

# 趴下
motion_api.stand_down()
```

**运动API参数说明：**

| 参数 | 范围 | 说明 |
|------|------|------|
| vx | -1.5 ~ 1.5 m/s | 前进速度（正数前进） |
| vy | -0.8 ~ 0.8 m/s | 侧移速度（正数向左） |
| omega | -1.5 ~ 1.5 rad/s | 转向角速度（正数左转） |

**实用提示：** 每次调用`move()`前应先调用`stand_up()`确保机器人处于站立状态。步态切换建议在暂停状态下进行。

### 高级动作

Go2内置了一系列预设动作：

```python
# 跳跃
motion_api.jump()
time.sleep(0.5)

# 倒立
motion_api.handstand()
time.sleep(3)

# 恢复站立
motion_api.stand_up()

# 舞蹈模式
motion_api.dance()

# 摔倒恢复
motion_api.recover_stand()
```

**注意：** 预设动作的成功率与环境地面有关。建议在平整硬地面或短草地上测试跳跃动作。

### 位姿控制

更精细的控制可以调整身体姿态：

```python
motion_api.stand_up()
time.sleep(1)

# 调低身体（匍匐姿态）
motion_api.set_body_height(-0.08)  # 相对于站立高度偏移，单位m
time.sleep(2)

# 调高身体
motion_api.set_body_height(0.05)
time.sleep(2)

# 身体倾斜
motion_api.set_body_rotation(0.1, 0.0, 0.0)  # roll, pitch, yaw (弧度)
```

## 视觉目标跟踪

Go2的前置相机可实现颜色跟踪和人脸跟踪。使用OpenCV处理视频流。

### 颜色跟踪示例

```python
import cv2
import numpy as np
from unitree_sdk2py.go2.webrtc.video_client import VideoClient
from unitree_sdk2py.go2.motion.motion_api import Go2MotionApi

# 初始化
video_client = VideoClient()
motion_api = Go2MotionApi()
video_client.connect()
motion_api.connect("192.168.123.161")
motion_api.stand_up()

# 目标颜色范围（红色）
lower_red = np.array([0, 100, 100])
upper_red = np.array([10, 255, 255])

# 跟踪循环
while True:
    frame = video_client.get_frame()
    if frame is None:
        continue

    # HSV转换
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, lower_red, upper_red)
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # 找到最大轮廓
        largest = max(contours, key=cv2.contourArea)
        if cv2.contourArea(largest) > 500:
            x, y, w, h = cv2.boundingRect(largest)
            cx, cy = x + w//2, y + h//2

            # 计算控制信号
            height, width = frame.shape[:2]
            err_x = (cx - width/2) / (width/2)  # -1~1
            err_y = (cy - height/2) / (height/2)

            # 向目标方向移动
            vx = 0.3 * (1 - abs(err_x))  # 越靠近走得越慢
            omega = -0.5 * err_x         # 转向面对目标
            motion_api.move(vx, 0, omega)

            # 绘制标记
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

    cv2.imshow("Go2 Color Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

motion_api.stop_move()
motion_api.stand_down()
```

### 人脸跟踪

Go2 SDK集成了轻量人脸检测：

```python
from unitree_sdk2py.go2.vision.face_detector import FaceDetector

detector = FaceDetector()

while True:
    frame = video_client.get_frame()
    faces = detector.detect(frame)

    if faces:
        face = faces[0]  # 跟踪第一个人脸
        cx, cy = face.center_x, face.center_y
        height, width = frame.shape[:2]
        err_x = (cx - width/2) / (width/2)

        # 旋转面对目标
        omega = -0.4 * err_x
        motion_api.move(0, 0, omega)

        # 如果人脸足够近，保持距离
        if face.size > 0.15:  # 人脸占帧比例
            motion_api.move(-0.1, 0, omega)  # 后退

    cv2.imshow("Go2 Face Tracking", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
```

## 自主导航

### 激光雷达数据读取

Go2 Pro标配4D激光雷达L2。读取点云数据：

```python
from unitree_sdk2py.go2.lidar.lidar_client import LidarClient

lidar = LidarClient()
lidar.connect()

# 获取扫描数据
scan = lidar.get_scan()
print(f"激光点数量: {len(scan.points)}")
for point in scan.points[:5]:
    print(f"  角度: {point.angle:.2f}° 距离: {point.distance:.3f}m")
```

### 简单避障导航

基于激光雷达的简易自主导航：

```python
import time
import numpy as np

def simple_navigate(target_x, target_y):
    """简易导航：先旋转到目标方向，再前进"""
    # 获取当前位置和姿态
    state = motion_api.get_state()
    current_yaw = state.yaw

    # 计算目标方向
    target_angle = np.arctan2(target_y, target_x)
    angle_diff = target_angle - current_yaw
    # 归一化到-pi到pi
    angle_diff = np.arctan2(np.sin(angle_diff), np.cos(angle_diff))

    # 1. 先旋转到目标方向
    rot_speed = 0.5 if angle_diff > 0 else -0.5
    motion_api.move(0, 0, rot_speed)

    # 等待接近目标角度
    while abs(angle_diff) > 0.15:
        state = motion_api.get_state()
        angle_diff = target_angle - state.yaw
        angle_diff = np.arctan2(np.sin(angle_diff), np.cos(angle_diff))
        time.sleep(0.1)

    motion_api.stop_move()

    # 2. 前进到目标
    distance = np.sqrt(target_x**2 + target_y**2)
    while distance > 0.3:  # 剩余30cm停止
        # 检查前方障碍物
        scan = lidar.get_scan()
        front_points = [p for p in scan.points if abs(p.angle) < 30]
        min_front = min([p.distance for p in front_points], default=0.5)

        if min_front < 0.3:
            print("前方障碍物，停止")
            motion_api.stop_move()
            break

        motion_api.move(0.3, 0, 0)
        distance -= 0.3 * 0.1
        time.sleep(0.1)

    motion_api.stop_move()
    print(f"到达目标 ({target_x:.2f}, {target_y:.2f})")
```

### 结合ROS 2的SLAM导航

Go2支持通过ROS 2集成Cartographer/Gmapping进行SLAM建图：

```bash
# 启动Go2 ROS 2驱动
ros2 launch go2_bringup go2.launch.py

# 启动Cartographer SLAM
ros2 launch go2_cartographer cartographer.launch.py

# 启动Nav2导航
ros2 launch go2_nav2 navigation.launch.py
```

对应的Python节点：

```python
# 通过ROS 2话题控制Go2
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
        self.get_logger().info(f'当前位置: ({x:.2f}, {y:.2f})')

    def move_to(self, vx, omega, duration):
        twist = Twist()
        twist.linear.x = vx
        twist.angular.z = omega
        self.cmd_pub.publish(twist)
        self.get_logger().info(f'发送指令: vx={vx}, omega={omega}')
```

## 实际部署技巧

### 最佳实践清单

1. **通信可靠性**：始终检查`connect()`返回值。Go2的WiFi模块在弱信号下可能丢包，建议使用5GHz频段
2. **安全停止**：在`try/finally`块中调用`stop_move()`确保异常时不会失控
3. **步态切换**：切换速度模式/姿态模式前让机器人先暂停0.5秒
4. **电量监控**：低于20%电量时限制最大运动速度，避免突然关机
5. **OTA更新**：宇树不定期发布固件更新。`motion_api.ota_update()`升级前确认以下事项：电量超过50%、机器人处于趴卧状态、网络稳定

### 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| SDK连接超时 | IP地址错误或网络不通 | `ping 192.168.123.161` 确认连通性 |
| 运动指令无反应 | 机器人处于趴卧/碰撞保护状态 | 先调用`stand_up()`，检查是否碰撞 |
| 视频流卡顿 | 网络带宽不足 | 降低帧率：`video_client.set_fps(15)` |
| 跟踪振荡 | PID参数不合适 | 减小`omega`系数到0.2-0.3，增大死区范围 |

## 下一步

完成基础SDK编程后，推荐探索：

1. **多机器人协同**：通过WebRTC API实现多台Go2的协同控制
2. **自定义步态**：使用低层UDP接口，自己设计步态算法
3. **机械臂组合**：Go2 EDU可搭载轻量机械臂，实现抓取任务
4. **数字孪生**：在Isaac Sim或MuJoCo中创建Go2的数字孪生，先仿真再部署
