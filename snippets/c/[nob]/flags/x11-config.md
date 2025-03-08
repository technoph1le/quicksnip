---
title: X11 Config
description: The nob.h builder but with X11 flags.
author: James-Beans
tags: builder,config,X11,Linux
---

```c
// You can make a new nob-h project using one of these commands:
// npm create nobuild@latest
// yarn create nobuild@latest
// pnpm create nobuild@latest

// This would be the nob.c config file.

// This will only work for Linux because it uses X11. And that is Linux only.

#define NOB_IMPLEMENTATION

// The nob.h library has to be in the same folder as nob.c (this file).
#include "nob.h"

#define BUILD_FOLDER "build/"
#define SRC_FOLDER   "src/"
#define FLAGS        "-lX11"

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
