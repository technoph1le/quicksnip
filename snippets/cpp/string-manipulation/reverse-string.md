---
title: Reverse String
description: Reverses the characters in a string.
author: Vaibhav-kesarwani
tags: array,reverse
---

```cpp
#include <string>
#include <algorithm>

std::string reverseString(const std::string& input) {
    std::string reversed = input;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}

reverseString("quicksnip"); // Returns: "pinskciuq"
```
