---
title: Bit Counting
description: Counts the set bits in the binary representation of an integer
author: Mcbencrafter
tags: math,number,bits,bit-counting
---

```java
public static int countBits(int number) {
    int bits = 0;
        
    while (number > 0) {
        bits += number & 1;
        number >>= 1;
    }

    return bits;
}

// Usage:
int number = 5;
System.out.println(countBits(5)); // 2 (101)
```