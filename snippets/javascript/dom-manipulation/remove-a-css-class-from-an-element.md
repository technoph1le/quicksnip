---
title: Remove a CSS Class from an element
description: Remove a CSS class from a HTML element.
author: JanluOfficial
tags: css,style
---

```js
function removeClass(element, className) {
    if (element && className) {
        element.classList.remove(className);
    }
}

// Usage:
const myElement = document.getElementById("myElement");
removeClass(myElement, "myClass");
```