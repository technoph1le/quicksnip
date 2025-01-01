---
title: Convert Number to Roman Numerals
description: Converts a number to Roman numeral representation.
author: axorax
tags: javascript,number,roman,utility
---

```js
const numberToRoman = (num) => {
  const romanNumerals = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L',
    90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
  };
  let result = '';
  Object.keys(romanNumerals).reverse().forEach(value => {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  });
  return result;
};

// Usage:
console.log(numberToRoman(1994)); // Output: 'MCMXCIV'
console.log(numberToRoman(58)); // Output: 'LVIII'
```
