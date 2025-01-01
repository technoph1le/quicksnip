---
title: Add Duration to DateTime
description: Adds a specified duration to a DateTime object and prints the result.
author: Vrindtime
tags: dart,date-time,utility
---

```dart
final now = DateTime.now();
final future = now.add(Duration(days: 7,hours: 10,minutes: 5,seconds: 2,microseconds: 100,milliseconds: 50));
print(future); // Prints the date and time 7 days, 10 hours, 5 minutes, 2 seconds, 100 microseconds and 50 miliseconds from now
```