---
title: Get File Extension
description: Gets the extension of a file.
author: axorax
tags: file,extension
---

```py
import os

def get_file_extension(filepath):
    return os.path.splitext(filepath)[1]

# Usage:
get_file_extension('example.txt') # Returns: '.txt'
```
