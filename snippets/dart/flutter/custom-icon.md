---
title: Custom Icon
description: Display a custom icon from an .svg file, with the file inside the assets folder. The following code must be added to a components folder then icons folder inside the lib folder. This code should be inside a file called custom_icon.dart . You must have the package flutter_svg in your pubspec.yaml file.
author: CreeperFarm
tags: widget,icon,svg
---

```dart
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CustomIcon extends StatelessWidget {
  Color iconColor;
  final String iconName;
  final double? height;

  CustomIcon({required this.iconColor, required this.iconName, this.height, super.key});

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(
      'assets/icons/$iconName.svg', // The path to the .svg file
      colorFilter: ColorFilter.mode(iconColor, BlendMode.srcIn), // Change the icon's color
      height: height?.toDouble(), // If the height is null, it will be be set as the svg's default height
    );
  }
}

// Usage:
CustomIcon(
  iconColor: Colors.red, // Set the icon's color
  iconName: 'icon_name', // Set the icon's name
  height: 24, // Set the icon's height
)
```
