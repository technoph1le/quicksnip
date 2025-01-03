---
title: Text Overflow Ellipsis
description: Ensures long text is truncated with an ellipsis.
author: dostonnabotov
tags: mixin,text,css
---

```scss
@mixin text-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```
