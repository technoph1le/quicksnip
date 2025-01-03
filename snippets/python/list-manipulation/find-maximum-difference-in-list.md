---
title: Find Maximum Difference in List
description: Finds the maximum difference between any two elements in a list.
author: axorax
tags: list,difference
---

```py
def max_difference(lst):
    if not lst or len(lst) < 2:
        return 0
    return max(lst) - min(lst)

# Usage:
data = [10, 3, 5, 20, 7]
max_difference(data) # Returns: 17
```
