---
title: Decode JWT
description: Decodes a JWT.
author: chaitanya-jvnm
tags: c#,jwt,decode,utility
---

```c#
/// <summary>
/// Decodes the JWT
/// <summary>
public static string DecodeJwt(string token) {
  return new JwtSecurityTokenHandler().ReadJwtToken(token).ToString();
}

//Example
string token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

string decodedJwt = DecodeJwt(token);

Console.WriteLine(decodedJwt); //Prints {"alg":"HS256","typ":"JWT"}.{"sub":"1234567890","name":"John Doe","iat":1516239022}
```