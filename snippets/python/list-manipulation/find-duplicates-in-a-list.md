---
title: Find Duplicates in a List
description: Identifies duplicate elements in a list.
author: axorax
tags: list,duplicates
---

```py
def find_duplicates(lst):
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)

# Usage:
data = [1, 2, 3, 2, 4, 5, 1]
find_duplicates(data) # Returns: [1, 2]
```
