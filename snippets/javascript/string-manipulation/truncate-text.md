---
Title: Truncate Text
Description: Truncates the text to a maximum length and appends '...' if the text exceeds the maximum length.
Author: realvishalrana
Tags: javascript,string,truncate,utility,text
---

```js
const truncateText = (text = '', maxLength = 50) => {
  return `${text.slice(0, maxLength)}${text.length >= maxLength ? '...' : ''}`;
};

// Usage:
const title = "Hello, World! This is a Test.";
console.log(truncateText(title)); // Output: 'Hello, World! This is a Test.'
console.log(truncateText(title, 10)); // Output: 'Hello, Wor...'
```
