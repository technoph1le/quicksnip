---
title: Delete Cookie
description: Delete a browser cookie
author: 1982FenceHopper
tags: cookie, document
---

```js
const deleteCookie = (name) => {
    try {
        document.cookie = `${encodeURIComponent(name)}=MARKED;max-age=0;path=/`;
    } catch (e) {
        console.error(e);
    }
};

// Usage:
let name = "foo";

deleteCookie(name);
```