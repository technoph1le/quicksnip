---
title: Binary Search
description: Searches a specific element in an array in optimised manner
author: SarvariHarshitha
tags: searching, binary-search
---

```java
public class BinarySearchRecursive {
    public static int binarySearch(int[] arr, int low, int high, int key) {
        if (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == key) {
                return mid; // Key found
            } else if (arr[mid] < key) {
                return binarySearch(arr, mid + 1, high, key); // Search in the right half
            } else {
                return binarySearch(arr, low, mid - 1, key); // Search in the left half
            }
        }
        return -1; // Key not found
    }

    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int key = 30;

        int result = binarySearch(numbers, 0, numbers.length - 1, key);

        if (result != -1) {
            System.out.println("Element found at index: " + result); //Result : Element found at index: 2
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}

```