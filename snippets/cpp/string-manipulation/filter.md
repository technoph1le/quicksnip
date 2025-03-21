---
title: Filter
description: Filter a string with a predicate function
author: majvax
tags: string,filtering,c++23
---

```cpp
#include <ranges>
#include <string>

template <typename P>
std::string filter(const std::string& str, P&& predicate) {
    return str
        | std::ranges::views::filter(std::forward<P>(predicate))
        | std::ranges::to<std::string>();
}



// Usage:
std::string str = "Hello, World!";
std::string filtered = filter(str, [](char c){ return std::isalpha(c); });
std::cout << filtered << std::endl; // HelloWorld
```
