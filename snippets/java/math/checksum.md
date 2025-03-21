---
title: Checksum
description: Calculates the checksum of an int
author: Mcbencrafter
tags: math,number,checksum
---

```java
public static int checksum(int number) {
    number = Math.abs(number);
    int sum = 0;

    while (number != 0) {
        sum += number % 10;
        number /= 10;
    }

    return sum;
}

// Usage:
int number = 12345;
System.out.println(checksum(number)); // 15 = 1+2+3+4+5
```