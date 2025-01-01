---
Title: Remove Duplicates
Description: Removes duplicate values from an array.
Author: dostonnabotov
Tags: javascript,array,deduplicate,utility
---

```js
const removeDuplicates = (arr) => [...new Set(arr)];

// Usage:
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
```
