---
title: Count Occurrences
description: Counts occurrences of a substring, uses modern C++ 20
author: beast177
tags: cpp,string
---

```cpp
#include <iostream>
#include <string>
#include <string_view>

static size_t countOccurrences(std::string_view text, std::string_view substr) {
        size_t count = 0;
        size_t pos = 0;
        while ((pos = text.find(substr, pos)) != std::string_view::npos) {
            ++count;
            pos += substr.length();
        }
        return count;
}

// use case --

int main(){
    // Count and replace
    std::string text = "Hello, world";

    auto count = countOccurrences(text, "l");
    std::cout << std::format("Count of 'l': {}\n", count); // output -> Count of 'l' : 3
}
```