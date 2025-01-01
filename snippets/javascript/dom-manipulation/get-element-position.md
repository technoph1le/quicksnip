---
Title: Get Element Position
Description: Gets the position of an element relative to the viewport.
Author: axorax
Tags: javascript,dom,position,utility
---

```js
const getElementPosition = (element) => {
  const rect = element.getBoundingClientRect();
  return { x: rect.left, y: rect.top };
};

// Usage:
const element = document.querySelector('.my-element');
const position = getElementPosition(element);
console.log(position); // { x: 100, y: 150 }
```
