---
title: Vector Print
description: Overloads the << operator to print the contents of a vector just like in python.
author: Mohamed-faaris
tags: printing,debuging,vector
---

```cpp
#include <iostream> 
#include <vector>   

template <typename T>
std::ostream& operator<<(std::ostream& os, const std::vector<T>& vec) {
    os << "["; 
    for (size_t i = 0; i < vec.size(); ++i) {
        os << vec[i]; // Print each vector element
        if (i != vec.size() - 1) {
            os << ", "; // Add separator
        }
    }
    os << "]"; 
    return os; // Return the stream
}

// Usage:
std::vector<int> numbers = {1, 2, 3, 4, 5};
std::cout << numbers << std::endl; // Outputs: [1, 2, 3, 4, 5]

```
