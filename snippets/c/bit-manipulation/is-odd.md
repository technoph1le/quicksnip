---
title: Is Odd
description: Check if a number is odd
tags: bit-manipulation, number, is-odd
author: aelshinawy
---

```c
bool is_odd(int n) {
    return n & 1;
}


// Usage:
is_odd(10); // Returns: false
is_odd(11); // Returns: true
```