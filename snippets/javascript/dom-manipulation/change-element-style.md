---
Title: Change Element Style
Description: Changes the inline style of an element.
Author: axorax
Tags: javascript,dom,style,utility
---

```js
const changeElementStyle = (element, styleObj) => {
  Object.entries(styleObj).forEach(([property, value]) => {
    element.style[property] = value;
  });
};

// Usage:
const element = document.querySelector('.my-element');
changeElementStyle(element, { color: 'red', backgroundColor: 'yellow' });
```
