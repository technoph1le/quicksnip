---
Title: Format Number with Commas
Description: Formats a number with commas for better readability (e.g., 1000 -> 1,000).
Author: axorax
Tags: javascript,number,format,utility
---

```js
const formatNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Usage:
console.log(formatNumberWithCommas(1000)); // Output: '1,000'
console.log(formatNumberWithCommas(1234567)); // Output: '1,234,567'
console.log(formatNumberWithCommas(987654321)); // Output: '987,654,321'
```
