---
title: List Files in a Directory
description: Lists all files in a directory and prints their names.
author: Vrindtime
tags: dart,file-manipulation,io,utility
---

```dart
final directory = Directory.current;
final files = directory.listSync();
for (var file in files) {
  print(file.path); // Prints the paths of all files and directories
}
```