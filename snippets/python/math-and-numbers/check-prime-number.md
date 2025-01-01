---
Title: Check Prime Number
Description: Checks if a number is a prime number.
Author: dostonnabotov
Tags: python,math,prime,check
---

```py
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

# Usage:
print(is_prime(17))  # Output: True
```
