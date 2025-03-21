---
title: Normalize Whitespace
description: Replaces consecutive whitespaces with a single space
author: Mcbencrafter
tags: string,whitespace,normalize
---

```java
public static String normalizeWhitespace(String text) {
    return text.replaceAll(" {2,}", " ");
}

// Usage:
System.out.println(normalizeWhitespace("hello   world")); // "hello world"
```