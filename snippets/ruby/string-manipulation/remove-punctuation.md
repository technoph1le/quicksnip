---
title: Remove Punctuation
description: Removes all punctuation from a given string.
author: ACR1209
tags: string,punctuation,remove
---

```rb
def remove_punctuation(str)
    str.gsub(/[[:punct:]]/, '')
end

# Usage:
text = "Hello, Ruby! How's it going?"
puts remove_punctuation(text) # Output: "Hello Ruby Hows it going"
```
