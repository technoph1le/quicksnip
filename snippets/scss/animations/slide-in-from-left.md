---
title: Slide In From Left
description: Animates content sliding in from the left.
author: technoph1le
tags: animation,slide,css
---

```scss
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@mixin slide-in-left($duration: 0.5s, $easing: ease-out) {
  animation: slide-in-left $duration $easing;
}
```
