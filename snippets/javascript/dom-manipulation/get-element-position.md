---
title: Get Element Position
description: Gets the position of an element relative to the viewport.
author: axorax
tags: javascript,dom,position,utility
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
