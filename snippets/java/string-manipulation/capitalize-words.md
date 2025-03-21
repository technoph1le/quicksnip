---
title: Capitalize Words
description: Capitalizes the first letter of each word in a string
author: Mcbencrafter
tags: string,capitalize,words
---

```java
public static String capitalizeWords(String text) {
    String[] words = text.split("(?<=\\S)(?=\\s+)|(?<=\\s+)(?=\\S)"); // this is needed to preserve spaces (text.split(" ") would remove multiple spaces)
    StringBuilder capitalizedText = new StringBuilder();
    
    for (String word : words) {
        if (word.trim().isEmpty()) {
            capitalizedText.append(word);
            continue;
        }
        capitalizedText.append(Character.toUpperCase(word.charAt(0)))
                .append(word.substring(1));
    }
    
    return capitalizedText.toString();
}

// Usage:
System.out.println(capitalizeWords("hello  world")); // "Hello  World"
```