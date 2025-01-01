---
Title: Filter Vector
Description: Filters a vector using a predicate function.
Author: majvax
Tags: cpp,array,filter,utility
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
```
