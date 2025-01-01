---
title: Omit Keys from Object
description: Creates a new object with specific keys omitted.
author: axorax
tags: javascript,object,omit,utility
---

```js
function omitKeys(obj, keys) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key))
  );
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(omitKeys(obj, ['b', 'c'])); // Output: { a: 1 }
```
