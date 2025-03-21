---
title: Convert Snake Case to Camel Case
description: Converts a snake_case string to camelCase.
author: axorax
tags: string,snake-case,camel-case,convert
---

```py
def snake_to_camel(s):
    parts = s.split('_')
    return parts[0] + ''.join(word.capitalize() for word in parts[1:])

# Usage:
snake_to_camel('hello_world') # Returns: 'helloWorld'
```
