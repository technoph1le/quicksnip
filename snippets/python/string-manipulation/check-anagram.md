---
title: Check Anagram
description: Checks if two strings are anagrams of each other.
author: SteliosGee
tags: string,anagram,check
---

```py
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

# Usage:
is_anagram('listen', 'silent') # Returns: True
```
