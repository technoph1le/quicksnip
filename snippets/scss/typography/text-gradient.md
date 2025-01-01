---
Title: Text Gradient
Description: Adds a gradient color effect to text.
Author: dostonnabotov
Tags: sass,mixin,gradient,text,css
---

```scss
@mixin text-gradient($from, $to) {
  background: linear-gradient(to right, $from, $to);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
