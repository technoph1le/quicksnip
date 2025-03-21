---
title: Toggle ith bit
description: Toggle the i-th bit of a number and returns the resulting number
tags: bit-manipulation, number, toggle
author: aelshinawy
---

```c
int toggle_ith_bit(int n, int i) {
    return n ^ (1 << i);
}


// Usage:
toggle_ith_bit(10, 0); // Returns: 11
toggle_ith_bit(10, 1); // Returns: 8
toggle_ith_bit(8, 1);  // Returns: 10
```