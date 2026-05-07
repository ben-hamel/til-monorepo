---
title: Fix Clear Command Not Found
description: A guide in my new Starlight docs site.
---

Fedora 42 running in WSL is missing the `clear` command by default. Install the `ncurses` package to restore it:

```bash
sudo dnf install ncurses
```

***Source:*** [***Fedora SubReddit***](https://www.reddit.com/r/Fedora/comments/1lopfsk/fedoralinux42_official_distro_for_wsl_is_missing/)