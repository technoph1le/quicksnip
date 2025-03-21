---
title: Remove Characters
description: Removes specific characters from a string.
author: axorax
tags: string,remove,characters
---

```py
def remove_chars(s, chars):
    return ''.join(c for c in s if c not in chars)

# Usage:
remove_chars('hello world', 'eo') # Returns: 'hll wrld'
```
