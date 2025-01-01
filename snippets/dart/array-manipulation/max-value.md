---
title: Find Maximum in an Array
description: Finds and prints the maximum value in an array.
author: Vrindtime
tags: dart,array-manipulation,utility
---

```dart
final numbers = [3, 7, 2, 9, 4];
final maxNumber = numbers.reduce((a, b) => a > b ? a : b);
print(maxNumber); // Prints 9
```