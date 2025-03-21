---
title: Compound Interest
description: Calculates the compound interest for a given principal, rate, time, and number of times interest applied per time period.
tags: math, finance
author: ashukr07
---

```c
#include <math.h>

// Function to calculate compound interest
double compound_interest(double principal, double rate, double time, int n) {
    return principal * pow(1 + rate / n, n * time);
}

// Usage:
double principal = 1000.0;  // Initial amount
double rate = 0.05;         // Annual interest rate (5%)
double time = 2;            // Time in years
int n = 4;                  // Compounded quarterly

compound_interest(principal, rate, time, n); // Returns: 1104.081632653061
```