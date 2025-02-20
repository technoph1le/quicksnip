---
title: Throttle Function
description: Ensures a function is only called at most once in a specified time interval. Useful for optimizing events like scrolling or resizing.
author: WizardOfDigits
tags: throttle,performance,optimization
---

```js
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Usage:
// Ensures the function can only be called once every 1000 milliseconds
const logScroll = throttle(() => console.log("Scroll event triggered"), 1000);

// Attach to scroll event
window.addEventListener("scroll", logScroll);
```
