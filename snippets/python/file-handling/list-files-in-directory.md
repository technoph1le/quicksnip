---
title: List Files in Directory
description: Lists all files in a specified directory.
author: axorax
tags: python,file,list,directory,utility
---

```py
import os

def list_files(directory):
    return [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Usage:
files = list_files('/path/to/directory')
print(files)
```
