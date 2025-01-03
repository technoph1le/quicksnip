---
title: Button InkWell
description: Display a button who is clickable in his whole area where his child is displayed
author: CreeperFarm
tags: button,widget
---

```dart
InkWell(
  onTap: () {
    // Do something when the button is pressed
  },
  child: Container( // Create a container to hold any widget
    padding: EdgeInsets.all(12.0),
    child: Text('Click me!'), // Display the text Click me!
  ),
)
```
