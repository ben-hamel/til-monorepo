---
title: Organize Dotfiles Per-App with GNU Stow
description: Use a per-app folder structure with GNU Stow to selectively install only the configs you need on a given machine.
---

Most dotfiles tutorials use a flat structure where the repo mirrors `$HOME` directly. There's another approach — organizing configs by app — that makes it easy to selectively install only what you need on a given machine.

## Flat structure (common)

```text
dotfiles/
├── .zshrc
└── .config/
    ├── ghostty/
    └── zed/
```

Running `stow .` symlinks everything at once, but you can't easily install just one app's config.

## Per-app structure (stow packages)

```text
dotfiles/
├── zsh/
│   └── .zshrc
├── ghostty/
│   └── .config/
│       └── ghostty/
│           └── config
└── zed/
    └── .config/
        └── zed/
            └── settings.json
```

Each app gets its own top-level folder that mirrors `$HOME`. Stow creates symlinks in the parent directory matching the internal structure.

## Usage

Symlink everything:

```bash
stow */
```

Or install just one app — useful when setting up a server that doesn't need a GUI config:

```bash
stow ghostty
```

**Source:** [Dotfiles + Claude Code = my tiny config workshop](https://www.hsablonniere.com/dotfiles-claude-code-my-tiny-config-workshop--95d5fr/#hello-stow-nice-to-meet-you)
