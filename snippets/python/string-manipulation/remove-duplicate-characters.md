---
title: Remove Duplicate Characters
description: Removes duplicate characters from a string while maintaining the order.
author: axorax
tags: string,duplicates,remove
---

```py
def remove_duplicate_chars(s):
    seen = set()
    return ''.join(char for char in s if not (char in seen or seen.add(char)))

# Usage:
remove_duplicate_chars('programming') # Returns: 'progamin'
```
