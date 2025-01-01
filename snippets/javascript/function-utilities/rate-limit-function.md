---
Title: Rate Limit Function
Description: Limits how often a function can be executed within a given time window.
Author: axorax
Tags: javascript,function,rate-limiting,utility
---

```js
const rateLimit = (func, limit, timeWindow) => {
  let queue = [];
  setInterval(() => {
    if (queue.length) {
      const next = queue.shift();
      func(...next.args);
    }
  }, timeWindow);
  return (...args) => {
    if (queue.length < limit) {
      queue.push({ args });
    }
  };
};

// Usage:
const fetchData = () => console.log('Fetching data...');
const rateLimitedFetch = rateLimit(fetchData, 2, 1000);
setInterval(() => rateLimitedFetch(), 200); // Only calls fetchData twice every second
```
