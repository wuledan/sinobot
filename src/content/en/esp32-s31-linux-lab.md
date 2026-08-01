---
title: "Hands-On Lab: Linux 6.12 on ESP32-S31 — A Full MMU Kernel Inside a Microcontroller (Port Architecture & Flashing Guide)"
date: 2026-08-02
author: "SinoBot Editorial"
tags: [hands-on-lab, esp32-s31, linux, mmu, sv32, risc-v, xip, opensbi, buildroot, microcontroller, porting, embedded]
tier: "hands-on"
cover: "/images/esp32-s31-linux-bootlog.png"
excerpt: "An independent developer ported a full Linux 6.12 kernel to the ESP32-S31 microcontroller: Sv32 virtual memory, Supervisor privilege mode, XIP execute-in-place, and a Buildroot userspace that boots straight into a BusyBox shell. The project has 98 stars on GitHub and 89 points on Hacker News. This teardown walks through the dual-MMU architecture, the OpenSBI Flash XIP layout, the dual-core split (Core 0 runs FreeRTOS / Core 1 runs Linux), and the one-command make build plus esptool flashing flow — the complete engineering decisions behind an MCU-class Linux port."
---

# Hands-On Lab: Linux 6.12 on ESP32-S31 — A Full MMU Kernel Inside a Microcontroller

> **Bottom line up front**: If a chip has an MMU, Linux has a fighting chance — the ESP32-S31 proves it with a RISC-V microcontroller: Linux 6.12 runs on Core 1 with Sv32 virtual memory and XIP execute-in-place, while Core 0 keeps running an ESP-IDF/FreeRTOS app, booting into a BusyBox shell in 1.25 seconds. The price: most peripheral drivers are unadapted, and the project is explicitly "experimental hardware bring-up, definitely not for production."

---

## 1. Why "Linux on a microcontroller" is worth taking seriously

**In one line**: _Conventional wisdom says "Linux needs an application processor" (Raspberry Pi, RK3588, i.MX); the ESP32-S31 is an MMU-equipped RISC-V MCU, and this port proves there is no physical barrier between MCUs and Linux — only an engineering tradeoff of "is it worth it."_

For robotics developers, the value lies in cost structure: application processors cost and consume several to dozens of times more than ESP32-class parts, yet the Linux ecosystem's mature network stack (TCP/IP, TLS), filesystem, process model, and vast software catalog (BlueZ, Dropbear, tcpdump) are hard to replace on bare-metal RTOS. **An MMU-equipped RISC-V MCU sits exactly in the middle ground between "RTOS too bare" and "application processor too expensive."**

Project quick facts:
- **Linux 6.12.0**, riscv32-unknown-linux-musl toolchain (GCC 16.1.0 / Binutils 2.46)
- **98 stars on GitHub**, 89 points on Hacker News
- Hardware: ESP32-S31-WROOM-3 module (16MB Flash), Core Board/Korvo dev board
- Boot time: 1.25s from initrd release to executing `/init`

---

## 2. Hardware foundation: why the S31 can run Linux

The ESP32-S31 stands out with a **dual-MMU** design:

| MMU | Purpose |
|---|---|
| Espressif proprietary MMU | Maps Flash/PSRAM into the address space (the foundation for XIP) |
| **Sv32 MMU** | Standard RISC-V virtual memory; SATP CSR is writable — this is what Linux runs on |

The CPU architecture is `RV32IMAFBCNSUX`: RV32 base + M/A/F/B/C extensions + N/S/U privilege architecture + X (Espressif proprietary extensions, including xesploop and xespv 2p2). **Notably**, the S31 does not declare xespdsp, Zcb, Zcmp, or Zcmt — those are intentionally disabled.

- Dual HP cores (Core 0 / Core 1) plus a low-power LP CPU
- Linux uses the **soft-float ilp32 ABI** (the F extension can be used in userspace while staying syscall/libc-ABI compatible with ilp32)
- N/S/U privilege levels are implemented by S31-specific OpenSBI and Linux privileged/trap paths, **not appended to GCC's -march**

> 📌 Key insight: The real gatekeeper for "running Linux" isn't CPU performance — it's the trio of **virtual memory (MMU) + privilege modes (S/U) + interrupt architecture**. The S31 satisfies the first two with Sv32; the CLIC/CLINT interrupt path is bridged by OpenSBI.

---

## 3. Port architecture: dual-core split + OpenSBI XIP layout

This is the most elegant part of the project — **one chip running two systems at once**:

```
┌─────────────────────────────────────────────────┐
│  ESP32-S31                                       │
│  ┌──────────────┐    ┌────────────────────────┐ │
│  │ Core 0       │    │ Core 1                 │ │
│  │ ESP-IDF      │    │ OpenSBI → Linux 6.12   │ │
│  │ factory app  │    │ (Sv32, XIP, S-mode)    │ │
│  │ (FreeRTOS)   │    │ Buildroot userspace    │ │
│  └──────────────┘    └────────────────────────┘ │
│  Single-core boot; loads firmware, maps partitions │
└─────────────────────────────────────────────────┘
```

**Boot chain**: ESP-ROM → ESP-IDF 2nd-stage bootloader → factory app (hello_world, Core 0 single-core) → OpenSBI (Core 1) → Linux 6.12 → `/init` → BusyBox shell

**OpenSBI Flash XIP layout** (the address contract — the core engineering decision):
- OpenSBI text/rodata **stays in Flash and executes through the Flash MMU window** (FW_TEXT_START=0x40030000)
- OpenSBI's writable data/BSS/scratch/stack/heap lives in the **top 1MB of the cached PSRAM alias** (FW_RW_START=0x50F00000..0x51000000)
- **Linux only gets the lower 15MB of the cached alias** (0x50000000..0x50F00000, DT memory node)
- OpenSBI partition fixed at 512KB
- The factory app uses `CONFIG_SPIRAM_USE_MEMMAP` and explicitly disables USE_CAPS_ALLOC/USE_MALLOC

> 📌 Why this design: XIP means kernel code never has to be staged into RAM first — with only 16MB Flash and limited PSRAM, this is what turns "it can run" into "it fits." Squeezing OpenSBI's RW data into the top 1MB frees contiguous memory for Linux.

**Actual boot log** (measured):
```
[0.000000] Linux version 6.12.0-gb4777fc146b9-dirty (riscv32-unknown-linux-musl-gcc)
[0.000000] Kernel command line: earlycon=esp32s3uart,mmio32,0x2038a000 console=ttyS0,115200 rdinit=/init
[0.057390] Memory: 8744K/16384K available (1870K kernel code ...)
[1.254583] Run /init as init process
~ #   ← BusyBox shell, login successful
```

---

## 4. Build & flash: one-command make

The project uses a unified Makefile managing **fully out-of-tree builds**, with all artifacts in `build/`:

```bash
# One-shot build: download+verify prebuilt toolchain → opensbi → linux → rootfs
make all

# Toolchain (prebuilt, SHA256-verified)
make toolchain    # riscv32-esp-linux-musl-gcc (GCC 15.2 / binutils 2.45 / musl)

# Component builds
make opensbi      # OpenSBI + dynamically compiled DTB → build/fw_payload.bin
make linux        # xipImage + esp32s31_generic.dtb (out-of-tree)
make rootfs       # Buildroot: BusyBox/BlueZ/Dropbear/iproute2/tcpdump/memtester/CoreMark → rootfs.sqfs

# Flash (esptool parses the partition table dynamically)
pip install esptool
esptool -p /dev/ttyUSB0 -b 2000000 erase-flash
esptool -p /dev/ttyUSB0 -b 2000000 write-flash \
    --flash-mode dio --flash-freq 80m --flash-size 16MB \
    0x2000 bootloader.bin \
    0x8000 partition-table.bin \
    0x17000 ota_data_initial.bin \
    0x20000 hello_world.bin \
    0x220000 fw_payload.bin \
    0x2A0000 xipImage \
    0xA20000 rootfs.sqfs
```

**Partition table** (16MB Flash, QIO 80MHz): nvs → otadata → phy_init → factory (2MB) → opensbi (512KB) → linux (7.5MB) → rootfs (~6MB)

**Userspace highlights**: BusyBox (HTTPS wget with a size-optimized internal TLS client) + BlueZ Bluetooth tools + Dropbear SSH + iproute2 + tcpdump + memtester + CoreMark — a surprisingly complete embedded Linux distribution.

---

## 5. Porting status & the "reality check" list

| Module | Status |
|---|---|
| Buildroot rootfs / reboot / poweroff / UART0 console | 🟢 Stable |
| Wireless (ESP-Hosted) | 🟡 Untested |
| AXI/AHB GDMA, Cache, TRNG, eFuse, Watchdog, PWM, CLIC/CLINT interrupt driver | 🟡 Untested |
| Timers, clock tree, security accelerators | 🟠 WIP |
| USB | 🟠 WIP |
| LP subsystem & IPC, PMP/APM | 🔴 Not implemented |
| GPIO, pinctrl/GPIO matrix, SDMMC, GMAC Ethernet | 🟡 Untested |
| I2C | 🔴 Not implemented |
| Dual-hart SMP | ⚫ Not planned (Core 1 is taken by FreeRTOS) |

> 🚧 **Honest assessment**: This is a research bring-up project, not a production-ready solution. The only currently usable peripheral is the UART console; Wi-Fi/Bluetooth depend on untested ESP-Hosted; GPIO/I2C aren't wired up yet — "it boots" and "it's usable" are separated by a mountain of driver work. The author's own warning: "Definitely not something you want for production."

---

## 6. What robotics developers should take away

**Bottom line**: Don't plan a production robot controller around the ESP32-S31 anytime soon, but this route points to three trends:

1. **MMU is moving down-stack**: MMU-equipped (Sv32) RISC-V MCUs will multiply, and the Linux/RTOS boundary will shift from "chip type" to "application need." Need a mature network stack, filesystem, and multi-process isolation? Linux. Need hard real-time and low power? RTOS. The same chip can do both.

2. **XIP is the key that unlocks Linux on MCUs**: code executes directly from external flash, no RAM staging, and 16MB of flash fits kernel + rootfs. That matters for cost-sensitive edge nodes — sensor gateways, joint-controller upstreams.

3. **Dual-core heterogeneous (FreeRTOS + Linux) is a practical architecture**: Core 0 handles hard real-time (motor control, encoder reads), Core 1 runs Linux (communication, OTA, logging, AI inference scheduling) — the classic robot-controller division of labor. The S31 has already paved this path with bootloader + OpenSBI; next-generation chips just need to finish the peripheral drivers.

> Practical advice for DIY hackers: if you want a low-cost taste of "Linux on a microcontroller," this is a superb learning project — `make all` builds the complete toolchain + kernel + rootfs in one command, one USB cable and esptool to flash, and the BusyBox shell 1.25 seconds later is a satisfaction no emulator can match.

🔗 [GitHub: GrieferPig/esp32-s31-linux](https://github.com/GrieferPig/esp32-s31-linux) | [HN discussion](https://news.ycombinator.com/item?id=49117186)

---

*Hands-On Lab by SinoBot Editorial | Dual polish pending (Gemini + ChatGPT)*
