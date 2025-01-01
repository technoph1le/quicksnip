---
Title: Power Function
Description: Calculates the power of a number.
Author: 0xHouss
Tags: c,math,power,utility
---

```c
int power(int x, int n) {
  int y = 1;

  for (int i = 0; i < n; i++)
    y *= x;

  return y;
}
```
