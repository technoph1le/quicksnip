---
Title: Check Palindrome
Description: Checks if a string is a palindrome.
Author: dostonnabotov
Tags: python,string,palindrome,utility
---

```py
def is_palindrome(s):
    s = s.lower().replace(' ', '')
    return s == s[::-1]

# Usage:
print(is_palindrome('A man a plan a canal Panama'))  # Output: True
```
