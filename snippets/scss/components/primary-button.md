---
title: Primary Button
description: Generates a styled primary button.
author: technoph1le
tags: button,primary,css
---

```scss
@mixin primary-button($bg: #007bff, $color: #fff) {
  background-color: $bg;
  color: $color;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken($bg, 10%);
  }
}
```
