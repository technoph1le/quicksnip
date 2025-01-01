---
title: Flatten Array
description: Flattens a multi-dimensional array.
author: dostonnabotov
tags: javascript,array,flatten,utility
---

```js
const flattenArray = (arr) => arr.flat(Infinity);

// Usage:
const nestedArray = [1, [2, [3, [4]]]];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4]
```
