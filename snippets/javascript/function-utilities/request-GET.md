---
title: GET request
description: Simple request a GET api endpoint
author: kruimol
tags: javascript,function,fetch,get
---

```js
// then
fetch("/api/get" /* api endpoint */)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error("Error:", error));
```
