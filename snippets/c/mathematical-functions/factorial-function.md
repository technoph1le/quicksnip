---
title: Factorial Function
description: Calculates the factorial of a number.
author: 0xHouss
tags: math,factorial
---

```c
int factorial(int x) {
  int y = 1;

  for (int i = 2; i <= x; i++)
    y *= i;

  return y;
}

// Usage:
factorial(4); // Returns: 24
```
