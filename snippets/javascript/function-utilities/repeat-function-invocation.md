---
Title: Repeat Function Invocation
Description: Invokes a function a specified number of times.
Author: dostonnabotov
Tags: javascript,function,repeat,utility
---

```js
const times = (func, n) => {
  Array.from(Array(n)).forEach(() => {
    func();
  });
};

// Usage:
const randomFunction = () => console.log('Function called!');
times(randomFunction, 3); // Logs 'Function called!' three times
```
