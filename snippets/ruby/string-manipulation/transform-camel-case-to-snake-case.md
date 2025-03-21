---
title: Transform Camel Case to Snake Case
description: Converts a Camel or Pascal Case string to Snake case.
author: ACR1209
tags: string,convert,camel-case,snake-case,pascal-case
---

```rb
def camel_to_snake(str)
    str.gsub(/([A-Z])/, '_\1').sub(/^_/, '').downcase
end

# Usage:
camel_case = "camelCaseToSnakeCase"
pascal_case = "PascalCaseToSnakeCase"
puts camel_to_snake(camel_case) # Output: "camel_case_to_snake_case"
puts camel_to_snake(pascal_case) # Output: "pascal_case_to_snake_case"
```