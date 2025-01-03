---
title: Convert Bytes to Human-Readable Format
description: Converts a size in bytes to a human-readable format.
author: axorax
tags: bytes,format
---

```py
def bytes_to_human_readable(num):
    for unit in ['B', 'KB', 'MB', 'GB', 'TB', 'PB']:
        if num < 1024:
            return f"{num:.2f} {unit}"
        num /= 1024

# Usage:
bytes_to_human_readable(123456789) # Returns: '117.74 MB'
```
