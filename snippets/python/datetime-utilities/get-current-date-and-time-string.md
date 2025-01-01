---
title: Get Current Date and Time String
description: Fetches the current date and time as a formatted string.
author: e3nviction
tags: python,datetime,utility
---

```py
from datetime import datetime

def get_current_datetime_string():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# Usage:
print(get_current_datetime_string())  # Output: '2023-01-01 12:00:00'
```
