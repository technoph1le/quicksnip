---
title: Validate an international Phone Number
description: Validates an international Phone Number.
author: JanluOfficial
tags: validation,phone,international
---

```js
function validateInternationalPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phoneNumber);
}

// Usage:
validateInternationalPhoneNumber("+1234567890"); // Returns: true
```
