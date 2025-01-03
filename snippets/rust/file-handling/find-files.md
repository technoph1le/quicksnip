---
title: Find Files
description: Finds all files of the specified extension within a given directory.
author: Mathys-Gasnier
tags: file,search
---

```rust
fn find_files(directory: &str, file_type: &str) -> std::io::Result<Vec<std::path::PathBuf>> {
    let mut result = vec![];

    for entry in std::fs::read_dir(directory)? {
        let dir = entry?;
        let path = dir.path();
        if dir.file_type().is_ok_and(|t| !t.is_file()) &&
            path.extension().is_some_and(|ext| ext != file_type) {
            continue;
        }
        result.push(path)
    }

    Ok(result)
}

// Usage:
find_files("/path/to/your/directory", ".pdf"); // Returns: if Ok(), a vector of path to `.pdf` files in the directory
```
