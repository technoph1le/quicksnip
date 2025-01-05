---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in C.
author: Karanjot786
tags: fibonacci, math
---

```c
#include <stdio.h>

void fibonacci(int n) {
    int a = 0, b = 1, c, i;
    printf("%d ", a);
    if(n > 1) {
        printf("%d ", b);
    }
    for(i = 2; i < n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    printf("\n");
}

// Usage:
int main() {
    fibonacci(5); // Output: 0 1 1 2 3
    return 0;
}
```