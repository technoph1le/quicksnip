---
Title: Get Day of the Year
Description: Calculates the day of the year (1-365 or 1-366 for leap years) for a given date.
Author: axorax
Tags: javascript,date,day-of-year,utility
---

```js
const getDayOfYear = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear + (startOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Usage:
const today = new Date('2024-12-31');
console.log(getDayOfYear(today)); // Output: 366 (in a leap year)
```
