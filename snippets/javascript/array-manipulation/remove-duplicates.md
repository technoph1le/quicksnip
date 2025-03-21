---
title: Remove Duplicates
description: Removes duplicate values from an array.
author: technoph1le
tags: array,deduplicate
---

```js
const removeDuplicates = (arr) => [...new Set(arr)];

// Usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(numbers); // Returns: [1, 2, 3, 4, 5]
```
