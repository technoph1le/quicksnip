---
title: Linear Search
description: Searches a specific element in an array
author: SarvariHarshitha
tags: searching, linear-search
---

```java
public class LinearSearch {
    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i; // Return the index where the key is found
            }
        }
        return -1; // Return -1 if the key is not found
    }

    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        int key = 30;

        int result = linearSearch(numbers, key);

        if (result != -1) {
            System.out.println("Element found at index: " + result); // Result : Element found at 2
        } else {
            System.out.println("Element not found in the array.");
        }
    }
}


```