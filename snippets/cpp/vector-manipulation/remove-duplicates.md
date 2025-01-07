---
title: Remove duplicates
description: Removes duplicates from an vector of ints
author: AnkushRoy-code
tags: vector,remove,duplicate
---

```cpp
#include <algorithm>
#include <vector>

void removeDuplicates(std::vector<int> &input)
{
    std::sort(input.begin(), input.end());                // sort the vector
    auto last = std::unique(input.begin(), input.end());  // remove duplicates
    input.erase(last, input.end());  // resize vector and delete the undefined elements
}

// Usage:
std::vector<int> vec = {4, 2, 2, 8, 5, 6, 9, 9, 9, 8, 8, 4};
removeDuplicates(vec); // returns {2, 4, 5, 6, 8, 9}
```
