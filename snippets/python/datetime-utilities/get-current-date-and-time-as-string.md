---
title: Get Current Date and Time as String
description: Fetches the current date and time as a formatted string.
author: e3nviction
tags: datetime,current,string
---

```py
from datetime import datetime

def get_current_datetime_string():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# Usage:
get_current_datetime_string() # Returns: '2023-01-01 12:00:00'
```
