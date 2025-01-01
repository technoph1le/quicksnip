---
title: Find LCM (Least Common Multiple)
description: Calculates the least common multiple (LCM) of two numbers.
author: axorax
tags: python,math,lcm,gcd,utility
---

```py
def lcm(a, b):
    return abs(a * b) // gcd(a, b)

# Usage:
print(lcm(12, 15))  # Output: 60
print(lcm(7, 5))    # Output: 35
```
