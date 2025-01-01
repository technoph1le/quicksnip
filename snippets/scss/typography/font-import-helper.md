---
Title: Font Import Helper
Description: Simplifies importing custom fonts in Sass.
Author: dostonnabotov
Tags: sass,mixin,fonts,css
---

```scss
@mixin import-font($family, $weight: 400, $style: normal) {
  @font-face {
    font-family: #{$family};
    font-weight: #{$weight};
    font-style: #{$style};
    src: url('/fonts/#{$family}-#{$weight}.woff2') format('woff2'),
         url('/fonts/#{$family}-#{$weight}.woff') format('woff');
  }
}
```
