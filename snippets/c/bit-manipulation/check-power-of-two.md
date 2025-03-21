---
title: Check Power of Two
description: Checks if a given number is a power of two using bitwise operations.
tags: bit-manipulation, power-of-two
author: ashukr07
---

```c
#include <stdbool.h> // Include the standard boolean library

bool is_power_of_two(int n) {
    return n > 0 && (n & (n - 1)) == 0; // Bitwise check for power of two
}

// Usage:
is_power_of_two(16); // Returns: true
is_power_of_two(18); // Returns: false
```