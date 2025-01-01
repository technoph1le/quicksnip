---
Title: Retrieve Item from localStorage
Description: Retrieves a value from localStorage by key and parses it.
Author: dostonnabotov
Tags: javascript,localStorage,storage,utility
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
