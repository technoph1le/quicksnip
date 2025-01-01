---
title: Remove Vowels from a String
description: Removes all vowels from a given string.
author: axorax
tags: string,remove,vowels
---

```js
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Example usage:
console.log(removeVowels('Hello World')); // Output: 'Hll Wrld'
```
