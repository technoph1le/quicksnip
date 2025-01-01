---
title: Get Days in Month
description: Calculates the number of days in a specific month of a given year.
author: axorax
tags: javascript,date,days-in-month,utility
---

```js
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// Usage:
console.log(getDaysInMonth(2024, 1)); // Output: 29 (February in a leap year)
console.log(getDaysInMonth(2023, 1)); // Output: 28
```
