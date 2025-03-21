---
title: Extract Text Between Delimiters
description: Extracts a text between two given delimiters from a string
author: Mcbencrafter
tags: string,delimiters,start,end
---

```java
public static String extractBetweenDelimiters(String text, String start, String end) {
    int startIndex = text.indexOf(start);
    int endIndex = text.indexOf(end, startIndex + start.length());
    
    if (startIndex == -1 || endIndex == -1)
        return "";
    
    return text.substring(startIndex + start.length(), endIndex);
}

// Usage:
System.out.println(extractBetweenDelimiters("hello, world!", ",", "!")); // " world"
```