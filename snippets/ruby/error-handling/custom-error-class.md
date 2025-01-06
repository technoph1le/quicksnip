---
title: Custom Error Class
description: Defines and raises a custom error class in Ruby.
author: ACR1209
tags: error handling,custom error
---

```rb
class MyCustomError < StandardError; end

def risky_method(value)
    raise MyCustomError, "Value must be positive" if value <= 0
    "Valid value: #{value}"
end

# Usage:
begin
    puts risky_method(-1)
rescue MyCustomError => e
    puts e.message # Output: "Value must be positive"
end
```