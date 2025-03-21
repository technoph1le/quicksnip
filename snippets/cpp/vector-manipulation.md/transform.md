---
Title: Transform
Description: Transforms a vector using a function.
Author: majvax
Tags: array,transform,c++23
---

```cpp
#include <ranges>
#include <vector>

template <typename T, typename F>
auto transform(const std::vector<T>& vec, F&& transformer) {
    using U = std::invoke_result_t<F, T>;
    return vec
        | std::views::transform(std::forward<F>(transformer))
        | std::ranges::to<std::vector<U>>();
}



// Usage:
std::vector<int> vec = {1, 2, 3, 4, 5};
std::vector<int> transformed = transform(vec, [](int i){ return i * 2; });
// transformed contains 2, 4, 6, 8, 10
```
