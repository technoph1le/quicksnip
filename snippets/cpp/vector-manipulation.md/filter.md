---
Title: Filter
Description: Filters a vector using a predicate function.
Author: majvax
Tags: array,filter,c++23
---

```cpp
#include <ranges>
#include <vector>

template <typename T, typename P>
auto filter(const std::vector<T>& vec, P&& predicate) {
    return vec
        | std::views::filter(std::forward<P>(predicate))
        | std::ranges::to<std::vector<T>>();
}



// Usage:
std::vector<int> vec = {1, 2, 3, 4, 5};
std::vector<int> filtered = filter(vec, [](int i){ return i % 2 == 0; });
// filtered contains 2 and 4
```
