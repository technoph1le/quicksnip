---
Title: Filter Object
Description: Filter out entries in an object where the value is falsy, including empty strings, empty objects, null, and undefined.
Author: realvishalrana
Tags: javascript,object,filter,utility
---

```js
export const filterObject = (object = {}) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([key, value]) => value !== null && value !== undefined && value !== '' && (typeof value !== 'object' || Object.keys(value).length > 0))
  );

// Usage:
const obj1 = { a: 1, b: null, c: undefined, d: 4, e: '', f: {} };
console.log(filterObject(obj1)); // Output: { a: 1, d: 4 }

const obj2 = { x: 0, y: false, z: 'Hello', w: [] };
console.log(filterObject(obj2)); // Output: { z: 'Hello' }

const obj3 = { name: 'John', age: null, address: { city: 'New York' }, phone: '' };
console.log(filterObject(obj3)); // Output: { name: 'John', address: { city: 'New York' } }

const obj4 = { a: 0, b: '', c: false, d: {}, e: 'Valid' };
console.log(filterObject(obj4)); // Output: { e: 'Valid' }
```
