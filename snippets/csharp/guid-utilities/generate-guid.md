---
title: Generate GUID
description: Generates a new GUID
author: chaitanya-jvnm
tags: c#,guid,generate,utility
---

```c#
public static string GenerateGuid() {
  return Guid.NewGuid().ToString();
}
```