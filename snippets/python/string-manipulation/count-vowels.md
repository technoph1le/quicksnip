---
title: Count Vowels
description: Counts the number of vowels in a string.
author: SteliosGee
tags: string,vowels,count
---

```py
def count_vowels(s):
    vowels = 'aeiou'
    return len([char for char in s.lower() if char in vowels])

# Usage:
count_vowels('hello') # Returns: 2
```
