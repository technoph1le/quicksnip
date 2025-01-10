---
title: Add a CSS Class to an element
description: Add a CSS class to a HTML element.
author: JanluOfficial
tags: css,style
---

```js
function addClass(element, className) {
    if (element && className) {
        element.classList.add(className);
    }
}

// Usage:
const myElement = document.getElementById("myElement");
addClass(myElement, "myClass");
```