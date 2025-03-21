---
title: String To Ascii
description: Converts a string into ascii numbers
author: Mcbencrafter
tags: string,ascii,encoding,conversion
---

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> stringToAscii(String text) {
    List<Integer> asciiCodes = new ArrayList<>();

    for (char character : text.toCharArray()) {
        asciiCodes.add((int) character);
    }

    return asciiCodes;
}

// Usage:
System.out.println(stringToAscii("hello world")); // [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
```