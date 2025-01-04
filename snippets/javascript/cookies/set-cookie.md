---
title: Set Cookie
description: Set a browser cookie
author: 1982FenceHopper
tags: cookie, document
---

```js
const setCookie = (name, value, max_age = 3600, expires = undefined) => {
	try {
  	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};max-age=${max_age};path=/;${expires ? `expires=${encodeURIComponent(expires)}` : ""}`;
  } catch (e) {
    console.error(e);
  }
};

// Usage:
let name = "foo";
let value = "bar";

setCookie(name, value);
```