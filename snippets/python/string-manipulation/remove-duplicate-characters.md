---
title: Remove Duplicate Characters
description: Removes duplicate characters from a string while maintaining the order.
author: axorax
tags: python,string,duplicates,remove,utility
---

```py
def remove_duplicate_chars(s):
    seen = set()
    return ''.join(char for char in s if not (char in seen or seen.add(char)))

# Usage:
print(remove_duplicate_chars('programming'))  # Output: 'progamin'
```
