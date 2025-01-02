---
title: Vector to Queue
description: Convert vector into queue quickly
tags: cpp, data structures,queue,vector
author: mrityunjay2003
---

```cpp
#include<queue>
#include<vector>
#include<deque>

std::queue<int> vectorToQueue(const std::vector<int>& v) {
    return std::queue<int>(std::deque<int>(v.begin(), v.end()));
}
```