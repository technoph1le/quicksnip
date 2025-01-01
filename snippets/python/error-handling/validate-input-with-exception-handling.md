---
Title: Validate Input with Exception Handling
Description: Validates user input and handles invalid input gracefully.
Author: axorax
Tags: python,error-handling,validation,utility
---

```py
def validate_positive_integer(input_value):
    try:
        value = int(input_value)
        if value < 0:
            raise ValueError("The number must be positive")
        return value
    except ValueError as e:
        return f"Invalid input: {e}"

# Usage:
print(validate_positive_integer('10'))  # Output: 10
print(validate_positive_integer('-5'))  # Output: Invalid input: The number must be positive
print(validate_positive_integer('abc'))  # Output: Invalid input: invalid literal for int() with base 10: 'abc'
```
