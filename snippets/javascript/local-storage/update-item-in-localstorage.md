---
title: Update Item in localStorage
description: Updates an item with a specific key in localStorage.
author: JanluOfficial
tags: localStorage,storage
---

```js
function updateLocalStorageItem(key, newValue) {
    if (localStorage.getItem(key) !== null) {
        localStorage.setItem(key, newValue);
    } else {
        console.error(`Item with key "${key}" does not exist in LocalStorage.`);
    }
}

// Usage:
updateLocalStorageItem('username', 'newUsername');
```