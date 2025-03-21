---
title: Find Intersection of Two Lists
description: Finds the common elements between two lists.
author: axorax
tags: list,intersection
---

```py
def list_intersection(lst1, lst2):
    return [item for item in lst1 if item in lst2]

# Usage:
list_a = [1, 2, 3, 4]
list_b = [3, 4, 5, 6]
list_intersection(list_a, list_b) # Returns: [3, 4]
```
