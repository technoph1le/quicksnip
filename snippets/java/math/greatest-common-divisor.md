---
title: Greatest Common Divisor
description: Calculates the greatest common divisor (gcd) of two numbers
author: Mcbencrafter
tags: math,number,greatest-common-devisor,gcd,euclidean-algorithm
---

```java
public static int gcd(int number1, int number2) {
    while (number2 != 0) {
        int remainder = number2;
        number2 = number1 % number2;
        number1 = remainder;
    }

    return number1;
}

// Usage:
int a = 16;
int b = 12;
System.out.println(gcd(a, b)); // 4
```