---
title: Convert Object to Query String
description: Converts an object to a query string for use in URLs.
author: axorax
tags: javascript,object,query string,url
---

```js
function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
    .join('&');
}

// Usage:
const params = { search: 'test', page: 1 };
console.log(toQueryString(params)); // Output: 'search=test&page=1'
```
