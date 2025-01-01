---
title: Find Longest Word
description: Finds the longest word in a string.
author: axorax
tags: python,string,longest-word,utility
---

```py
def find_longest_word(s):
    words = s.split()
    return max(words, key=len) if words else ''

# Usage:
print(find_longest_word('The quick brown fox'))  # Output: 'quick'
```
