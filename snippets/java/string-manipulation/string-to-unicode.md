---
title: String To Unicode
description: Converts characters of a string into their unicode representation
author: Mcbencrafter
tags: string,unicode,encoding,conversion
---

```java
public static String stringToUnicode(String text) {
    StringBuilder unicodeText = new StringBuilder();

    for (char character : text.toCharArray()) {
        unicodeText.append(String.format("\\u%04x", (int) character));
    }

    return unicodeText.toString();
}

// Usage:
System.out.println(stringToUnicode("hello world")); // \u0068\u0065\u006C\u006C\u006F\u0020\u0077\u006F\u0072\u006C\u0064
```