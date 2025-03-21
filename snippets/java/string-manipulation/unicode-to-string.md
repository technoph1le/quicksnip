---
title: Unicode To String
description: Converts a unicode String into its normal representation
author: Mcbencrafter
tags: string,unicode,encoding,decoding,conversion
---

```java
public static String unicodeToString(String unicode) {
    StringBuilder string = new StringBuilder();
    String[] hex = unicode.split("\\\\u");

    for (int symbol = 1; symbol < hex.length; symbol++) {
        int data = Integer.parseInt(hex[symbol], 16);
        string.append((char) data);
    }

    return string.toString();
}

// Usage:
System.out.println(unicodeToString("\\u0068\\u0065\\u006c\\u006c\\u006f\\u0020\\u0077\\u006f\\u0072\\u006c\\u0064")); // "hello world"
```