---
title: Validate a Credit Card Number
description: Validates a Credit Card Number for a variety of major international credit card formats, including Visa, MasterCard, American Expres, Diners Club and JCB.
author: JanluOfficial
tags: validation,url
---

```js
function validateCreditCardNumber(cardNumber) {
    const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/;
    return cardRegex.test(cardNumber);
}

// Usage:
validateCreditCardNumber("4111111111111111"); // Returns: true
```
