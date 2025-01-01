---
title: Convert String to Camel Case
description: Converts a given string into camelCase.
author: aumirza
tags: string,case,camelCase
---

```js
function toCamelCase(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

// Example usage:
console.log(toCamelCase('hello world test')); // Output: 'helloWorldTest'
```
