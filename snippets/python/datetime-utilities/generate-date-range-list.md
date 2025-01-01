---
title: Generate Date Range List
description: Generates a list of dates between two given dates.
author: axorax
tags: python,datetime,range,utility
---

```py
from datetime import datetime, timedelta

def generate_date_range(start_date, end_date):
    if start_date > end_date:
        raise ValueError("start_date must be before end_date")

    current_date = start_date
    date_list = []
    while current_date <= end_date:
        date_list.append(current_date)
        current_date += timedelta(days=1)

    return date_list

# Usage:
start = datetime(2023, 1, 1)
end = datetime(2023, 1, 5)
dates = generate_date_range(start, end)
for d in dates:
    print(d.strftime('%Y-%m-%d'))
# Output: '2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'
```
