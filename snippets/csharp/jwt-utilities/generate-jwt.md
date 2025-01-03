---
title: Generate JWT
description: Generates a new JWT.
author: chaitanya-jvnm
tags: c#,jwt,generate,utility
---

```c#
public static string GenerateJwt(string secret, string issuer, string audience, int expirationMinutes) {
  var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
  var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
  var token = new JwtSecurityToken(issuer, audience, null, expires: DateTime.UtcNow.AddMinutes(expirationMinutes), signingCredentials: credentials);
  return new JwtSecurityTokenHandler().WriteToken(token);
}
```