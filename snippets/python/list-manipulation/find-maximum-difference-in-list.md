---
title: Find Maximum Difference in List
description: Finds the maximum difference between any two elements in a list.
author: axorax
tags: python,list,difference,utility
---

```py
def max_difference(lst):
    if not lst or len(lst) < 2:
        return 0
    return max(lst) - min(lst)

# Usage:
data = [10, 3, 5, 20, 7]
print(max_difference(data))  # Output: 17
```
