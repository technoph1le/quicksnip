---
Title: Split String
Description: Splits a string by a delimiter
Author: saminjay
Tags: cpp,string,split,utility
---

```cpp
#include <string>
#include <vector>

std::vector<std::string> split_string(std::string str, std::string delim) {
    std::vector<std::string> splits;
    int i = 0, j;
    int inc = delim.length();
    while (j != std::string::npos) {
        j = str.find(delim, i);
        splits.push_back(str.substr(i, j - i));
        i = j + inc;
    }
    return splits;
}
```
