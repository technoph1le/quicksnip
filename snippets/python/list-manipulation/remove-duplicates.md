---
title: Remove Duplicates
description: Removes duplicate elements from a list while maintaining order.
author: dostonnabotov
tags: list,duplicates,filter
---

```py
def remove_duplicates(lst):
    return list(dict.fromkeys(lst))

# Usage:
remove_duplicates([1, 2, 2, 3, 4, 4, 5])  # Returns: [1, 2, 3, 4, 5]
```
