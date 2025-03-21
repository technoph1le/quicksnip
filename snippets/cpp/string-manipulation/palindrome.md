---
title: Palindrome
description: Check if a string is a palindrome or not.
author: majvax
tags: string,c++23
---

```cpp
#include <string>
#include <ranges>
#include <algorithm>

bool is_palindrome(const std::string& str) {
    std::string sanitized_string = str
        | std::ranges::views::filter([](char c){ return std::isalnum(c); })
        | std::ranges::views::transform([](char c){ return std::tolower(c); })
        | std::ranges::to<std::string>();
    
    return std::ranges::equal(sanitized_string, sanitized_string | std::views::reverse);
}



// Usage:
bool pal = is_palindrome("A man, a plan, a canal, Panama"); // true
```
