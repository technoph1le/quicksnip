---
title: Parse Date from String
description: Parses a date string into a DateTime object and prints it.
author: Vrindtime
tags: dart,date-time,utility
---

```dart
final dateString = "2025-01-01 15:30:00";
final parsedDate = DateTime.parse(dateString);
print(parsedDate); // Prints "2025-01-01 15:30:00.000"
```