---
title: Vector to Queue
description: Convert vector into queue quickly
tags: data structures,queue,vector
author: mrityunjay2003
contributors: majvax
---

```cpp
#include<queue>
#include<vector>
#include<deque>

template <typename T>
std::queue<T> vectorToQueue(const std::vector<T>& v) {
    return std::queue<T>(std::deque<T>(v.begin(), v.end()));
}



// Usage:
std::vector<int> vec = { 1, 2, 3, 4, 5 };
vectorToQueue(vec); // Returns: std::queue<int> { 1, 2, 3, 4, 5 }
```
