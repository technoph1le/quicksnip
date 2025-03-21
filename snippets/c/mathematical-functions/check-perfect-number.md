---
title: Check Perfect Number
description: Checks if a number is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).
tags: math, perfect-number
author: ashukr07
---

```c
#include <stdbool.h>

// Function to check if a number is a perfect number
bool is_perfect(int n) {
    if (n <= 1) return false;

    int sum = 1; // 1 is a divisor for all n > 1
    for (int i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }
    return sum == n;
}

// Usage
is_perfect(28); // Returns: true
is_perfect(12); // Returns: false
```