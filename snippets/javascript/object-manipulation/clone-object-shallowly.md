---
Title: Clone Object Shallowly
Description: Creates a shallow copy of an object.
Author: axorax
Tags: javascript,object,clone,shallow
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
