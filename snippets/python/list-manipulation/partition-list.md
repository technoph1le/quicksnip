---
Title: Partition List
Description: Partitions a list into sublists of a given size.
Author: axorax
Tags: python,list,partition,utility
---

```py
def partition_list(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i + size]

# Usage:
data = [1, 2, 3, 4, 5, 6, 7]
partitions = list(partition_list(data, 3))
print(partitions)  # Output: [[1, 2, 3], [4, 5, 6], [7]]
```
