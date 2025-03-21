---
title: Text Overflow Ellipsis
description: Ensures long text is truncated with an ellipsis.
author: technoph1le
tags: mixin,text,css
---

```scss
@mixin text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
