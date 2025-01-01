---
title: Format DateTime
description: Formats a DateTime object into a human-readable string.
author: Vrindtime
tags: dart,date-time,utility
---

```dart
final now = DateTime.now();
final formattedDate = DateFormat('yyyy-MM-dd – kk:mm').format(now);
print(formattedDate); // Prints the formatted date, e.g., "2025-01-01 – 14:35"
```