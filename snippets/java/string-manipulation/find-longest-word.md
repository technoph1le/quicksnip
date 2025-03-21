---
title: Find Longest Word
description: Returns the longest word in a string
author: Mcbencrafter
tags: string,length,words
---

```java
public static String findLongestWord(String text) {
    String[] words = text.split("\\s+");
    String longestWord = words[0];
    
    for (String word : words) {
        if (word.length() <= longestWord.length())
            continue;
            
        longestWord = word;
    }

    return longestWord;
}

// Usage:
System.out.println(findLongestWord("hello world123")); // "world123"
```