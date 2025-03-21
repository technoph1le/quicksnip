---
title: Remove Special Characters
description: Removes any character which is not alphabetic (A-Z, a-z) or numeric (0-9)
author: Mcbencrafter
tags: string,special-characters,clean,normalization
---

```java
public static String removeSpecialCharacters(String text) {
    return text.replaceAll("[^a-zA-Z0-9]", "");
}

// Usage:
System.out.println(removeSpecialCharacters("hello, world!#%")); // "hello world"
```