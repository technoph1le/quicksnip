---
title: String To PascalCase
description: Converts a string into PascalCase
author: Mcbencrafter
tags: string,conversion,pascal-case
---

```java
public static String stringToPascalCase(String text) {
    String[] words = text.split("\\s+");
    StringBuilder pascalCase = new StringBuilder();

    for (String word : words) {
        pascalCase.append(word.substring(0, 1).toUpperCase());
        pascalCase.append(word.substring(1).toLowerCase());
    }

    return pascalCase.toString();
}

// Usage:
System.out.println(stringToPascalCase("hello world")); // "HelloWorld"
```