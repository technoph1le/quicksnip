---
title: Count Character Frequency
description: Counts the frequency of each character in a string
author: Mcbencrafter
tags: string,character,frequency,character-frequency
---

```java
public static Map<Character, Integer> characterFrequency(String text, boolean countSpaces, boolean caseSensitive) {
    Map<Character, Integer> frequencyMap = new HashMap<>();

    for (char character : text.toCharArray()) {
        if (character == ' ' && !countSpaces)
            continue;

        if (!caseSensitive)
            character = Character.toLowerCase(character);

        frequencyMap.put(character, frequencyMap.getOrDefault(character, 0) + 1);
    }

    return frequencyMap;
}

// Usage:
System.out.println(characterFrequency("hello world", false, false)); // {r=1, d=1, e=1, w=1, h=1, l=3, o=2}
```