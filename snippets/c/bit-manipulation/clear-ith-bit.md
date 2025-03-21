---
title: Clear ith bit
description: Clear the ith bit of a number and returns the resulting number
tags: bit-manipulation, number, clear
author: aelshinawy
---

```c
int clear_ith_bit(int n, int i) {
    return n & ~(1 << i);
}


// Usage:
clear_ith_bit(10, 1); // Returns: 8
clear_ith_bit(10, 3); // Returns: 2
```