---
title: Smooth Scroll to Element
description: Scrolls smoothly to a specified element.
author: dostonnabotov
tags: javascript,dom,scroll,ui
---

```js
const smoothScroll = (element) => {
  element.scrollIntoView({ behavior: 'smooth' });
};

// Usage:
const target = document.querySelector('#target');
smoothScroll(target);
```
