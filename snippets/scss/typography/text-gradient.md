---
title: Text Gradient
description: Adds a gradient color effect to text.
author: technoph1le
tags: mixin,gradient,text,css
---

```scss
@mixin text-gradient($from, $to) {
  background: linear-gradient(to right, $from, $to);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
