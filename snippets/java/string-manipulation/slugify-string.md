---
title: Slugify String
description: Converts a string into a URL-friendly slug format
author: Mcbencrafter
tags: string,slug,slugify
---

```java
public static String slugify(String text, String separator) {
    if (text == null)
        return "";

    // used to decompose accented characters to their base characters (e.g. "é" to "e")
    String normalizedString = Normalizer.normalize(text, Normalizer.Form.NFD);
    normalizedString = normalizedString.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");

    String slug = normalizedString.trim()
            .toLowerCase()
            .replaceAll("\\s+", separator)
            .replaceAll("[^a-z0-9\\-_" + separator + "]", "")
            .replaceAll("_", separator)
            .replaceAll("-", separator)
            .replaceAll(separator + "+", separator)
            .replaceAll(separator + "$", "");

    return slug;
}

// Usage:
System.out.println(slugify("Hello World-#123-é", "-")); // "hello-world-123-e"
```