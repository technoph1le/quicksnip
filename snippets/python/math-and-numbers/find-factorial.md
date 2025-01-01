---
Title: Find Factorial
Description: Calculates the factorial of a number.
Author: dostonnabotov
Tags: python,math,factorial,utility
---

```py
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

# Usage:
print(factorial(5))  # Output: 120
```
