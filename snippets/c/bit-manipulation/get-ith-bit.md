---
title: Get ith bit
description: Get the i-th bit of a number
tags: bit-manipulation, number, get
author: aelshinawy
---

```c
int get_ith_bit(int n, int i) {
    return (n >> i) & 1;
}


// Usage:
get_ith_bit(10, 0); // Returns: 0
get_ith_bit(10, 1); // Returns: 1
get_ith_bit(10, 2); // Returns: 0
get_ith_bit(10, 3); // Returns: 1
```