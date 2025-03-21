---
title: Swap items at index
description: Swaps two items at determined indexes
author: omegaleo
tags: list,swapping
---

```csharp
public static IList<T> Swap<T>(this IList<T> list, int indexA, int indexB)
{
    (list[indexA], list[indexB]) = (list[indexB], list[indexA]);
    return list;
}

var list = new List<string>() {"Test", "Test2"};

list.Swap(0, 1); // Swaps "Test" and "Test2" in place
```
