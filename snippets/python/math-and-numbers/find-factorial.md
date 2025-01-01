---
title: Find Factorial
description: Calculates the factorial of a number.
author: dostonnabotov
tags: python,math,factorial,utility
---

```py
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# Usage:
print(factorial(5))  # Output: 120
```
