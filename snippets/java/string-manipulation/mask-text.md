---
title: Mask Text
description: Masks portions of a string, leaving specific parts at the beginning and end visible while replacing the rest with a specified character
author: Mcbencrafter
tags: string,mask,hide
---

```java
public static String partialMask(String text, int maskLengthStart, int maskLengthEnd, char mask) 
    if (text == null)
        return null;
    
    StringBuilder maskedText = new StringBuilder();
    maskedText.append(text, 0, maskLengthStart);
    
    for (int currentChar = maskLengthStart; currentChar < text.length(); currentChar++) {
        maskedText.append(mask);
    }
    maskedText.append(text, text.length() - maskLengthEnd, text.length());
    return maskedText.toString();
}

// Usage:
System.out.println(partialMask("1234567890", 4, 2, '*')); // "1234****90"
```