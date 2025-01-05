---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in JavaScript.
author: Karanjot786
tags: fibonacci, math
---

```js
function fibonacci(n) {
  let a = 0, b = 1;
  let result = a + ' ';
  if (n > 1) {
    result += b + ' ';
  }

  for (let i = 2; i < n; i++) {
    let c = a + b;
    result += c + ' ';
    a = b;
    b = c;
  }
  console.log(result.trim());
}

// Usage:
fibonacci(5); // Output: 0 1 1 2 3
```