---
title: Linear Search 
description: Searches for an element in an array using the Linear Search algorithm.
author: 0xHouss
tags: search,linearsearch,array,algorithm
---

```c
int linearSearch(int arr[], int n, int x) {
  for (int i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i; // Element found at index i
    }
  }
  return -1; // Element not found
}

// Usage:
int arr[] = {10, 20, 30, 40, 50};
int n = sizeof(arr) / sizeof(arr[0]);
int x = 30;
int result = linearSearch(arr, n, x);
// result = 2 (index of the element 30)

```