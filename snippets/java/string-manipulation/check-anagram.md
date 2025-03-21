---
title: Check Anagram
description: Checks if two strings are anagrams, meaning they contain the same characters ignoring order, spaces and case sensitivity
author: Mcbencrafter
tags: string,anagram,compare,arrays
---

```java
import java.util.Arrays;

public static boolean isAnagram(String text1, String text2) {
    String text1Normalized = text1.replaceAll("\\s+", "");
    String text2Normalized = text2.replaceAll("\\s+", "");

    if (text1Normalized.length() != text2Normalized.length())
        return false;
        
    char[] text1Array = text1Normalized.toCharArray();
    char[] text2Array = text2Normalized.toCharArray();
    Arrays.sort(text1Array);
    Arrays.sort(text2Array);
    return Arrays.equals(text1Array, text2Array);
}

// Usage:
System.out.println(isAnagram("listen", "silent")); // true
System.out.println(isAnagram("hello", "world"));   // false
```