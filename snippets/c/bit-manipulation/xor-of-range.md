---
title: XOR of Range
description: Finds XOR of all numbers from 1 to n using properties of XOR.
tags: bit-manipulation, xor
author: ashukr07
---

```c
int xor_upto_n(int n) {
    if (n % 4 == 0) return n;
    if (n % 4 == 1) return 1;
    if (n % 4 == 2) return n + 1;
    return 0;
}

// Usage:
xor_upto_n(5); // Returns: 1 (1 ^ 2 ^ 3 ^ 4 ^ 5 = 1)
```