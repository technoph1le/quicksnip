---
title: Toggle a CSS Class on an Element
description: Toggle a CSS class on an HTML element.
author: JanluOfficial
tags: css,style
---

```js
function toggleClass(element, className) {
    if (element && className) {
        element.classList.toggle(className);
    }
}

// Usage:
const myElement = document.getElementById("myElement");
toggleClass(myElement, "myClass");
```