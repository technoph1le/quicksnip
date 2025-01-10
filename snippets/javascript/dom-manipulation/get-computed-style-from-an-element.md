---
title: Get Computed Style from an Element
description: Retrieve the computed style of a specific CSS property from an HTML element.
author: JanluOfficial
tags: css,style
---

```js
function getComputedStyle(element, styleProp) {
    if (element && styleProp) {
        return window.getComputedStyle(element, null).getPropertyValue(styleProp);
    }
    return null;
}

// Usage:
const myElement = document.getElementById("myElement");
toggleClass(myElement, "background-color");
```