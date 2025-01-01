---
title: Check Anagram
description: Checks if two strings are anagrams of each other.
author: SteliosGee
tags: python,string,anagram,check,utility
---

```py
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

# Usage:
print(is_anagram('listen', 'silent'))  # Output: True
```
