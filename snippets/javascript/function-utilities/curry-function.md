---
title: Curry Function
description: Transforms a function into its curried form.
author: axorax
tags: javascript,curry,function,utility
---

```js
const curry = (func) => {
  const curried = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
  return curried;
};

// Usage:
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
```
