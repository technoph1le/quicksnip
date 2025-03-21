---
title: Flatten Unevenly Nested Lists
description: Converts unevenly nested lists of any depth into a single flat list.
author: agilarasu
tags: list,flattening,nested-lists,depth
---

```py
def flatten(nested_list):
    for item in nested_list:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

# Usage:
nested_list = [1, [2, [3, 4]], 5]
list(flatten(nested_list))  # Returns: [1, 2, 3, 4, 5]
```
