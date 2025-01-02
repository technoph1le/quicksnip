---
title: Swap two items at determined indexes
description: Swaps two items at determined indexes
author: omegaleo
tags: csharp,c#,list,utility
---

```csharp
/// <summary>
/// Swaps the position of 2 elements inside of a List
/// </summary>
/// <returns>List with swapped elements</returns>
public static IList<T> Swap<T>(this IList<T> list, int indexA, int indexB)
{
    (list[indexA], list[indexB]) = (list[indexB], list[indexA]);
    return list;
}

var list = new List<string>() {"Test", "Test2"};

Console.WriteLine(list[0]); // Outputs: Test
Console.WriteLine(list[1]); // Outputs: Test2

list = list.Swap(0, 1).ToList();

Console.WriteLine(list[0]); // Outputs: Test2
Console.WriteLine(list[1]); // Outputs: Test
```
