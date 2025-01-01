---
title: Check Leap Year
description: Determines if a given year is a leap year.
author: axorax
tags: javascript,date,leap-year,utility
---

```js
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Usage:
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false
```
