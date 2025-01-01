---
title: Determine Day of the Week
description: Calculates the day of the week for a given date.
author: axorax
tags: python,datetime,weekday,utility
---

```py
from datetime import datetime

def get_day_of_week(date):
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    try:
        return days[date.weekday()]
    except IndexError:
        raise ValueError("Invalid date")

# Usage:
date = datetime(2023, 1, 1)
day = get_day_of_week(date)
print(day)  # Output: 'Sunday'
```
