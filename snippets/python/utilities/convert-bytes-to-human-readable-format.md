---
Title: Convert Bytes to Human-Readable Format
Description: Converts a size in bytes to a human-readable format.
Author: axorax
Tags: python,bytes,format,utility
---

```py
def bytes_to_human_readable(num):
    for unit in ['B', 'KB', 'MB', 'GB', 'TB', 'PB']:
        if num < 1024:
            return f"{num:.2f} {unit}"
        num /= 1024

# Usage:
print(bytes_to_human_readable(123456789))  # Output: '117.74 MB'
```
