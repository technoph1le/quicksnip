---
Title: Line Clamp Mixin
Description: A Sass mixin to clamp text to a specific number of lines.
Author: dostonnabotov
Tags: sass,mixin,typography,css
---

```scss
@mixin line-clamp($number) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $number;
  overflow: hidden;
}
```
