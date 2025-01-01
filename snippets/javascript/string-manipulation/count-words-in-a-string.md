---
Title: Count Words in a String
Description: Counts the number of words in a string.
Author: axorax
Tags: javascript,string,manipulation,word count,count
---

```js
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Example usage:
console.log(countWords('Hello world! This is a test.')); // Output: 6
```
