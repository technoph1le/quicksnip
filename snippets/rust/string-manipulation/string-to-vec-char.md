---
title: String to Vec<char>
description: Convert a String into a vector of characters
author: pyyupsk
tags: rust,string,vector,chars
---

```rust
fn string_to_chars(s: &str) -> Vec<char> {
    s.chars().collect()
}

// Usage:
let chars = string_to_chars("Hello"); // ['H', 'e', 'l', 'l', 'o']
```
