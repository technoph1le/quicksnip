---
title: Remove All Whitespace
description: Removes all whitespace from a string.
author: axorax
tags: javascript,string,whitespace
---

```js
function removeWhitespace(str) {
  return str.replace(/\s+/g, '');
}

// Example usage:
console.log(removeWhitespace('Hello world!')); // Output: 'Helloworld!'
```
