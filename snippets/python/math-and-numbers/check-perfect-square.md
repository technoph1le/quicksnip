---
title: Check Perfect Square
description: Checks if a number is a perfect square.
author: axorax
tags: python,math,perfect square,check
---

```py
def is_perfect_square(n):
    if n < 0:
        return False
    root = int(n**0.5)
    return root * root == n

# Usage:
print(is_perfect_square(16))  # Output: True
print(is_perfect_square(20))  # Output: False
```
