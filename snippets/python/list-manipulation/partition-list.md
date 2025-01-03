---
title: Partition List
description: Partitions a list into sublists of a given size.
author: axorax
tags: list,partition
---

```py
def partition_list(lst, size):
    for i in range(0, len(lst), size):
        yield lst[i:i + size]

# Usage:
data = [1, 2, 3, 4, 5, 6, 7]
list(partition_list(data, 3)) # Returns: [[1, 2, 3], [4, 5, 6], [7]]
```
