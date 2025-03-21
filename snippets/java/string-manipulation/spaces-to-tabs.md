---
Title: Spaces To Tabs
description: Converts spaces into tabs
author: Mcbencrafter
tags: string,tab,space,conversion
---

```java
public static String convertSpacesToTab(String text, int spacesPerTab) {
    return text.replaceAll(" ".repeat(spacesPerTab), "\t");
}

// Usage:
System.out.println(convertSpacesToTab("hello    world", 4)); // Output: hello\tworld
```