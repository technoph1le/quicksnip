---
title: Least Common Multiple
description: Calculates the least common multiple (lcm) of two numbers
author: Mcbencrafter
tags: math,number,least-common-multiple,lcm,euclidean-algorithm
---

```java
public static int lcm(int number1, int number2) {
    int gcdNumber1 = number1;
    int gcdNumber2 = number2;
    
    while (gcdNumber2 != 0) {
        int remainder = gcdNumber2;
        gcdNumber2 = gcdNumber1 % gcdNumber2;
        gcdNumber1 = remainder;
    }
    
    return (number1 / gcdNumber1) * number2;
}

// Usage:
int a = 16;
int b = 12;
System.out.println(lcm(a, b)); // 48
```