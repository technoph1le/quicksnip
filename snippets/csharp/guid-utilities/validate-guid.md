---
title: Validate GUID
description: Checks if a string is a valid GUID.
author: chaitanya-jvnm
tags: guid,validate
---

```csharp
public static bool IsGuid(string str) {
  return Guid.TryParse(str, out _);
}

// Usage:
IsGuid("1c4c38d8-64e4-431b-884a-c6eec2ab02cd"); // Returns: true
IsGuid("quicksnip"); // Returns: false
```