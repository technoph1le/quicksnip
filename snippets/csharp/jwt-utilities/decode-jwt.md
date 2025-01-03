---
title: Decode JWT
description: Decodes a JWT.
author: chaitanya-jvnm
tags: jwt,decode
---

```csharp
public static string DecodeJwt(string token) {
  return new JwtSecurityTokenHandler().ReadJwtToken(token).ToString();
}

// Usage:
string token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
DecodeJwt(token); // Returns: "{\"alg\":\"HS256\",\"typ\":\"JWT\"}.{\"sub\":\"1234567890\",\"name\":\"John Doe\",\"iat\":1516239022}"
```
