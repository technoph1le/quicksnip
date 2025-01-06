---
title: Linear Search 
description: Searches for an element in a list using the Linear Search algorithm.
author: utkarshkonwar
tags: search,linearsearch,array,algorithm
---


```py
def linearSearch(arr, x):
    for i in range(len(arr)):
        if arr[i] == x:
            return i  # Element found at index i
    return -1  # Element not found

# Usage:
arr = [10, 20, 30, 40, 50]
x = 30
result = linearSearch(arr, x)
# result = 2 (index of the element 30)

```