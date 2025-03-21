---
title: Aspect Ratio
description: Ensures that elements maintain a specific aspect ratio.
author: technoph1le
tags: aspect-ratio,layout,css
---

```scss
@mixin aspect-ratio($width, $height) {
  position: relative;
  width: 100%;
  padding-top: ($height / $width) * 100%;
  > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```
