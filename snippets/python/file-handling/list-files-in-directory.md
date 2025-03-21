---
title: List Files in Directory
description: Lists all files in a specified directory.
author: axorax
tags: file,list,directory
---

```py
import os

def list_files(directory):
    return [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]

# Usage:
list_files('/path/to/directory') # Returns: List of file in the directory
```
