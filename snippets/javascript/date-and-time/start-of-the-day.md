---
title: Start of the Day
description: Returns the start of the day (midnight) for a given date.
author: axorax
tags: javascript,date,start-of-day,utility
---

```js
const startOfDay = (date) => new Date(date.setHours(0, 0, 0, 0));

// Usage:
const today = new Date();
console.log(startOfDay(today)); // Output: Date object for midnight
```
