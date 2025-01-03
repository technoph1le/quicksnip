---
title: Vector to Queue
description: Convert vector into queue quickly
tags: data structures,queue,vector
author: mrityunjay2003
---

```cpp
#include<queue>
#include<vector>
#include<deque>

std::queue<int> vectorToQueue(const std::vector<int>& v) {
    return std::queue<int>(std::deque<int>(v.begin(), v.end()));
}

std::vector<int> vec = { 1, 2, 3, 4, 5 };
vectorToQueue(&vec); // Returns: std::queue<int> { 1, 2, 3, 4, 5 }
```
