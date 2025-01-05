---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in Java.
author: Karanjot786
tags: fibonacci, math
---

```java
public class Fibonacci {
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        System.out.print(a + " ");
        if(n > 1) {
            System.out.print(b + " ");
        }

        for(int i = 2; i < n; i++) {
            int c = a + b;
            System.out.print(c + " ");
            a = b;
            b = c;
        }
        System.out.println();
    }

    // Usage:
    public static void main(String[] args) {
        fibonacci(5); // Output: 0 1 1 2 3
    }
}
```