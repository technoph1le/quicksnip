---
title: Check Prime Number
description: Checks if a number is a prime number.
author: ACR1209
contributors: dostonnabotov
tags: math,prime,check
---

```rb
def is_prime?(n)
    return false if n <= 1
    (2..Math.sqrt(n)).each do |i|
        return false if n % i == 0
    end
    true
end

# Usage:
puts is_prime?(29) # Output: true
puts is_prime?(30) # Output: false
```
