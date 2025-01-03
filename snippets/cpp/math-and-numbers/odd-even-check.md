---
title: Even-Odd Check
description: This code demonstrates the fastest way to check if a number is even or odd using bitwise operations. It's more efficient than using the modulor operator (%) since bitwise operations are performed at the CPU level.
tags: cpp, number, even, odd, bitwise
author: Beast177 
---

```cpp

bool isEven(int num) {
    return !(num & 1);
}

// usage -- [odd-even]

#include <iostream>

int main(){

    int num1 = 2;
    int num2 = 3;

    std::cout << num1 << " is " << (isEven(num1) ? "Even" : "Odd") << "\n"; // output - [Even] 
    std::cout << num2 << " is " << (isEven(num2) ? "Even" : "Odd") << "\n"; // output - [Odd]
}

```

