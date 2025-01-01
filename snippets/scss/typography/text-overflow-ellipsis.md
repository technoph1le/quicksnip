---
Title: Text Overflow Ellipsis
Description: Ensures long text is truncated with an ellipsis.
Author: dostonnabotov
Tags: sass,mixin,text,css
---

```scss
@mixin text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
