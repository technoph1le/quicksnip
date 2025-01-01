---
Title: Factorial Function
Description: Calculates the factorial of a number.
Author: 0xHouss
Tags: c,math,factorial,utility
---

```c
int factorial(int x) {
  int y = 1;

  for (int i = 2; i <= x; i++)
    y *= i;

  return y;
}
```
