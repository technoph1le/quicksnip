---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in C#.
author: Karanjot786
tags: fibonacci, math
---

```cs
using System;

public class FibonacciSeries {
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        Console.Write(a + " ");
        if(n > 1) {
            Console.Write(b + " ");
        }

        for(int i = 2; i < n; i++) {
            int c = a + b;
            Console.Write(c + " ");
            a = b;
            b = c;
        }
        Console.WriteLine();
    }

    // Usage:
    public static void Main() {
        fibonacci(5); // Output: 0 1 1 2 3
    }
}
```