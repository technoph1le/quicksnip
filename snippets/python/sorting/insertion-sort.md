---
title: Insertion Sort
description: Sorts a list of integers using the Insertion Sort algorithm.
author: utkarshkonwar
tags: sorting,insertionsort,array,algorithm
---


```py
def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Move elements of arr[0..i-1] that are greater than key
        # to one position ahead of their current position
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# Usage:
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
# Now arr is sorted: [5, 6, 11, 12, 13]

```