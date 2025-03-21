---
title: Flatten Nested List
description: Flattens a multi-dimensional list into a single list.
author: technoph1le
tags: list,flatten
---

```py
def flatten_list(lst):
    return [item for sublist in lst for item in sublist]

# Usage:
nested_list = [[1, 2], [3, 4], [5]]
flatten_list(nested_list)  # Returns: [1, 2, 3, 4, 5]
```
