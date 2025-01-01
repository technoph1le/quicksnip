---
Title: Check if Item Exists in localStorage
Description: Checks if a specific item exists in localStorage.
Author: axorax
Tags: javascript,localStorage,storage,utility
---

```js
const isItemInLocalStorage = (key) => {
  return localStorage.getItem(key) !== null;
};

// Usage:
console.log(isItemInLocalStorage('user')); // Output: true or false
```
