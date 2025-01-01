---
title: Remove Duplicates from an Array
description: Removes duplicate elements from an array and prints the result.
author: Vrindtime
tags: dart,array-manipulation,utility
---

```dart
final numbers = [1, 2, 2, 3, 4, 4, 5];
final uniqueNumbers = numbers.toSet().toList();
print(uniqueNumbers); // Prints [1, 2, 3, 4, 5]
```