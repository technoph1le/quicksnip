---
Title: Compare Two Objects Shallowly
Description: Compares two objects shallowly and returns whether they are equal.
Author: axorax
Tags: javascript,object,compare,shallow
---

```js
function shallowEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every(key => obj1[key] === obj2[key]);
}

// Usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 1, b: 3 };
console.log(shallowEqual(obj1, obj2)); // Output: true
console.log(shallowEqual(obj1, obj3)); // Output: false
```
