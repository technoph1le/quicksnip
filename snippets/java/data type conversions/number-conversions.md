---
title: Number Conversions
description: Converts from one numeric data type to other
author: SarvariHarshitha
tags: Integer, Long, Double, Character
---

```java
public class NumericConversions {
    public static void main(String[] args) {

        // int to long

        int i = 200;
        long l = (long) i;
        System.out.println(l);

        // long to int

        long l1 = 12334567L;
        int i1 = (int) l1;
        System.out.println(i1);

        // int to double

        int i2 = 293;
        double d = (double) i2;
        System.out.println(d);

        // double to int

        double d2 = 1374.8;
        int i3 = (int) d2;
        System.out.println(i3);

        // char to int

        char c1 = 'c';
        char c2 = 'H';
        int i4 = (int) c1;
        int i5 = (int) c2;
        System.out.println(i4);
        System.out.println(i5);

        // int to char
        int i6 = 69;
        char c3 = (char) i6;
        System.out.println(c3);
    }
}
```
