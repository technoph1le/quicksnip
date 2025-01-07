---
title: Remove duplicates
description: Removes duplicates from an vector of ints
author: AnkushRoy-code
tags: vector,remove,duplicate
---

```cpp
#include <algorithm>
#include <vector>

void removeDublicates(std::vector<int> &input)
{
    std::sort(input.begin(), input.end());                // sort the vector
    auto last = std::unique(input.begin(), input.end());  // remove duplicates
    input.erase(last, input.end());  // resize vector and delete the undefined elements
}
```
