---
title: Validate a US Phone Number
description: Validates a phone number from the United States of America.
author: JanluOfficial
tags: validation,phone,united-states
---

```js
function validateUSPhoneNumber(phoneNumber) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phoneNumber);
}

// Usage:
validateUSPhoneNumber("123-456-7890"); // Returns: true
```
