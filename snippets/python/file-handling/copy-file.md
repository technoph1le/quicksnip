---
title: Copy File
description: Copies a file from source to destination.
author: axorax
tags: python,file,copy,utility
---

```py
import shutil

def copy_file(src, dest):
    shutil.copy(src, dest)

# Usage:
copy_file('example.txt', 'copy_of_example.txt')
```
