---
title: Find All Substrings
description: Finds all substrings of a given string.
author: axorax
tags: string,substring,find
---

```py
def find_substrings(s):
    substrings = []
    for i in range(len(s)):
        for j in range(i + 1, len(s) + 1):
            substrings.append(s[i:j])
    return substrings

# Usage:
find_substrings('abc') # Returns: ['a', 'ab', 'abc', 'b', 'bc', 'c']
```
