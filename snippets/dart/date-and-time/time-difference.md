---
title: Calculate Time Difference
description: Calculates the difference between two DateTime objects in days, hours, and minutes.
author: Vrindtime
tags: dart,date-time,utility
---

```dart
final start = DateTime(2025, 1, 1, 12, 0);
final end = DateTime(2025, 1, 2, 14, 30);
final difference = end.difference(start);
print('Days: ${difference.inDays}, Hours: ${difference.inHours}, Minutes: ${difference.inMinutes}'); 
// Prints "Days: 1, Hours: 26, Minutes: 1590"
```
