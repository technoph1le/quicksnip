---
Title: Data with Prefix
Description: Adds a prefix and postfix to data, with a fallback value.
Author: realvishalrana
Tags: javascript,data,utility
---

```js
const dataWithPrefix = (data, fallback = '-', prefix = '', postfix = '') => {
  return data ? `${prefix}${data}${postfix}` : fallback;
};

// Usage:
console.log(dataWithPrefix('123', '-', '(', ')')); // Output: '(123)'
console.log(dataWithPrefix('', '-', '(', ')')); // Output: '-'
console.log(dataWithPrefix('Hello', 'N/A', 'Mr. ', '')); // Output: 'Mr. Hello'
console.log(dataWithPrefix(null, 'N/A', 'Mr. ', '')); // Output: 'N/A'
```
