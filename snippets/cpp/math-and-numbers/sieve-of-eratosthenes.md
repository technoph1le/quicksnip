---
title: Sieve of Eratosthenes
description: Generates all prime numbers up to a given maximum value using an efficient algorithm.
author: muriloguizelin
tags: number-theory, prime, sieve
---
```cpp

#include <vector>

const int MAXN = 1e6 + 1;
std::vector<bool> isPrime(MAXN, true);

void sieve() {
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i < MAXN; ++i) {
        if (isPrime[i]) {
            for (int j = i * i; j < MAXN; j += i) {
                isPrime[j] = false;
            }
        }
    }
}

// Usage:.
sieve();
if (isPrime[29]) std::cout << "29 is a prime number!" << std::endl;
```
