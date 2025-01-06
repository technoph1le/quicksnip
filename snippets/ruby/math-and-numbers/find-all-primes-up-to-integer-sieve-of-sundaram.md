---
title: Find all primes up to integer (Sieve of Sundaram)
description: Finds all the prime numbers up to a specific integer.
author: ACR1209
tags: math,prime numbers
---

```rb
def sieve_of_sundaram(limit)
    n = (limit - 1) / 2
    marked = Array.new(n + 1, false)

    (1..n).each do |i|
        j = i
        while (i + j + 2 * i * j) <= n
            marked[i + j + 2 * i * j] = true
            j += 1
        end
    end

    primes = [2]
    (1..n).each do |i|
        primes << (2 * i + 1) unless marked[i]
    end

    primes
end

# Usage:
print sieve_of_sundaram(30) # Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```