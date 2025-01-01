---
Title: Pick Keys from Object
Description: Creates a new object with only the specified keys.
Author: axorax
Tags: javascript,object,pick,utility
---

```js
function pickKeys(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => keys.includes(key))
  );
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(pickKeys(obj, ['a', 'c'])); // Output: { a: 1, c: 3 }
```
