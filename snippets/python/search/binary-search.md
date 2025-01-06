---
title: Binary Search 
description: Searches for an element in a sorted list using the Binary Search algorithm.
author: utkarshkonwar
tags: search,binarysearch,array,algorithm
---


```py
def binarySearch(arr, low, high, x):
    while low <= high:
        mid = (low + high) // 2

        # Check if x is present at mid
        if arr[mid] == x:
            return mid

        # If x is smaller, search the left half
        if arr[mid] > x:
            high = mid - 1
        else:  # If x is larger, search the right half
            low = mid + 1
    return -1  # Element not found

# Usage:
arr = [2, 3, 4, 10, 40]
x = 10
result = binarySearch(arr, 0, len(arr) - 1, x)
# result = 3 (index of the element 10)

```