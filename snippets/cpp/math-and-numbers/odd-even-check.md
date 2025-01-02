---
title: cpp, number, bitwise, even, odd
description : This code demonstrates the fastest way to check if a number is even or odd using bitwise operations. It's more efficient than using the modulor operator (%) since bitwise operations are performed at the CPU level.
tags : cpp, number, even, odd, bitwise
author : Beast177 
---

```cpp

bool isEven(int num) {
    return !(num & 1);
}

```

