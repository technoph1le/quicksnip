---
title: Box Shadow Helper
description: Generates a box shadow with customizable values.
author: dostonnabotov
tags: box-shadow,css,effects
---

```scss
@mixin box-shadow($x: 0px, $y: 4px, $blur: 10px, $spread: 0px, $color: rgba(0, 0, 0, 0.1)) {
  box-shadow: $x $y $blur $spread $color;
}
```
