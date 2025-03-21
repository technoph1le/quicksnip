---
title: Set ith bit
description: Set the i-th bit of a number and returns the resulting number
tags: bit-manipulation, number, set
author: aelshinawy
---

```c
int set_ith_bit(int n, int i) {
    return n | (1 << i);
}


// Usage:
set_ith_bit(10, 0); // Returns: 11
set_ith_bit(10, 2); // Returns: 14
set_ith_bit(1, 8);  // Returns: 257
set_ith_bit(1, 3);  // Returns: 9
```