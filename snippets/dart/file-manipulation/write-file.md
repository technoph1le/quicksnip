---
title: Write to a File
description: Writes text to a file and prints a confirmation.
author: Vrindtime
tags: dart,file-manipulation,io,utility
---

```dart
final file = File('example.txt');
await file.writeAsString('Hello, Dart!'); //remember to use aync modifier in the function
print('File written successfully.');
```