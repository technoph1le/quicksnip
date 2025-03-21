---
title: Count Character Occurrences
description: Counts the occurrences of the specified characters in a given string
author: Mcbencrafter
tags: string,characters,counter,occurence
---

```java
import java.util.List;

public static int countCharacterOccurrences(String text, List<Character> characters) {
    int count = 0;
    
    for (char character : text.toCharArray()) {
        if (characters.indexOf(character) == -1)
            continue;
                
        count++;
    }
    
    return count;
}

// Usage:
System.out.println(countCharacterOccurrences("hello world", List.of('l', 'o'))); // 5
```