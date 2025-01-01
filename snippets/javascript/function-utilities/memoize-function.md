---
Title: Memoize Function
Description: Caches the result of a function based on its arguments to improve performance.
Author: axorax
Tags: javascript,memoization,optimization,utility
---

```js
const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};

// Usage:
const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Output: 120 (retrieved from cache)
```
