---
title: Grid Container
description: Creates a responsive grid container with customizable column counts.
author: dostonnabotov
tags: grid,layout,css
---

```scss
@mixin grid-container($columns: 12, $gap: 1rem) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}
```
