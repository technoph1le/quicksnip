---
title: Is Power Of Two
description: Checks if a number is a power of two
author: Mcbencrafter
tags: math,number,bit,power-of-two
---

```java
public static boolean isPowerOfTwo(int number) {
    return (number > 0) && ((number & (number - 1)) == 0);
}

// Usage:
int number = 16;
System.out.println(isPowerOfTwo(number)); // true (2^4)
```
