---
title: Remove n Occurrences
description: Removes duplicates from an vector of ints
author: AnkushRoy-code
tags: vector,remove
---

```cpp
#include <algorithm>
#include <unordered_map>
#include <vector>

void removeOccurrences(std::vector<int>& vec, int n) {
    std::unordered_map<int, int> frequency; // count frequencies
    for (int num : vec) {
        frequency[num]++;
    }

    vec.erase( // remove elements with n number of occurrences
        std::remove_if(vec.begin(), vec.end(), [&](int x) {
            return frequency[x] == n;
        }),
        vec.end()
    );
}
```
