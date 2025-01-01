---
title: Power Function
description: Calculates the power of a number.
author: 0xHouss
tags: c,math,power,utility
---

```c
int power(int x, int n) {
  int y = 1;

  for (int i = 0; i < n; i++)
    y *= x;

  return y;
}
```
