---
title: Truncate String
description: Truncates a string after a specified length (can also be used for hiding information)
author: Mcbencrafter
tags: string,truncate,mask,hide
---

```java
public static String truncate(String text, int length, String suffix) {
    if (text.length() <= length)
        return text;
    
    return text.substring(0, length).trim() + (suffix != null ? suffix : "");
}

// Usage:
System.out.println(truncate("hello world", 5, "...")); // "hello..."
```