---
title: Binary Search 
description: Searches for an element in a sorted array using the Binary Search algorithm.
author: utkarshkonwar
tags: search,binarysearch,array,algorithm
---

```c
int binarySearch(int arr[], int low, int high, int x) {
  while (low <= high) {
    int mid = low + (high - low) / 2;

    // Check if x is present at mid
    if (arr[mid] == x) {
      return mid;
    }

    // If x is smaller, search the left half
    if (arr[mid] > x) {
      high = mid - 1;
    } else { // If x is larger, search the right half
      low = mid + 1;
    }
  }
  return -1; // Element not found
}

// Usage:
int arr[] = {2, 3, 4, 10, 40};
int n = sizeof(arr) / sizeof(arr[0]);
int x = 10;
int result = binarySearch(arr, 0, n - 1, x);
// result = 3 (index of the element 10)


```