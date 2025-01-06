---
title: Bubble Sort
description: Sorts a list of integers using the Bubble Sort algorithm.
author: utkarshkonwar
tags: sorting,bubblesort,array,algorithm
---


```py
def bubbleSort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap arr[j] and arr[j + 1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Usage:
arr = [64, 34, 25, 12, 22, 11, 90]
bubbleSort(arr)
# Now arr is sorted: [11, 12, 22, 25, 34, 64, 90]
```