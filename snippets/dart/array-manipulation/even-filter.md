---
title: Filter a List
description: Filters a list to include only even numbers.
author: Vrindtime
tags: dart,collections,list,utility
---

```dart
final numbers = [1, 2, 3, 4, 5, 6];
final evens = numbers.where((n) => n.isEven).toList();
print(evens); // Prints [2, 4, 6]
```