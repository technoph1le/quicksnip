---
title: Fibonacci
description: Calculates the nth fibonacci number
author: Mcbencrafter
tags: math,number,fibonacci
---

```java
public static int fibonacci(int number) {
    if (number <= 1) 
        return number;
        
    return fibonacci(number - 1) + fibonacci(number - 2);
}

// Usage:
int number = 5;
System.out.println(fibonacci(number)) // 3 (0, 1, 1, 2, 3)
```