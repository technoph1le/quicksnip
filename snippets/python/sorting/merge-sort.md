---
title: Merge Sort 
description: Sorts a list of integers using the Merge Sort algorithm.
author: utkarshkonwar
tags: sorting,mergesort,array,algorithm
---


```py
def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    # Temporary arrays
    L = arr[l:l + n1]
    R = arr[m + 1:m + 1 + n2]

    i = j = k = 0

    # Merge the temporary arrays back into arr[l..r]
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k + l] = L[i]
            i += 1
        else:
            arr[k + l] = R[j]
            j += 1
        k += 1

    # Copy remaining elements of L[], if any
    while i < n1:
        arr[k + l] = L[i]
        i += 1
        k += 1

    # Copy remaining elements of R[], if any
    while j < n2:
        arr[k + l] = R[j]
        j += 1
        k += 1

def mergeSort(arr, l, r):
    if l < r:
        m = (l + r) // 2

        # Sort first and second halves
        mergeSort(arr, l, m)
        mergeSort(arr, m + 1, r)

        merge(arr, l, m, r)

# Usage:
arr = [38, 27, 43, 3, 9, 82, 10]
mergeSort(arr, 0, len(arr) - 1)
# Now arr is sorted: [3, 9, 10, 27, 38, 43, 82]

```