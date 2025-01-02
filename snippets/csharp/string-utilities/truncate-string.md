---
title: Truncate a String
description: Cut off a string once it reaches a determined amount of characters and add '...' to the end of the string
author: omegaleo
tags: csharp,c#,list,utility
---

```csharp
/// <summary>
/// Cut off a string once it reaches a <paramref name="maxChars"/> amount of characters and add '...' to the end of the string
/// </summary>
public static string Truncate(this string value, int maxChars)
{
    return value.Length <= maxChars ? value : value.Substring(0, maxChars) + "...";
}

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique rhoncus bibendum. Vivamus laoreet tortor vel neque lacinia, nec rhoncus ligula pellentesque. Nullam eu ornare nibh. Donec tincidunt viverra nulla.";

Console.WriteLine(str); // Outputs the full string
Console.WriteLine(str.Truncate(5)); // Outputs Lorem...
```
