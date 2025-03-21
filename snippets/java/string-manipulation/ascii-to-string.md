---
title: Ascii To String
description: Converts a list of ascii numbers into a string
author: Mcbencrafter
tags: string,ascii,encoding,decode,conversion
---

```java
import java.util.List;

public static String asciiToString(List<Integer> asciiCodes) {
    StringBuilder text = new StringBuilder();

    for (int asciiCode : asciiCodes) {
        text.append((char) asciiCode);
    }

    return text.toString();
}

// Usage:
System.out.println(asciiToString(List.of(104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100))); // "hello world"
```