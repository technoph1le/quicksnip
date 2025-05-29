---
title: Custom Smart Pointer
description: Implementation of a custom reference-counted smart pointer with interior mutability
author: pyyupsk
tags: rust,smart-pointer,memory-management,unsafe
---

```rust
use std::cell::UnsafeCell;
use std::ops::{Deref, DerefMut};
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::Arc;

pub struct Interior<T> {
    ref_count: AtomicUsize,
    data: UnsafeCell<T>,
}

pub struct SmartPtr<T> {
    ptr: Arc<Interior<T>>,
}

impl<T> SmartPtr<T> {
    pub fn new(data: T) -> Self {
        SmartPtr {
            ptr: Arc::new(Interior {
                ref_count: AtomicUsize::new(1),
                data: UnsafeCell::new(data),
            }),
        }
    }

    pub fn get_ref_count(&self) -> usize {
        self.ptr.ref_count.load(Ordering::SeqCst)
    }
}

impl<T> Clone for SmartPtr<T> {
    fn clone(&self) -> Self {
        self.ptr.ref_count.fetch_add(1, Ordering::SeqCst);
        SmartPtr {
            ptr: Arc::clone(&self.ptr),
        }
    }
}

impl<T> Drop for SmartPtr<T> {
    fn drop(&mut self) {
        if self.ptr.ref_count.fetch_sub(1, Ordering::SeqCst) == 1 {
            // Last reference is being dropped
            unsafe {
                drop(Box::from_raw(self.ptr.data.get()));
            }
        }
    }
}

impl<T> Deref for SmartPtr<T> {
    type Target = T;

    fn deref(&self) -> &Self::Target {
        unsafe { &*self.ptr.data.get() }
    }
}

impl<T> DerefMut for SmartPtr<T> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        unsafe { &mut *self.ptr.data.get() }
    }
}

// Usage:
let ptr = SmartPtr::new(42);
let cloned = ptr.clone();
assert_eq!(ptr.get_ref_count(), 2);
assert_eq!(*ptr, 42);
```
