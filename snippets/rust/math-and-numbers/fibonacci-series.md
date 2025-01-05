---
title: Fibonacci Series
description: Iterative approach to generate first N Fibonacci numbers in Rust.
author: Karanjot786
tags: fibonacci, math
---

```rust
fn fibonacci(n: usize) {
    let (mut a, mut b) = (0, 1);
    
    print!("{} ", a);
    if n > 1 {
        print!("{} ", b);
    }

    for _ in 2..n {
        let c = a + b;
        print!("{} ", c);
        a = b;
        b = c;
    }
    println!();
}

// Usage:
fn main() {
    fibonacci(5); // Output: 0 1 1 2 3
}
```