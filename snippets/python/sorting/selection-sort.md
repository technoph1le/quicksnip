---
title: Selection Sort 
description: Sorts a list of integers using the Selection Sort algorithm.
author: utkarshkonwar
tags: sorting,selectionsort,array,algorithm
---


```py
def selectionSort(arr):
    for i in range(len(arr) - 1):
        minIdx = i

        # Find the minimum element in the unsorted part of the list
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minIdx]:
                minIdx = j

        # Swap the found minimum element with the first element of the unsorted part
        arr[i], arr[minIdx] = arr[minIdx], arr[i]

# Usage:
arr = [64, 25, 12, 22, 11]
selectionSort(arr)
# Now arr is sorted: [11, 12, 22, 25, 64]

```