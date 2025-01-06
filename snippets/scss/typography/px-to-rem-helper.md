---
title: PX to REM Helper
description: This function will convert px values to rem values.
author: gihanrangana
tags: function,pixel,rem,px-to-rem
---

```scss
@function px-to-rem($px, $base: 16px) {
  @return ($px / $base) * 1rem;
}

// Usage:
div {
  font-size: px-to-rem(12px); // Output: 0.75rem
  padding: px-to-rem(16px);   // Output: 1rem
  margin: px-to-rem(32px) // Output 2rem
}
```