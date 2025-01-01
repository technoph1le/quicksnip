---
Title: Get Contrast Color
Description: Returns either black or white text color based on the brightness of the provided hex color.
Author: yaya12085
Tags: javascript,color,hex,contrast,brightness,utility
---

```js
const getContrastColor = (hexColor) => {
  // Expand short hex color to full format
  if (hexColor.length === 4) {
    hexColor = `#${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
  }
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness >= 128 ? "#000000" : "#FFFFFF";
};

// Usage:
console.log(getContrastColor('#fff')); // Output: #000000 (black)
console.log(getContrastColor('#123456')); // Output: #FFFFFF (white)
console.log(getContrastColor('#ff6347')); // Output: #000000 (black)
console.log(getContrastColor('#f4f')); // Output: #000000 (black)
```
