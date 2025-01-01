---
Title: Once Function
Description: Ensures a function is only called once.
Author: axorax
Tags: javascript,function,once,utility
---

```js
const once = (func) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return func(...args);
    }
  };
};

// Usage:
const initialize = once(() => console.log('Initialized!'));
initialize(); // Output: Initialized!
initialize(); // No output
```
