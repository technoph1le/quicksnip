---
title: Remove duplicates
description: Removes duplicates from an vector of ints
author: AnkushRoy-code
tags: vector,remove,duplicate
contributor: majvax
---

```cpp
#include <algorithm>
#include <vector>

bool removeDuplicates(std::vector<int> &input) noexcept {
    if (input.empty()) return false;
    const auto size = input.size();
    std::sort(input.begin(), input.end());

    auto last = std::unique(input.begin(), input.end()); // remove duplicates
    input.erase(last, input.end()); // resize vector and delete the undefined elements

    return size != input.size();
}



// Usage:
std::vector<int> vec = {4, 2, 2, 8, 5, 6, 9, 9, 9, 8, 8, 4};
removeDuplicates(vec); // returns {2, 4, 5, 6, 8, 9}
```
