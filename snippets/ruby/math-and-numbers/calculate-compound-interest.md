---
title: Calculate Compound Interest
description: Calculates compound interest for a given principal amount, rate, and time period.
author: ACR1209
contributors: axorax
tags: math,compound interest,finance
---

```rb
def compound_interest(principal, rate, time, n = 1)
    principal * (1 + rate / n) ** (n * time)
end

# Usage:
puts compound_interest(1000, 0.05, 5)   # Output: 1276.2815625000003
puts compound_interest(1000, 0.05, 5, 12) # Output: 1283.3586785035118
```
