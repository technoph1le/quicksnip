---
title: snake_case to camelCase
description: Converts a snake_case string into camelCase
author: Mcbencrafter
tags: string,conversion,camel-case,snake-case
---

```java
import java.util.regex.Pattern;

public static String snakeToCamel(String snakeCase) {
    return Pattern.compile("(_)([a-z])")
        .matcher(snakeCase)
        .replaceAll(match -> match.group(2).toUpperCase());
}

// Usage:
System.out.println(snakeToCamel("hello_world")); // "helloWorld"
```