---
title: Read a File
description: Reads the content of a file and prints it to the console.
author: Vrindtime
tags: dart,file-manipulation,io,utility
---

```dart
final file = File('example.txt');
final content = await file.readAsString();
print(content); // Prints the content of the file
```