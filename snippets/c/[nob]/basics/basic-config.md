---
title: Basic Config
description: The basic builder for C projects using the nob.h library (https://github.com/tsoding/nob.h).
author: James-Beans
tags: builder,basic,config
---

```c
// You can make a new nob-h project using one of these commands:
// npm create nobuild@latest
// yarn create nobuild@latest
// pnpm create nobuild@latest

// This would be the nob.c config file.

#define NOB_IMPLEMENTATION

// The nob.h library has to be in the same folder as nob.c (this file).
#include "nob.h"

#define BUILD_FOLDER "build/"
#define SRC_FOLDER   "src/"

int main(int argc, char **argv)
{
  // This self-rebuild mechanism checks if nob.c was modified
  // If you’ve updated the build script, remove the existing binary to force a rebuild
  NOB_GO_REBUILD_URSELF(argc, argv);

  Nob_Cmd cmd = {0};

  if (!nob_mkdir_if_not_exists(BUILD_FOLDER)) return 1;

#ifdef _WIN32
  // On Windows, use clang.exe with Unix flags because of mingw64 providing clang
  nob_cmd_append(&cmd, "clang", "-Wall", "-Wextra", "-o", BUILD_FOLDER "main", SRC_FOLDER "main.c");
#else
  // On non-Windows platforms, use cc with the typical Unix flags
  nob_cmd_append(&cmd, "cc", "-Wall", "-Wextra", "-o", BUILD_FOLDER "main", SRC_FOLDER "main.c");
#endif

  if (!nob_cmd_run_sync(cmd)) return 1;

  return 0;
}
```
