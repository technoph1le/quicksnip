---
title: Check if a String is a Palindrome
description: Checks if a string is a palindrome and prints the result.
author: Vrindtime
tags: dart,string-manipulation,utility
---

```dart
final input = 'madam';
final isPalindrome = input == input.split('').reversed.join('');
print(isPalindrome); // Prints true
```