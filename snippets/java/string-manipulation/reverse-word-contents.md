---
Title: Reverse Word Contents
Description: Reverses the characters of each word in a string while preserving word order
Author: Mcbencrafter
Tags: string,reverse,words,transformation,order
---

```java
public static String reverseWords(String text) {
    String[] words = text.split("\\s+"); 
    StringBuilder reversedText = new StringBuilder();

    for (String word : words) {
        StringBuilder reversedWord = new StringBuilder(word).reverse();
        reversedText.append(reversedWord).append(" ");
    }

    return reversedText.toString().trim();
}

// Usage:
System.out.println(reverseWordContents("hello world")); // "olleh dlrow"
```