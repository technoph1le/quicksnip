---
title: Line Clamp Mixin
description: A Sass mixin to clamp text to a specific number of lines.
author: technoph1le
tags: mixin,typography,css
---

```scss
@mixin line-clamp($number) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $number;
  overflow: hidden;
}
```
