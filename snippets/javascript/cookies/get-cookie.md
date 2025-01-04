---
title: Get Cookie
description: Get a browser cookie
author: 1982FenceHopper
tags: cookie, document
---

```js
const getCookie = (name) => {
    return document.cookie.split(";").find((cookie) => cookie.trim().split("=")[0] == name)
};

// Usage:
let name = "foo";

console.log(getCookie(name)); // Output: foo=bar
```