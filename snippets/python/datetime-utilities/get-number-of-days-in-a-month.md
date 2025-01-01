---
Title: Get Number of Days in a Month
Description: Determines the number of days in a specific month and year.
Author: axorax
Tags: python,datetime,calendar,utility
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
days = get_days_in_month(2023, 2)
print(days)  # Output: 28 (for non-leap year February)
```
