---
Title: Tabs To Spaces
description: Converts tabs into spaces
author: Mcbencrafter
tags: string,tab,space,conversion
---

```java
public static String convertTabToSpace(String text, int spacesPerTab) {
    return text.replaceAll("\t", " ".repeat(spacesPerTab));
}

// Usage:
System.out.println(convertTabToSpace("hello\tworld", 2)); // "hello  world"
```