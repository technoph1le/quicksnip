---
title: Validate JWT
description: Validates a JWT.
author: chaitanya-jvnm
tags: jwt,validate
---

```csharp
public static bool ValidateJwt(string token, string secret) {
  var tokenHandler = new JwtSecurityTokenHandler();
  var validationParameters = new TokenValidationParameters {
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret)),
    ValidateIssuer = false,
    ValidateAudience = false
  };
  try {
    tokenHandler.ValidateToken(token, validationParameters, out _);
    return true;
  }
  catch {
    return false
  }
}

// Usage:
string JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
string correctSecret = "your-256-bit-secret";
string wrongSecret = "this-is-not-the-right-secret";

ValidateJwt(JWT, correctSecret); // Returns: true
ValidateJwt(JWT, wrongSecret); // Returns: false
```