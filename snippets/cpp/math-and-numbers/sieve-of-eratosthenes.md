---
title: Sieve of Eratosthenes
description: Generates all prime numbers up to a given maximum value using an efficient algorithm using bitset.
author: muriloguizelin
tags: number-theory, prime, sieve
---

```cpp
#include <bitset>
#include <iostream>

constexpr int MAXN = 1e6 + 1;

consteval auto computeSieve() {
    std::bitset<MAXN> isPrime;
    isPrime.set();
    isPrime[0] = isPrime[1] = false;
    for (int i = 2; i * i < MAXN; ++i) {
        if (isPrime[i]) {
            for (int j = i * i; j < MAXN; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime;
}

// Usage:
computeSieve();
if (isPrime[29]) std::cout << "29 is a prime number!" << std::endl;
```
