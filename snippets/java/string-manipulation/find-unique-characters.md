---
Title: Find Unique Characters
Description: Returns a set of unique characters from a string, with options to include spaces and control case sensitivity
Author: Mcbencrafter
Tags: string,unique,characters,case-sensitive
---

```java
public static Set<Character> findUniqueCharacters(String text, boolean countSpaces, boolean caseSensitive) {
    Set<Character> uniqueCharacters = new TreeSet<>();
    
    for (char character : text.toCharArray()) {
        if (character == ' ' && !countSpaces)
            continue;
        if (!caseSensitive)
            character = Character.toLowerCase(character);
        uniqueCharacters.add(character);
    }
    
    return uniqueCharacters;
}

// Usage:
System.out.println(findUniqueCharacters("hello world", false, true)); // Output: [d, e, h, l, o, r, w]
```