---
title: Password Generator
description: Generates a random string with specified length and character set, including options for letters, numbers, and special characters 
author: Mcbencrafter
tags: string,password,generator,security,random,token
---

```java
public static String randomString(int length, boolean useLetters, boolean useNumbers, boolean useSpecialCharacters) {
    String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    String numbers = "0123456789";
    String specialCharacters = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    
    String allowedCharacters = "";
    
    if (useLetters)
        allowedCharacters += characters;

    if (useNumbers)
        allowedCharacters += numbers;

    if (useSpecialCharacters)
        allowedCharacters += specialCharacters;

    SecureRandom random = new SecureRandom();
    StringBuilder result = new StringBuilder(length);

    for (int i = 0; i < length; i++) {
        int index = random.nextInt(allowedCharacters.length());
        result.append(allowedCharacters.charAt(index));
    }

    return result.toString();
}

// Usage:
System.out.println(randomString(10, true, true, false)); // Random string containing letters, numbers but no special characters with 10 characters
```