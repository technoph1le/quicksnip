---
Title: Unique By Key
Description: Filters an array of objects to only include unique objects by a specified key.
Author: realvishalrana
Tags: javascript,array,unique,utility
---

```js
const uniqueByKey = (key, arr) =>
  arr.filter((obj, index, self) => index === self.findIndex((t) => t?.[key] === obj?.[key]));

// Usage:
const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
];
console.log(uniqueByKey('id', arr)); // Output: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```
