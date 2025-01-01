---
title: Debounce Function
description: Delays a function execution until after a specified time.
author: dostonnabotov
tags: javascript,utility,debounce,performance
---

```js
const debounce = (func, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Usage:
window.addEventListener('resize', debounce(() => console.log('Resized!'), 500));
```
