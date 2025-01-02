---
title: Type-Safe Builder Pattern
description: Implements a compile-time type-safe builder pattern using phantom types
author: pyyupsk
tags: rust,design-pattern,builder,type-safe
---

```rust
use std::marker::PhantomData;

#[derive(Debug)]
pub struct Builder<Name, Age> {
    name: Option<String>,
    age: Option<u32>,
    _name: PhantomData<Name>,
    _age: PhantomData<Age>,
}

pub struct Missing;
pub struct Set;

#[derive(Debug)]
pub struct Person {
    name: String,
    age: u32,
}

impl Default for Builder<Missing, Missing> {
    fn default() -> Self {
        Self {
            name: None,
            age: None,
            _name: PhantomData,
            _age: PhantomData,
        }
    }
}

impl<Age> Builder<Missing, Age> {
    pub fn name(self, name: impl Into<String>) -> Builder<Set, Age> {
        Builder {
            name: Some(name.into()),
            age: self.age,
            _name: PhantomData,
            _age: PhantomData,
        }
    }
}

impl<Name> Builder<Name, Missing> {
    pub fn age(self, age: u32) -> Builder<Name, Set> {
        Builder {
            name: self.name,
            age: Some(age),
            _name: PhantomData,
            _age: PhantomData,
        }
    }
}

impl Builder<Set, Set> {
    pub fn build(self) -> Person {
        Person {
            name: self.name.unwrap(),
            age: self.age.unwrap(),
        }
    }
}

// Usage:
let person = Builder::default()
    .name("John")
    .age(30)
    .build();
```
