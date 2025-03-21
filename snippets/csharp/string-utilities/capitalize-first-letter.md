---
title: Capitalize first letter
description: Makes the first letter of a string uppercase.
author: chaitanya-jvnm
tags: string,capitalize
---

```csharp
public static string Capitalize(this string str) {
  return str.Substring(0, 1).ToUpper() + str.Substring(1);
}

// Usage:
"quicksnip".Capitalize(); // Returns: "Quicksnip"
```
