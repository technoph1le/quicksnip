---
title: Check Palindrome
description: Checks if a string is a palindrome.
author: dostonnabotov
tags: string,palindrome
---

```py
def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

# Usage:
is_palindrome('A man a plan a canal Panama') # Returns: True
```
