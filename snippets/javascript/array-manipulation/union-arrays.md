---
title: Union Arrays
description: Combines two arrays into one with unique elements.
author: JanluOfficial
tags: array, set
---

```js
function unionArrays(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}

// Usage:
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const unionArray = unionArrays(array1, array2);
console.log(unionArray); // Output: [1, 2, 3, 4]
```