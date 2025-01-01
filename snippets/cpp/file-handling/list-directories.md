---
Title: List Directories
Description: Lists all the directories in a path.
Author: majvax
Tags: cpp,array,filesystem,directories
---

```cpp
#include <filesystem>
#include <vector>
#include <string>

std::vector<std::filesystem::path> list_directories(const std::string& path) {
    std::vector<std::filesystem::path> files;
    std::error_code ec;

    if (!std::filesystem::exists(path, ec) || ec)
        return files;
    if (!std::filesystem::is_directory(path, ec) || ec)
        return files;

    auto it = std::filesystem::directory_iterator(path, ec);
    if (ec)
        return files;

    for (const auto& entry : it)
        if (std::filesystem::is_directory(entry))
            files.push_back(entry.path());

    return files;
}
```
