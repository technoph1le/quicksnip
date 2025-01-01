---
title: Remove Duplicates
description: Removes duplicate values from an array.
author: dostonnabotov
tags: javascript,array,deduplicate,utility
---

```js
const removeDuplicates = (arr) => [...new Set(arr)];

// Usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
```
