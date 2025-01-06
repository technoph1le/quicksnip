---
title: Truncate String
description: Truncates a string to a specified length, optionally adding an ellipsis.
author: ACR1209
tags: string,truncate
---

```rb
def truncate_string(str, max_length)
    return str if str.length <= max_length || max_length <= 3
    str[0, max_length - 3] + '...'
end

# Usage:
long_string = "Ruby is a dynamic, open source programming language."
puts truncate_string(20, long_string) # Output: "Ruby is a dynamic..."
puts truncate_string(54, long_string) # Output: "Ruby is a dynamic, open source programming language."
```
