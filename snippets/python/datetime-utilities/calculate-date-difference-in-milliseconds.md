---
Title: Calculate Date Difference in Milliseconds
Description: Calculates the difference between two dates in milliseconds.
Author: e3nviction
Tags: python,datetime,utility
---

```py
from datetime import datetime

def date_difference_in_millis(date1, date2):
    delta = date2 - date1
    return delta.total_seconds() * 1000

# Usage:
d1 = datetime(2023, 1, 1, 12, 0, 0)
d2 = datetime(2023, 1, 1, 12, 1, 0)
print(date_difference_in_millis(d1, d2))
```
