---
title: Sum of Digits
description: Calculates the sum of the digits of an integer.
tags: math, digits
author: ashukr07
---

```c
// Function to calculate the sum of the digits of an integer
int sum_of_digits(int n) {
    int sum = 0;
    while (n != 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

// Usage:
sum_of_digits(123); // Returns: 6
```