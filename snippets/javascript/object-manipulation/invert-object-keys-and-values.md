---
Title: Invert Object Keys and Values
Description: Creates a new object by swapping keys and values of the given object.
Author: axorax
Tags: javascript,object,invert,utility
---

```js
function invertObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(invertObject(obj)); // Output: { '1': 'a', '2': 'b', '3': 'c' }
```
