---
title: Factorial
description: Computes the factorial of a given number
author: Mcbencrafter
tags: math,number,factorial
---

```java
import java.math.BigInteger;

public static BigInteger factorial(int number) {
    BigInteger result = BigInteger.ONE;

    for (int currentNumber = 1; currentNumber <= number; currentNumber++) {
        result = result.multiply(BigInteger.valueOf(currentNumber));
    }

    return result;
}

// Usage:
int number = 6;
System.out.println(factorial(number)); // 720 = 6*5*4*3*2
```
