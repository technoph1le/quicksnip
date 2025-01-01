---
Title: Flatten Unevenly Nested Lists
Description: Converts unevenly nested lists of any depth into a single flat list.
Author: agilarasu
Tags: python,list,flattening,nested-lists,depth,utilities
---

```py
def flatten(nested_list):
    """
    Flattens unevenly nested lists of any depth into a single flat list.
    """
    for item in nested_list:
        if isinstance(item, list):
            yield from flatten(item)
        else:
            yield item

# Usage:
nested_list = [1, [2, [3, 4]], 5]
flattened = list(flatten(nested_list))
print(flattened)  # Output: [1, 2, 3, 4, 5]
```
