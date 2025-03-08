---
title: Wayland Config
description: The nob.h builder but with Wayland flags.
author: James-Beans
tags: builder,config,Wayland,Linux
---

```c
// You can make a new nob-h project using one of these commands:
// npx create-nobuild@latest
// yarn create nobuild
// pnpm create nobuild@latest

// This would be the nob.c config file.

// This will only work for Linux because it uses Wayland. And that is Linux only.

#define NOB_IMPLEMENTATION

// The nob.h library has to be in the same folder as nob.c (this file).
#include "nob.h"

#define BUILD_FOLDER "build/"
#define SRC_FOLDER   "src/"
#define FLAGS        "-lwayland-client"

int main(int argc, char **argv)
{
  // This self-rebuild mechanism checks if nob.c was modified
  // If you’ve updated the build script, remove the existing binary to force a rebuild
  NOB_GO_REBUILD_URSELF(argc, argv);

  Nob_Cmd cmd = {0};

  if (!nob_mkdir_if_not_exists(BUILD_FOLDER)) return 1;
  nob_cmd_append(&cmd, "cc", "-Wall", "-Wextra", "-o", BUILD_FOLDER"main", SRC_FOLDER"main.c", FLAGS);
  if (!nob_cmd_run_sync(cmd)) return 1;

  return 0;
}
```
