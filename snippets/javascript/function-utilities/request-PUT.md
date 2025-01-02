---
title: PUT request
description: Simple request a PUT api endpoint with a body
author: kruimol
tags: javascript,function,fetch,put
---

```js
// then
fetch("/api/PUT" /* api endpoint */, {
  method: "PUT",
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
