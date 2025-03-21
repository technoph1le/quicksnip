---
title: String To camelCase
description: Converts a string into camelCase
author: Mcbencrafter
tags: string,conversion,camel-case
---

```java
public static String stringToCamelCase(String text) {
    String[] words = text.split("\\s+");
    StringBuilder camelCase = new StringBuilder(
        words[0].substring(0, 1).toLowerCase() + words[0].substring(1)
    );

    for (int i = 1; i < words.length; i++) {
        camelCase.append(words[i].substring(0, 1).toUpperCase());
        camelCase.append(words[i].substring(1));
    }

    return camelCase.toString();
}

// Usage:
System.out.println(stringToCamelCase("Hello world test")); // "helloWorldTest"
```