---
title: Selection Sort 
description: Sorts an array of integers using the Selection Sort algorithm.
author: 0xHouss
tags: sorting,selectionsort,array,algorithm
---

```c
void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int minIdx = i;

    // Find the minimum element in the unsorted part of the array
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}

// Usage:
int arr[] = {64, 25, 12, 22, 11};
int n = sizeof(arr) / sizeof(arr[0]);
selectionSort(arr, n);
// Now arr[] is sorted: {11, 12, 22, 25, 64}

```