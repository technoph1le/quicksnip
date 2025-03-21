---
title: Truncate String
description: Cut off a string once it reaches a determined amount of characters and add '...' to the end of the string
author: omegaleo
tags: string,truncate
---

```csharp
public static string Truncate(this string value, int maxChars)
{
    return value.Length <= maxChars ? value : value.Substring(0, maxChars) + "...";
}

// Usage:
"Quicksnip".Truncate(5); // Returns: "Quick..."
```
