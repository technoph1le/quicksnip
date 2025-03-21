---
title: Transform from Snake Case to Camel Case
description: Converts a Snake Case string to Camel Case.
author: ACR1209
tags: string,convert,snake-case,camel-case
---

```rb
def snake_to_camel(str)
    str.split('_').map.with_index { |word, index| 
        index == 0 ? word : word.capitalize 
    }.join
end

# Usage:
snake_case = "snake_case_to_camel_case"
puts snake_to_camel(snake_case) # Output: "snakeCaseToCamelCase"
```
