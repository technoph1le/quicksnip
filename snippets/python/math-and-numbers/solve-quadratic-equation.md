---
Title: Solve Quadratic Equation
Description: Solves a quadratic equation ax^2 + bx + c = 0 and returns the roots.
Author: axorax
Tags: python,math,quadratic,equation,solver
---

```py
import cmath

def solve_quadratic(a, b, c):
    discriminant = cmath.sqrt(b**2 - 4 * a * c)
    root1 = (-b + discriminant) / (2 * a)
    root2 = (-b - discriminant) / (2 * a)
    return root1, root2

# Usage:
print(solve_quadratic(1, -3, 2))  # Output: ((2+0j), (1+0j))
print(solve_quadratic(1, 2, 5))   # Output: ((-1+2j), (-1-2j))
```
