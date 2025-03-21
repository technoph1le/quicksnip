---
title: Fade In Animation
description: Animates the fade-in effect.
author: technoph1le
tags: animation,fade,css
---

```scss
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@mixin fade-in($duration: 1s, $easing: ease-in-out) {
  animation: fade-in $duration $easing;
}
```
