---
Title: Primary Button
Description: Generates a styled primary button.
Author: dostonnabotov
Tags: scss,button,primary,css
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
