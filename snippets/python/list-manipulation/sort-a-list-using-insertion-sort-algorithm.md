---
title: sort a list using insertion sort algorithm
description: Insertion Sort 
author: Simpfey
tags: list,sort
---

```py
def insertionSort(arr):
    n = len(arr)  # Get the length of the array
      
    if n <= 1:
        return  # If the array has 0 or 1 element, it is already sorted, so return
 
    for i in range(1, n):  # Iterate over the array starting from the second element
        key = arr[i]  # Store the current element as the key to be inserted in the right position
        j = i-1
        while j >= 0 and key < arr[j]:  # Move elements greater than key one position ahead
            arr[j+1] = arr[j]  # Shift elements to the right
            j -= 1
        arr[j+1] = key  # Insert the key in the correct position

    return arr

# Usage:
list = [6, 2, 3, 1, 4, 5]
insertionsort(list) # Returns: [1, 2, 3, 4, 5, 6]
```
