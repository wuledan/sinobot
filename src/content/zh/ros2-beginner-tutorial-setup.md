---
title: "ROS 2入门实战：从零搭建机器人开发环境（Ubuntu 22.04 + ROS 2 Humble）"
date: 2026-06-05
author: "SinoBot编辑部"
tags: [ROS2, 机器人开发, Ubuntu, 机器人教程, Gazebo, 机器人仿真]
tier: "hands-on"
cover: "/images/unitree-go2-hero.png"
excerpt: "一步步教你安装Ubuntu 22.04、配置ROS 2 Humble、创建第一个工作空间、编写发布者/订阅者节点，并在Gazebo仿真中运行机器人。"
---

## 快速结论

ROS 2（Robot Operating System 2）是机器人开发的事实标准框架。无论你要开发四足机器人、机械臂还是自动驾驶小车，搭建ROS 2开发环境是第一步。

**本文目标：** 在60分钟内完成从裸机到运行仿真机器人的全流程。不需要任何ROS经验，但需要基础的Linux命令行知识。

## 第一步：安装Ubuntu 22.04 LTS

ROS 2 Humble只正式支持Ubuntu 22.04（Jammy Jellyfish）。如果你已经在用Ubuntu 22.04，跳过这一步。

**获取系统镜像：**
从Ubuntu官网下载22.04.5 LTS桌面版ISO。推荐使用Rufus（Windows）或balenaEtcher（macOS）写入U盘。

**安装要点：**
- 分区时给`/`至少50GB（ROS占用约5GB，但工作空间和仿真软件需要更多）
- 语言选英语，避免路径编码问题
- 安装完成后先更新系统：

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

**验证安装：**

```bash
lsb_release -a
```

输出应显示 `Description: Ubuntu 22.04.5 LTS` 或更高的小版本号。

## 第二步：安装ROS 2 Humble

### 设置软件源

官方推荐的安装方式是通过Debian包。依次执行以下命令：

```bash
# 设置区域设置（必须）
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

# 添加ROS 2 apt仓库
sudo apt install software-properties-common
sudo add-apt-repository universe

# 添加ROS 2 GPG密钥
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.asc] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### 安装ROS 2 Humble Desktop

推荐安装桌面版（包含Rviz2、可视化工具和示例）：

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-humble-desktop -y
```

**注意：** 安装包约1.5GB，下载时间取决于网络。慢速网络可改用基础版 `ros-humble-ros-base`。

### 设置环境变量

每次使用ROS 2前需要source环境文件。添加到`~/.bashrc`以自动加载：

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 验证安装

启动一个终端，运行发布者：

```bash
ros2 run demo_nodes_cpp talker
```

保持运行，再开一个终端：

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

**预期输出：** 发布者终端每秒打印 `Publishing: 'Hello World: N'`，订阅者终端每秒收到并打印消息。如果看到这个输出，ROS 2安装成功。

## 第三步：创建第一个工作空间

ROS 2的工作空间（Workspace）是开发ROS 2包的项目目录。推荐使用`colcon`作为构建工具。

```bash
# 安装colcon（如果未安装）
sudo apt install python3-colcon-common-extensions -y

# 创建工作空间
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
```

第一次构建只有`COLCON_IGNORE`目录，输出应为空的构建成功信息。使用如下命令查看：

```bash
ls ~/ros2_ws/build/
```

现在添加工作空间到环境变量：

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 第四步：编写发布者/订阅者节点

创建一个C++发布者-订阅者对，这是ROS 2的基础通信模式。

### 创建ROS 2包

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake cpp_pubsub
```

这会在`src/`下创建`cpp_pubsub`文件夹，包含`package.xml`、`CMakeLists.txt`和`src/`目录。

### 编写发布者节点

创建文件 `~/ros2_ws/src/cpp_pubsub/src/publisher_member_function.cpp`：

```cpp
#include <chrono>
#include <functional>
#include <memory>
#include <string>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

using namespace std::chrono_literals;

class MinimalPublisher : public rclcpp::Node
{
public:
  MinimalPublisher()
  : Node("minimal_publisher"), count_(0)
  {
    publisher_ = this->create_publisher<std_msgs::msg::String>("topic", 10);
    timer_ = this->create_wall_timer(
      500ms, std::bind(&MinimalPublisher::timer_callback, this));
  }

private:
  void timer_callback()
  {
    auto message = std_msgs::msg::String();
    message.data = "Hello, ROS 2! Count: " + std::to_string(count_++);
    RCLCPP_INFO(this->get_logger(), "Publishing: '%s'", message.data.c_str());
    publisher_->publish(message);
  }
  rclcpp::Publisher<std_msgs::msg::String>::SharedPtr publisher_;
  rclcpp::TimerBase::SharedPtr timer_;
  size_t count_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<MinimalPublisher>());
  rclcpp::shutdown();
  return 0;
}
```

### 编写订阅者节点

创建文件 `~/ros2_ws/src/cpp_pubsub/src/subscriber_member_function.cpp`：

```cpp
#include <functional>
#include <memory>

#include "rclcpp/rclcpp.hpp"
#include "std_msgs/msg/string.hpp"

class MinimalSubscriber : public rclcpp::Node
{
public:
  MinimalSubscriber()
  : Node("minimal_subscriber")
  {
    subscription_ = this->create_subscription<std_msgs::msg::String>(
      "topic", 10, std::bind(&MinimalSubscriber::topic_callback, this, std::placeholders::_1));
  }

private:
  void topic_callback(const std_msgs::msg::String & msg) const
  {
    RCLCPP_INFO(this->get_logger(), "I heard: '%s'", msg.data.c_str());
  }
  rclcpp::Subscription<std_msgs::msg::String>::SharedPtr subscription_;
};

int main(int argc, char * argv[])
{
  rclcpp::init(argc, argv);
  rclcpp::spin(std::make_shared<MinimalSubscriber>());
  rclcpp::shutdown();
  return 0;
}
```

### 配置CMakeLists.txt

编辑 `~/ros2_ws/src/cpp_pubsub/CMakeLists.txt`，在`find_package`部分后添加：

```cmake
add_executable(publisher src/publisher_member_function.cpp)
ament_target_dependencies(publisher rclcpp std_msgs)

add_executable(subscriber src/subscriber_member_function.cpp)
ament_target_dependencies(subscriber rclcpp std_msgs)

install(TARGETS
  publisher
  subscriber
  DESTINATION lib/${PROJECT_NAME})
```

### 构建并运行

```bash
cd ~/ros2_ws
colcon build --packages-select cpp_pubsub
```

**预期输出：** 构建成功，无报错。`Finished <<< cpp_pubsub` 出现在最后。

运行测试：

```bash
# 终端1：启动发布者
ros2 run cpp_pubsub publisher

# 终端2：启动订阅者
ros2 run cpp_pubsub subscriber
```

**预期输出：** 发布者每秒打印两次消息，订阅者同步收到并打印。使用 `ros2 topic echo /topic` 可查看原始消息数据。

## 第五步：在Gazebo仿真中运行机器人

Gazebo Ignition（现为Gazebo Fortress）是ROS 2 Humble默认支持的仿真器。

### 安装Gazebo

```bash
sudo apt install ros-humble-ros-gz -y
sudo apt install gz-garden -y
```

### 启动空世界仿真

```bash
# 启动Gazebo，加载空世界
ign gazebo empty.sdf
```

**预期结果：** Gazebo窗口打开，显示一个带网格的空场景。

### 在仿真中插入并控制机器人

使用ROS 2与Gazebo的桥接：

```bash
# 启动机器人描述
ros2 launch ros_gz_sim gz_sim.launch.py

# 在另一个终端，列出可用的机器人模型
ros2 param list
```

使用以下命令控制仿真中的TurtleBot3示例：

```bash
# 安装TurtleBot3仿真包
sudo apt install ros-humble-turtlebot3-gazebo -y
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
```

**预期结果：** Gazebo加载一个带有障碍物的仿真世界，TurtleBot3出现在场景中。

### 键盘控制机器人移动

```bash
# 新终端
sudo apt install ros-humble-turtlebot3-teleop -y
ros2 run turtlebot3_teleop teleop_keyboard
```

**预期结果：** 按键盘上的方向键，Gazebo中的TurtleBot3会相应移动。

## 常见问题排查

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| `colcon build`报错"找不到Package" | 依赖缺失 | `rosdep install -i --from-path src --rosdistro humble -y` |
| 发布者和订阅者收不到消息 | 环境未同步 | 确认两个终端都source了相同的工作空间 |
| Gazebo启动后黑屏 | GPU驱动问题 | 安装 `sudo apt install mesa-utils`，检查OpenGL支持 |
| `ros2 run`找不到命令 | 环境未source | 检查 `~/.bashrc` 中有 `source /opt/ros/humble/setup.bash` |

## 下一步学习路径

完成基础搭建后，推荐以下进阶方向：

1. **自定义消息接口**：学习创建`.msg`文件定义自定义数据结构
2. **ROS 2 Launch文件**：用Python launch文件启动多个节点
3. **TF坐标变换**：理解机器人的坐标树（Transform Tree）
4. **SLAM建图和导航**：使用Cartographer或Nav2在仿真中建图
5. **硬件接口**：将ROS 2部署到实际机器人（如Unitree Go2）
