---
Title: Check Leap Year
Description: Determines if a given year is a leap year.
Author: axorax
Tags: javascript,date,leap-year,utility
---

```js
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Usage:
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false
```
