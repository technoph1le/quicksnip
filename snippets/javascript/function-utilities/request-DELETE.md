---
title: DELETE request
description: Simple request a DELETE api endpoint with a body
author: kruimol
tags: javascript,function,fetch,delete
---

```js
// then
fetch("/api/delete" /* api endpoint */, {
  method: "DELETE",
})
  .then((response) => response.text())
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error("Error:", error));
```
