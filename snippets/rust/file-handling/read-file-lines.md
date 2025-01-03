---
title: Read File Lines
description: Reads all lines from a file and returns them as a vector of strings.
author: Mathys-Gasnier
tags: file,read
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
read_lines("path/to/file.txt"); // Returns: If Ok(), a Vec of the lines of the file
```
