---
title: Create Custom Exception Type
description: Create a Custom Exception Type that can be called with raise.
author: mrcool7387
tags: python,error-creation,organisation,utility
---

```py
class ExceptionName(BaseException):
    def __init__(message: str):
        super().__init__(message)

# Usage
a: int = 1

if a > 0:
  raise ExceptionName('Error Message')
```
