---
title: Insertion Sort 
description: Sorts an array of integers using the Insertion Sort algorithm.
author: 0xHouss
tags: sorting,insertionsort,array,algorithm
---

```c
void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// Usage:
int arr[] = {12, 11, 13, 5, 6};
int n = sizeof(arr) / sizeof(arr[0]);
insertionSort(arr, n);
// Now arr[] is sorted: {5, 6, 11, 12, 13}

```