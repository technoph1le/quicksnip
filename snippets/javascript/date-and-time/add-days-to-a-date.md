---
title: Add Days to a Date
description: Adds a specified number of days to a given date.
author: axorax
tags: javascript,date,add-days,utility
---

```js
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

// Usage:
const today = new Date();
console.log(addDays(today, 10)); // Output: Date object 10 days ahead
```
