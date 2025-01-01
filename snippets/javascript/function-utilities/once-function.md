---
title: Once Function
description: Ensures a function is only called once.
author: axorax
tags: javascript,function,once,utility
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
