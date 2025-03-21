---
title: Clearfix
description: Provides a clearfix utility for floating elements.
author: technoph1le
tags: clearfix,utility,css
---

```scss
@mixin clearfix {
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
```
