---
title: Combine Arrays
description: Concatenates two arrays into one.
author: JanluOfficial
tags: array,concat
---

```js
function combineArrays(array1, array2) {
    return array1.concat(array2);
}

// Usage:
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const combinedArray = combineArrays(array1, array2);
console.log(combinedArray); // Output: [1, 2, 3, 1, 2, 3]
```