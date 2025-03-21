---
title: Find Non-Repeating Number
description: Finds the number that appears only once in an array where every other number appears twice.
tags: bit-manipulation, xor
author: ashukr07
---

```cpp
#include <vector>

int find_non_repeating(const std::vector<int> nums) {
    int result = 0;
    for (const int num : nums) {
        result ^= num;
    }
    return result;
}

// Usage:
std::vector<int> nums = {4, 1, 2, 1, 2};
find_non_repeating(nums); // Returns: 4
```
