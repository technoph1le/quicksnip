---
title: Remove Falsy Values
description: Removes falsy values like null, undefined, and false from an array.
author: mubasshir
tags: javascript,array,falsy,filter
---

```js
const removeFalsy = (arr) => arr.filter(Boolean);

// Usage:
const array = [0, 1, false, 2, "", 3, null];
console.log(removeFalsy(array)); // Output: [1, 2, 3]
```
