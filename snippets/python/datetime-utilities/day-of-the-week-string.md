---
title: Day of the Week String
description: Gets the string of the day of the week for a given date.
author: axorax
tags: datetime,weekday
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
get_day_of_week(date) # Returns: 'Sunday'
```
