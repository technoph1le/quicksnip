---
title: Capitalize String
description: Capitalizes the first letter of a string.
author: dostonnabotov
tags: javascript,string,capitalize,utility
---

```js
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Usage:
console.log(capitalize('hello')); // Output: 'Hello'
```
