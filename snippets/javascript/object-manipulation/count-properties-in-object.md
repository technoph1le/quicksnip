---
Title: Count Properties in Object
Description: Counts the number of own properties in an object.
Author: axorax
Tags: javascript,object,count,properties
---

```js
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(countProperties(obj)); // Output: 3
```
