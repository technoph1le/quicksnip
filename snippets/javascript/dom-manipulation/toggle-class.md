---
title: Toggle Class
description: Toggles a class on an element.
author: dostonnabotov
tags: javascript,dom,class,utility
---

```js
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

// Usage:
const element = document.querySelector('.my-element');
toggleClass(element, 'active');
```
