---
title: Append to a File
description: Appends text to an existing file and prints a confirmation.
author: Vrindtime
tags: dart,file-manipulation,io,utility
---

```dart
final file = File('example.txt');
await file.writeAsString('Appended text.', mode: FileMode.append); //remember to use aync modifier in the function
print('Text appended successfully.');
```