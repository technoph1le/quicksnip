---
title: Fibonacci Number
description: Calculates the nth Fibonacci number using recursion.
tags: math, fibonacci, recursion
author: ashukr07
---

```c
// Function to calculate the nth Fibonacci number
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage:
fibonacci(6); // Returns: 8
```