---
title: Transform from Snake Case to Pascal Case
description: Converts a Snake Case string to Pascal Case.
author: ACR1209
tags: string,convert,snake-case,pascal-case
---

```rb
def snake_to_pascal(str)
    str.split('_').map.with_index { |word, index| 
        word.capitalize 
    }.join
end

# Usage:
snake_case = "snake_case_to_pascal_case"
puts snake_to_pascal(snake_case) # Output: "SnakeCaseToPascalCase"
```
