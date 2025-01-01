---
title: Delete a File
description: Deletes a specified file and prints a confirmation.
author: Vrindtime
tags: dart,file-manipulation,io,utility
---

```dart
final file = File('example.txt');
if (await file.exists()) {
   await file.delete(); //remember to use aync modifier in the function
   print('File deleted successfully.');
} else {
   print('File does not exist.');
}
```