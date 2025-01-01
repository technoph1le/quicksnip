---
Title: Convert String to Param Case
Description: Converts a given string into param-case.
Author: aumirza
Tags: string,case,paramCase
---

```js
function toParamCase(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}

// Example usage:
console.log(toParamCase('Hello World Test')); // Output: 'hello-world-test'
```
