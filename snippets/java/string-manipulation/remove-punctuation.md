---
title: Remove Punctuation
description: Removes punctuation (, . !) from a string
author: Mcbencrafter
tags: string,punctuation,clean,normalization
---

```java
public static String removePunctuation(String text) {
    return text.replaceAll("[,!.?;:]", "");
}

// Usage:
System.out.println(removePunctuation("hello, world!")); // "hello world"
```