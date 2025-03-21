---
title: Count Set Bits
description: Counts the number of set bits in an int
tags: bit-manipulation, count
author: aelshinawy
---

```c
int count_set_bits(int n) {
    int count = 0;
    while (n) {
        n &= (n - 1);
        count++;
    }
    return count;
}


// Usage:
count_set_bits(5);   // Returns: 2
count_set_bits(255); // Returns: 8
count_set_bits(8);   // Returns: 1
```