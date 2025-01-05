---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in C++.
author: Karanjot786
tags: fibonacci, math
---

```cpp
#include <iostream>

void fibonacci(int n) {
    int a = 0, b = 1;
    std::cout << a << " ";
    if(n > 1) {
        std::cout << b << " ";
    }
    for(int i = 2; i < n; i++) {
        int c = a + b;
        std::cout << c << " ";
        a = b;
        b = c;
    }
    std::cout << std::endl;
}

// Usage:
int main() {
    fibonacci(5); // Output: 0 1 1 2 3
    return 0;
}
```