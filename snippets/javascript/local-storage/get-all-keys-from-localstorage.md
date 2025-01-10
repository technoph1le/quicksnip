---
title: Get all keys from localStorage
description: Gets all the keys currently assigned in localStorage.
author: JanluOfficial
tags: localStorage,storage
---

```js
function getAllKeysFromLocalStorage() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i));
    }
    return keys;
}

// Usage:
getAllKeysFromLocalStorage(); // Returns all keys from localStorage
```