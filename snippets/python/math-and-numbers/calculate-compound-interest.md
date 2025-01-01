---
title: Calculate Compound Interest
description: Calculates compound interest for a given principal amount, rate, and time period.
author: axorax
tags: python,math,compound interest,finance
---

```py
def compound_interest(principal, rate, time, n=1):
    return principal * (1 + rate / n) ** (n * time)

# Usage:
print(compound_interest(1000, 0.05, 5))   # Output: 1276.2815625000003
print(compound_interest(1000, 0.05, 5, 12)) # Output: 1283.68
```
