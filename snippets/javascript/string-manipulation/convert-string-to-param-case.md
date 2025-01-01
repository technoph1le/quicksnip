---
title: Convert String to Param Case
description: Converts a given string into param-case.
author: aumirza
tags: string,case,paramCase
---

```js
function toParamCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Example usage:
console.log(toParamCase('Hello World Test')); // Output: 'hello-world-test'
```
