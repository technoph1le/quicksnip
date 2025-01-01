---
Title: Flatten Nested List
Description: Flattens a multi-dimensional list into a single list.
Author: dostonnabotov
Tags: python,list,flatten,utility
---

```py
def flatten_list(lst):
    return [item for sublist in lst for item in sublist]

# Usage:
nested_list = [[1, 2], [3, 4], [5]]
print(flatten_list(nested_list))  # Output: [1, 2, 3, 4, 5]
```
