---
Title: Get Time Difference
Description: Calculates the time difference in days between two dates.
Author: dostonnabotov
Tags: javascript,date,time-difference,utility
---

```js
const getTimeDifference = (date1, date2) => {
  const diff = Math.abs(date2 - date1);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// Usage:
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
console.log(getTimeDifference(date1, date2)); // Output: 365
```
