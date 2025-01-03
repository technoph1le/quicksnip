---
title: Generate Random String
description: Generates a random alphanumeric string.
author: dostonnabotov
tags: random,string
---

```py
import random
import string

def random_string(length):
    letters_and_digits = string.ascii_letters + string.digits
    return ''.join(random.choice(letters_and_digits) for _ in range(length))

# Usage:
random_string(10) # Results: Random 10-character string
```
