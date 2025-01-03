---
title: Button ElevatedButton
description: Display a button with a border and elevation set automatically
author: CreeperFarm
tags: button,flutter,widget
---

```dart
ElevatedButton(
  onPressed: () {
    // Do something when the button is pressed
  },
  child: Text('Click me!'),// Display the text Click me!
) 

// If you want a button with an icon
ElevatedButton.icon(
  onPressed: () {
    // Do something when the button is pressed
  },
  icon: Icon(Icons.add), // Show the add icon
  label: Text('Add'), // Display the text Add
)
```
