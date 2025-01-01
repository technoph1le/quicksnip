---
Title: Slide In From Left
Description: Animates content sliding in from the left.
Author: dostonnabotov
Tags: scss,animation,slide,css
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
