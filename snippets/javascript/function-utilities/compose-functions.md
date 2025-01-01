---
title: Compose Functions
description: Composes multiple functions into a single function, where the output of one function becomes the input of the next.
author: axorax
tags: javascript,function,compose,utility
---

```js
const compose = (...funcs) => (initialValue) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};

// Usage:
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const composed = compose(multiply3, add2);
console.log(composed(5)); // Output: 21 ((5 + 2) * 3)
```
