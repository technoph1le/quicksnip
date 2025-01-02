---
title: POST request
description: Simple request a POST api endpoint with a body
author: kruimol
tags: javascript,function,fetch,post
---

```js
// then
fetch("/api/post" /* api endpoint */, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ a: 1, b: "Textual content" })
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error("Error:", error));
```
