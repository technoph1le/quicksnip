---
title: Quick Sort 
description: Sorts a list of integers using the Quick Sort algorithm.
author: utkarshkonwar
tags: sorting,quicksort,array,algorithm

---


```py
def partition(arr, low, high):
    pivot = arr[high]  # Pivot element
    i = low - 1

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            # Swap arr[i] and arr[j]
            arr[i], arr[j] = arr[j], arr[i]

    # Swap arr[i + 1] and arr[high] (pivot)
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)

        # Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

# Usage:
arr = [10, 7, 8, 9, 1, 5]
quickSort(arr, 0, len(arr) - 1)
# Now arr is sorted: [1, 5, 7, 8, 9, 10]

```