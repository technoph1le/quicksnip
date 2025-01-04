---
title: Remove Item from localStorage  
description: Removes a specific item from localStorage.  
author: axorax  
tags: localStorage, storage  
---

```js
const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

// Usage:
removeItemFromLocalStorage('user'); // Removes the item with key 'user' from localStorage
