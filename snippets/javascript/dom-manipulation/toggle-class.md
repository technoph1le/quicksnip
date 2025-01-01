---
Title: Toggle Class
Description: Toggles a class on an element.
Author: dostonnabotov
Tags: javascript,dom,class,utility
---

```js
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

// Usage:
const element = document.querySelector('.my-element');
toggleClass(element, 'active');
```
