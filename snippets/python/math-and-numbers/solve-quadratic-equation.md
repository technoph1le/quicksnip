---
title: Solve Quadratic Equation
description: Solves a quadratic equation ax^2 + bx + c = 0 and returns the roots.
author: axorax
tags: math,quadratic,equation,solver
---

```py
import cmath

def solve_quadratic(a, b, c):
    discriminant = cmath.sqrt(b**2 - 4 * a * c)
    root1 = (-b + discriminant) / (2 * a)
    root2 = (-b - discriminant) / (2 * a)
    return root1, root2

# Usage:
solve_quadratic(1, -3, 2) # Returns: ((2+0j), (1+0j))
solve_quadratic(1, 2, 5) # Returns: ((-1+2j), (-1-2j))
```
