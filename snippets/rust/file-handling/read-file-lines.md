---
title: Read File Lines
description: Reads all lines from a file and returns them as a vector of strings.
author: Mathys-Gasnier
tags: rust,file,read,utility
---

```rust
fn read_lines(file_name: &str) -> std::io::Result<Vec<String>>
    Ok(
        std::fs::read_to_string(file_name)?
            .lines()
            .map(String::from)
            .collect()
    )
}

// Usage:
let lines = read_lines("path/to/file.txt").expect("Failed to read lines from file")
```
