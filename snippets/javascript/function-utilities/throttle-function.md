---
Title: Throttle Function
Description: Limits a function execution to once every specified time interval.
Author: dostonnabotov
Tags: javascript,utility,throttle,performance
---

```js
const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// Usage:
document.addEventListener('scroll', throttle(() => console.log('Scrolled!'), 1000));
```
