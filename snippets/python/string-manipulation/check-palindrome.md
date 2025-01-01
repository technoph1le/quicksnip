---
title: Check Palindrome
description: Checks if a string is a palindrome.
author: dostonnabotov
tags: python,string,palindrome,utility
---

```py
def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

# Usage:
print(is_palindrome('A man a plan a canal Panama'))  # Output: True
```
