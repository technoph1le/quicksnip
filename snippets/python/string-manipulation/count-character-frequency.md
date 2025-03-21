---
title: Count Character Frequency
description: Counts the frequency of each character in a string.
author: axorax
tags: string,character-frequency
---

```py
from collections import Counter

def char_frequency(s):
    return dict(Counter(s))

# Usage:
char_frequency('hello') # Returns: {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```
