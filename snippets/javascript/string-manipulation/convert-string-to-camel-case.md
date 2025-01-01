---
Title: Convert String to Camel Case
Description: Converts a given string into camelCase.
Author: aumirza
Tags: string,case,camelCase
---

```js
function toCamelCase(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

// Example usage:
console.log(toCamelCase('hello world test')); // Output: 'helloWorldTest'
```
