---
title: Clone Object Shallowly
description: Creates a shallow copy of an object.
author: axorax
tags: javascript,object,clone,shallow
---

```js
function shallowClone(obj) {
  return { ...obj };
}

// Usage:
const obj = { a: 1, b: 2 };
const clone = shallowClone(obj);
console.log(clone); // Output: { a: 1, b: 2 }
```
