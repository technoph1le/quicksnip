---
title: Validate GUID
description: Checks if a string is a valid GUID.
author: chaitanya-jvnm
tags: c#,guid,validate,utility
---

```c#
public static bool IsGuid(string str) {
  return Guid.TryParse(str, out _);
}
```