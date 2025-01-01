---
Title: Add Item to localStorage
Description: Stores a value in localStorage under the given key.
Author: dostonnabotov
Tags: javascript,localStorage,storage,utility
---

```js
const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Usage:
addToLocalStorage('user', { name: 'John', age: 30 });
```
