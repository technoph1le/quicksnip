---
title: camelCase to snake_case
description: Converts a camelCase string into snake_case
author: Mcbencrafter
tags: string,conversion,camel-case,snake-case
---

```java
public static String camelToSnake(String camelCase) {
    return camelCase.replaceAll("([a-z])([A-Z])", "$1_$2").toLowerCase();
}

// Usage:
System.out.println(camelToSnake("helloWorld")); // "hello_world"
```