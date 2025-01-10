---
title: Validate an Email Adress
description: Validates an Email Adress
author: JanluOfficial
tags: validation,email
---

```js
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Usage:
validateEmail("test@example.com"); // Returns: true
```
