---
title: Check if File Exists
description: Checks if a file exists at the specified path.
author: axorax
tags: python,file,exists,check,utility
---

```py
import os

def file_exists(filepath):
    return os.path.isfile(filepath)

# Usage:
print(file_exists('example.txt'))  # Output: True or False
```
