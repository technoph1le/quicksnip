---
title: Format Date
description: Formats a date in 'YYYY-MM-DD' format.
author: dostonnabotov
tags: javascript,date,format,utility
---

```js
const formatDate = (date) => date.toISOString().split('T')[0];

// Usage:
console.log(formatDate(new Date())); // Output: '2024-12-10'
```
