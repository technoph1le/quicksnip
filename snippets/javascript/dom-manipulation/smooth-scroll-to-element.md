---
Title: Smooth Scroll to Element
Description: Scrolls smoothly to a specified element.
Author: dostonnabotov
Tags: javascript,dom,scroll,ui
---

```js
const smoothScroll = (element) => {
  element.scrollIntoView({ behavior: 'smooth' });
};

// Usage:
const target = document.querySelector('#target');
smoothScroll(target);
```
