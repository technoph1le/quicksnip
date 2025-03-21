---
Title: Reverse Word Order
Description: Reverses the order of words in a sentence while preserving the content of each word
Author: Mcbencrafter
Tags: string,reverse,words,transformation,sentence
---

```java
public static String reverseWords(String text) {
    String[] words = text.split("\\s+");
    StringBuilder reversedSentence = new StringBuilder();

    for (int currentWord = words.length - 1; currentWord >= 0; currentWord--) {
        reversedSentence.append(words[currentWord]).append(" ");
    }

    return reversedSentence.toString().trim();
}

// Usage:
System.out.println(reverseWords("hello world")); // Output: world hello
```