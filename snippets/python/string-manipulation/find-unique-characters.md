---
title: Find Unique Characters
description: Finds all unique characters in a string.
author: axorax
tags: string,unique,characters
---

```py
def find_unique_chars(s):
    return ''.join(sorted(set(s)))

# Usage:
find_unique_chars('banana') # Results: 'abn'
```
