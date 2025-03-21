---
title: Swap Numbers
description: Swap two numbers without a temporary variable
tags: bit-manipulation, number, swap
author: aelshinawy
---

```c
void swap(int *a, int *b) {
    *a ^= *b;
    *b ^= *a;
    *a ^= *b;
}


// Usage:
int x = 5, y = 10;
swap(&x, &y);
printf("x = %d, y = %d\n", x, y); // x = 10, y = 5
```