---
title: Generate GUID
description: Generates a new GUID
author: chaitanya-jvnm
tags: guid,generate
---

```csharp
public static string GenerateGuid() {
  return Guid.NewGuid().ToString();
}

// Usage:
GenerateGuid(); // Returns: 1c4c38d8-64e4-431b-884a-c6eec2ab02cd (Uuid is random)
```
