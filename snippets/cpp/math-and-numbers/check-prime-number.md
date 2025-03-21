---
title: Check Prime Number
description: Check if an integer is a prime number
tags: number, prime
author: MihneaMoso
---

```cpp
bool is_prime(int n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

// Usage:
is_prime(29); // Returns: true
```
