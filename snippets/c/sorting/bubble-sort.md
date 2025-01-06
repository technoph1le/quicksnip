---
title: Bubble Sort 
description: Sorts an array of integers using the Bubble Sort algorithm.
author: utkarshkonwar
tags: sorting,bubblesort,array,algorithm
---

```c
void bubbleSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Usage:
int arr[] = {64, 34, 25, 12, 22, 11, 90};
int n = sizeof(arr) / sizeof(arr[0]);
bubbleSort(arr, n);
// Now arr[] is sorted: {11, 12, 22, 25, 34, 64, 90}
```