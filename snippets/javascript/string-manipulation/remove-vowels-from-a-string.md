---
Title: Remove Vowels from a String
Description: Removes all vowels from a given string.
Author: axorax
Tags: string,remove,vowels
---

```js
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
console.log(removeVowels('Hello World')); // Output: 'Hll Wrld'
```
