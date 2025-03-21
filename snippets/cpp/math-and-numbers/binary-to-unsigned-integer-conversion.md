---
title: Binary to Unsigned Integer Conversion
description: Converts a binary number represented as a string to its decimal equivalent.
tags: binary, conversion, c++20
author: ashukr07
contributor: majvax
---

```cpp
#include <string>
#include <bitset>
#include <stdexcept>

template <std::unsigned_integral T>
T binary_to_uintegral(const std::string& binary) {
    if (binary.size() > sizeof(T) * 8)
        throw std::invalid_argument("binary string is too long");
    return static_cast<T>(std::bitset<sizeof(T) * 8>(binary).to_ullong());
}

// Usage:
std::string binary(64, '1'); // Binary 8 bytes long with all bits set to 1
binary_to_uintegral<unsigned long long>(binary); // Returns: 18446744073709551615
binary_to_uintegral<long long>(binary); // Compiles error: signed/unsigned mismatch
binary_to_uintegral<unsigned long long>(std::string(65, '1')); // Throws: std::invalid_argument
```
