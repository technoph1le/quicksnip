---
title: Check Palindrome
description: Checks if a string reads the same backward as forward, ignoring whitespaces and case sensitivity
author: Mcbencrafter
tags: string,palindrome,compare,reverse
---

```java
public static boolean isPalindrome(String text) {
    String cleanText = text.toLowerCase().replaceAll("\\s+", "");
        
    return new StringBuilder(cleanText)
            .reverse()
            .toString()
            .equals(cleanText);
}

// Usage:
System.out.println(isPalindrome("A man a plan a canal Panama")); // true
```