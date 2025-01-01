---
title: Check if Object is Empty
description: Checks whether an object has no own enumerable properties.
author: axorax
tags: javascript,object,check,empty
---

```js
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Usage:
console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ a: 1 })); // Output: false
```
