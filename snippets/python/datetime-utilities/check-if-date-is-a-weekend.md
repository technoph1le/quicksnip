---
title: Check if Date is a Weekend
description: Checks whether a given date falls on a weekend.
author: axorax
tags: python,datetime,weekend,utility
---

```py
from datetime import datetime

def is_weekend(date):
    try:
        return date.weekday() >= 5  # Saturday = 5, Sunday = 6
    except AttributeError:
        raise TypeError("Input must be a datetime object")

# Usage:
date = datetime(2023, 1, 1)
weekend = is_weekend(date)
print(weekend)  # Output: True (Sunday)
```
