---
title: Count Words
description: Counts the number of words in a string
author: Mcbencrafter
tags: string,word,count
---

```java
public static int countWords(String text) {
    return text.split("\\s+").length;
}

// Usage:
System.out.println(countWords("hello world")); // 2
```