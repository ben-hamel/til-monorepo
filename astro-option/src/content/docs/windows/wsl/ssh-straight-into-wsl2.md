---
title: SSH Straight Into WSL2 Like a Real Linux Server
description: Use WSL mirrored mode networking so your Mac (or any LAN machine) can SSH directly into WSL2 using the Windows host's IP.
---

By default, WSL 2 uses NAT networking, which gives the Linux VM its own isolated IP that isn't reachable from other machines on your network. You can fix this with **mirrored mode**, so it works just like a regular Linux server.

See [Microsoft Docs - WSL Networking: Mirrored Mode](https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking) for how to set it up.
