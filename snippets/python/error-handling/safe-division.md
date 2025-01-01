---
title: Safe Division
description: Performs division with error handling.
author: e3nviction
tags: python,error-handling,division,utility
---

```py
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return 'Cannot divide by zero!'

# Usage:
print(safe_divide(10, 2))  # Output: 5.0
print(safe_divide(10, 0))  # Output: 'Cannot divide by zero!'
```
