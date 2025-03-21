---
Title: Find files
Description: Find all the files in a directory using a predicate function.
Author: majvax
Tags: filesystem,file_search,c++17
---

```cpp
#include <filesystem>
#include <vector>
#include <string>

template <typename P>
std::vector<std::filesystem::path> find_files(const std::string& path, P&& predicate) {
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
        if (!std::filesystem::is_directory(entry) && predicate(entry.path()))
            files.push_back(entry.path());

    return files;
}



// Usage:

// Find all files with size greater than 10MB
auto files = find_files("Path", [](const auto& p) {
    return std::filesystem::file_size(p) > 10 * 1024 * 1024;
});

// Find all files with ".pdf" as extension
auto files = find_files("Path", [](const auto& p) {
    return p.extension() == ".pdf";
});

// Find all files writed after The New Year
#include <chrono>
// need std=c++20
auto jan_1_2025 = std::filesystem::file_time_type::clock::from_sys(
    std::chrono::sys_days{std::chrono::year{2025}/std::chrono::month{1}/std::chrono::day{1}}
);
auto files = find_files("Path", [jan_1_2025](const auto& p) {
    return std::filesystem::last_write_time(p) > jan_1_2025;
}),
```
