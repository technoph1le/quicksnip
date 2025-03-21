---
title: String To param-case
description: Converts a string into param-case
author: Mcbencrafter
tags: string,conversion,param-case
---

```java
public static String stringToParamCase(String text) {
    return text.toLowerCase().replaceAll("\\s+", "-");
}

// Usage:
System.out.println(stringToParamCase("Hello World 123")); // "hello-world-123"
```