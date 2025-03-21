---
title: Remove duplicates
description: Removes duplicate elements from an list
author: Mcbencrafter
tags: list,duplicates,unique
---

```java
import java.util.List;
import java.util.stream.Collectors;

public static <T> List<T> removeDuplicates(List<T> list) {
    return list.stream()
        .distinct()
        .collect(Collectors.toList());
}

// Usage:
List<Integer> list = List.of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5);
List<Integer> result = removeDuplicates(list);
System.out.println("List with duplicates removed: " + result); // [1, 2, 3, 4, 5]
```