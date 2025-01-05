---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in Python.
author: Karanjot786
tags: fibonacci, math
---

```py
def fibonacci(n):
    a, b = 0, 1
    print(a, end=" ")
    if n > 1:
        print(b, end=" ")
    for _ in range(2, n):
        c = a + b
        print(c, end=" ")
        a, b = b, c
    print()

# Usage:
fibonacci(5)  # Output: 0 1 1 2 3
```