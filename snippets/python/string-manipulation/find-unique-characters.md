---
title: Find Unique Characters
description: Finds all unique characters in a string.
author: axorax
tags: python,string,unique,characters,utility
---

```py
def find_unique_chars(s):
    return ''.join(sorted(set(s)))

# Usage:
print(find_unique_chars('banana'))  # Output: 'abn'
```
