---
Title: Convert Number to Currency
Description: Converts a number to a currency format with a specific locale.
Author: axorax
Tags: javascript,number,currency,utility
---

```js
const convertToCurrency = (num, locale = 'en-US', currency = 'USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(num);
};

// Usage:
console.log(convertToCurrency(1234567.89)); // Output: '$1,234,567.89'
console.log(convertToCurrency(987654.32, 'de-DE', 'EUR')); // Output: '987.654,32 €'
```
