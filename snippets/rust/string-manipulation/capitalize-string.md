---
title: Capitalize String
description: Makes the first letter of a string uppercase.
author: Mathys-Gasnier
tags: rust,string,capitalize,utility
---

```rust
fn capitalized(str: &str) -> String {
    let mut chars = str.chars();
    match chars.next() {
        None => String::new(),
        Some(f) => f.to_uppercase().chain(chars).collect(),
    }
}

// Usage:
assert_eq!(capitalized("lower_case"), "Lower_case")
```
