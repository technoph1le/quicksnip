---
Title: Grid Container
Description: Creates a responsive grid container with customizable column counts.
Author: dostonnabotov
Tags: scss,grid,layout,css
---

```scss
@mixin grid-container($columns: 12, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}
```
