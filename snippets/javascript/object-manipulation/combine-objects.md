---
title: Combine Objects
description: Merges two objects into one.
author: JanluOfficial
tags: object,merge
---

```js
function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = combineObjects(obj1, obj2);
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
```