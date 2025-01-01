---
title: Retrieve Item from localStorage
description: Retrieves a value from localStorage by key and parses it.
author: dostonnabotov
tags: javascript,localStorage,storage,utility
---

```js
const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Usage:
const user = getFromLocalStorage('user');
console.log(user); // Output: { name: 'John', age: 30 }
```
