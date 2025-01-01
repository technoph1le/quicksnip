---
Title: Freeze Object
Description: Freezes an object to make it immutable.
Author: axorax
Tags: javascript,object,freeze,immutable
---

```js
function freezeObject(obj) {
  return Object.freeze(obj);
}

// Usage:
const obj = { a: 1, b: 2 };
const frozenObj = freezeObject(obj);
frozenObj.a = 42;         // This will fail silently in strict mode.
console.log(frozenObj.a); // Output: 1
```
