---
title: Human Date
description: Returns Human readable Date format.
author: yuvaraja28
tags: date,human,format
---

```js
const humanDate = (date = new Date(), locale = 'en-US') => {
  const options = {
    localeMatcher: 'best fit',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour12: true,
    formatMatcher: 'basic',
    hour: '2-digit',
    minute: '2-digit',
  };
  return date.toLocaleDateString(locale, options);
};

// Usage:
humanDate() // Jan 24, 2025, 08:08 PM
humanDate(new Date()) // Jan 24, 2025, 08:08 PM
humanDate(new Date("2025-01-01")) // Jan 01, 2025, 05:30 AM
humanDate(new Date(), 'fr-FR') // 26 janv. 2025, 05:25 PM
```
