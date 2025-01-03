---
title: String to Boolean
description: Converts String type to Boolean type
author: SarvariHarshitha
tags: String, Boolean, type-conversion
---

```java
public class StringandBoolean {
    public static void main(String[] args) {

        // String to Boolean
        String s1 = "Hi"; // prints false
        String s2 = "true";
        boolean b1 = Boolean.parseBoolean(s2);
        System.out.println(b1);

        // Boolean to String

        boolean b2 = true; 
        String s3 = String.valueOf(b2);
        System.out.println(s3);
        System.out.println(Boolean.toString(b2));
    }
}
```