---
title: Get Number of Days in a Month
description: Determines the number of days in a specific month and year.
author: axorax
tags: datetime,calendar
---

```py
from calendar import monthrange
from datetime import datetime

def get_days_in_month(year, month):
    try:
        return monthrange(year, month)[1]
    except ValueError as e:
        raise ValueError(f"Invalid month or year: {e}")

# Usage:
get_days_in_month(2023, 2) # Returns: 28 (for non-leap year February)
```
