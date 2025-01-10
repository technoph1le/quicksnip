---
title: Zip Arrays
description: Combines two arrays by pairing corresponding elements from each array.
author: JanluOfficial
tags: array,map
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