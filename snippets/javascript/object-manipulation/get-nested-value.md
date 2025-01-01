---
title: Get Nested Value
description: Retrieves the value at a given path in a nested object.
author: realvishalrana
tags: javascript,object,nested,utility
---

```js
const getNestedValue = (obj, path) => {
  const keys = path.split('.');
  return keys.reduce((currentObject, key) => {
    return currentObject && typeof currentObject === 'object' ? currentObject[key] : undefined;
  }, obj);
};

// Usage:
const obj = { a: { b: { c: 42 } } };
console.log(getNestedValue(obj, 'a.b.c')); // Output: 42
```
