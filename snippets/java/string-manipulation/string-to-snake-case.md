---
title: String To snake_case
description: Converts a string into snake_case
author: Mcbencrafter
tags: string,conversion,snake-case
---

```java
public static String stringToSnakeCase(String text) {
    return text.toLowerCase().replaceAll("\\s+", "_");
}

// Usage:
System.out.println(stringToSnakeCase("Hello World 123")); // "hello_world_123"
```