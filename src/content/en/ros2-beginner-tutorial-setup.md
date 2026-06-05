---
title: "ROS 2 Beginner Tutorial: Setting Up a Robot Development Environment (Ubuntu 22.04 + ROS 2 Humble)"
date: 2026-06-05
author: "SinoBot Editorial"
tags: [ROS2, robotics-development, ubuntu, robot-tutorial, gazebo, robot-simulation]
tier: "hands-on"
cover: "/images/unitree-go2-hero.png"
excerpt: "A step-by-step guide to installing Ubuntu 22.04, configuring ROS 2 Humble, creating your first workspace, writing publisher/subscriber nodes, and running robots in Gazebo simulation."
---

## Quick Verdict

ROS 2 (Robot Operating System 2) is the industry-standard framework for robot development. Whether building a quadruped robot, a robotic arm, or an autonomous vehicle, setting up the ROS 2 development environment is the essential first step.

**Goal of this tutorial:** Go from a bare operating system to a running simulated robot in under 60 minutes. No ROS experience required, but basic Linux command-line familiarity helps.

## Step 1: Install Ubuntu 22.04 LTS

ROS 2 Humble officially supports only Ubuntu 22.04 (Jammy Jellyfish). Skip this step if Ubuntu 22.04 is already running.

**Getting the image:**
Download the 22.04.5 LTS desktop ISO from the Ubuntu website. Use Rufus (Windows) or balenaEtcher (macOS) to create a bootable USB.

**Installation essentials:**
- Allocate at least 50GB for `/` (ROS takes ~5GB, but workspace and simulation software need more)
- Choose English as the system language to avoid path encoding issues
- Update the system immediately after installation:

```bash
sudo apt update && sudo apt upgrade -y
sudo reboot
```

**Verify installation:**

```bash
lsb_release -a
```

The output should show `Description: Ubuntu 22.04.5 LTS` or a higher patch version.

## Step 2: Install ROS 2 Humble

### Configure Software Repositories

The recommended installation method uses Debian packages. Run these commands in sequence:

```bash
# Set locale (required)
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

# Add ROS 2 apt repository
sudo apt install software-properties-common
sudo add-apt-repository universe

# Add ROS 2 GPG key
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.asc] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### Install ROS 2 Humble Desktop

The desktop version (includes Rviz2, visualization tools, and demos) is recommended:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install ros-humble-desktop -y
```

**Note:** The installation package is ~1.5GB. Download time depends on connection speed. If bandwidth is limited, use the base version `ros-humble-ros-base` instead.

### Set Environment Variables

The ROS 2 environment file must be sourced in every terminal session. Add it to `~/.bashrc` for automatic loading:

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Verify Installation

Open one terminal and run the talker demo:

```bash
ros2 run demo_nodes_cpp talker
```

Keep it running, open a second terminal:

```bash
source /opt/ros/humble/setup.bash
ros2 run demo_nodes_py listener
```

**Expected output:** The talker terminal prints `Publishing: 'Hello World: N'` every second. The listener terminal receives and prints each message. If this works, ROS 2 is successfully installed.

## Step 3: Create Your First Workspace

A ROS 2 workspace is the project directory for ROS 2 packages. `colcon` is the recommended build tool.

```bash
# Install colcon (if not installed)
sudo apt install python3-colcon-common-extensions -y

# Create workspace structure
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
```

The first build runs on an empty `src/` directory. Output should show a clean build with no errors. Verify the result:

```bash
ls ~/ros2_ws/build/
```

Now add the workspace overlay to the environment:

```bash
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Step 4: Write Publisher and Subscriber Nodes

Create a C++ publisher-subscriber pair — the fundamental communication pattern in ROS 2.

### Create a ROS 2 Package

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake cpp_pubsub
```

This creates the `cpp_pubsub` folder under `src/`, containing `package.xml`, `CMakeLists.txt`, and the `src/` directory.

### Write the Publisher Node

Create `~/ros2_ws/src/cpp_pubsub/src/publisher_member_function.cpp`:

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

### Write the Subscriber Node

Create `~/ros2_ws/src/cpp_pubsub/src/subscriber_member_function.cpp`:

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

### Configure CMakeLists.txt

Edit `~/ros2_ws/src/cpp_pubsub/CMakeLists.txt` and add these lines after the `find_package` section:

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

### Build and Run

```bash
cd ~/ros2_ws
colcon build --packages-select cpp_pubsub
```

**Expected output:** Build succeeds with no errors. The last line reads `Finished <<< cpp_pubsub`.

Test the nodes:

```bash
# Terminal 1: Start publisher
ros2 run cpp_pubsub publisher

# Terminal 2: Start subscriber
ros2 run cpp_pubsub subscriber
```

**Expected output:** The publisher prints messages twice per second. The subscriber receives and prints them simultaneously. Use `ros2 topic echo /topic` to inspect raw message data.

## Step 5: Run a Robot in Gazebo Simulation

Gazebo Ignition (now Gazebo Fortress) is the default simulator for ROS 2 Humble.

### Install Gazebo

```bash
sudo apt install ros-humble-ros-gz -y
sudo apt install gz-garden -y
```

### Launch an Empty World

```bash
ign gazebo empty.sdf
```

**Expected result:** The Gazebo window opens, displaying an empty scene with a grid floor.

### Spawn and Control a Robot

Bridge ROS 2 with Gazebo:

```bash
# Launch the simulation interface
ros2 launch ros_gz_sim gz_sim.launch.py
```

Now deploy the TurtleBot3 example in simulation:

```bash
# Install TurtleBot3 simulation packages
sudo apt install ros-humble-turtlebot3-gazebo -y
export TURTLEBOT3_MODEL=burger
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
```

**Expected result:** Gazebo loads a simulation world with obstacles. A TurtleBot3 appears in the scene.

### Keyboard Teleoperation

```bash
# New terminal
sudo apt install ros-humble-turtlebot3-teleop -y
ros2 run turtlebot3_teleop teleop_keyboard
```

**Expected result:** Pressing arrow keys on the keyboard moves the TurtleBot3 in the Gazebo simulation.

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| `colcon build` fails "package not found" | Missing dependencies | `rosdep install -i --from-path src --rosdistro humble -y` |
| Publisher and subscriber don't exchange messages | Mismatched environments | Ensure both terminals source the same workspace |
| Gazebo black screen on launch | GPU driver issue | Install `sudo apt install mesa-utils`, check OpenGL support |
| `ros2 run` command not found | Environment not sourced | Verify `~/.bashrc` contains `source /opt/ros/humble/setup.bash` |

## Next Steps

After completing this tutorial, explore these advanced topics:

1. **Custom message interfaces**: Create `.msg` files for custom data structures
2. **ROS 2 launch files**: Use Python launch files to start multiple nodes simultaneously
3. **TF transforms**: Understand the Transform Tree for coordinate system management
4. **SLAM mapping and navigation**: Use Cartographer or Nav2 for autonomous navigation in simulation
5. **Hardware interfaces**: Deploy ROS 2 on real robots like the Unitree Go2
