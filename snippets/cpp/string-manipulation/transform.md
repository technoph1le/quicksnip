---
title: Transform
description: Transform a string with a function
author: majvax
tags: string,transform,c++23
---

```cpp
#include <ranges>
#include <string>

template <typename F>
std::string transform(const std::string& str, F&& transformer) {
    return str
        | std::ranges::views::transform(std::forward<F>(transformer))
        | std::ranges::to<std::string>();
}



// Usage:
std::string str = "Hello, World!";
std::string transformed = transform(str, [](char c){ return std::toupper(c); });
std::cout << transformed << std::endl; // HELLO, WORLD!
```
