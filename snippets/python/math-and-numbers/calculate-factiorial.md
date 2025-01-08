---
title: Calculate Factiorial of a number
description: Calculates factorial of a given number using recursive function
author: SamratBarai
tags: python,math,factorial,recursive-function
---

```py
def factorial(n):
    if n == 0 or n == 1: return 1
    else: return n * factorial(n-1)

# Usage:
print(factorial(5)) # Returns 24
print(factorial(10)) # Returns 3628800
```
