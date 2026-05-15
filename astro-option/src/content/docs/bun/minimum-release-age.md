---
title: Filter Packages by Release Age with Bun
description: Use --minimum-release-age to skip recently published package versions and protect against supply chain attacks.
---

The `--minimum-release-age` flag tells `bun install` to ignore package versions published more recently than a given threshold (in seconds). Useful for avoiding freshly-pushed malicious or broken releases.

```bash
bun add @types/bun --minimum-release-age 259200
```

The example above only installs versions published at least 3 days (259,200 seconds) prior.

You can make this persistent in `bunfig.toml`:

```toml
[install]
minimumReleaseAge = 259200
minimumReleaseAgeExcludes = ["@types/node", "typescript"]
```

`minimumReleaseAgeExcludes` lets you bypass the age gate for packages you already trust.

***Source:*** [***Bun Docs - bun install: Minimum Release Age***](https://bun.com/docs/pm/cli/install#minimum-release-age)
