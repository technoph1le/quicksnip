---
title: Async Rate Limiter
description: Implementation of a token bucket rate limiter for async operations
author: pyyupsk
tags: rust,async,rate-limiter,tokio
---

```rust
use std::sync::Arc;
use tokio::sync::Semaphore;
use tokio::time::{interval, Duration};

pub struct RateLimiter {
    semaphore: Arc<Semaphore>,
}

impl RateLimiter {
    pub fn new(rate: u32, interval: Duration) -> Self {
        let semaphore = Arc::new(Semaphore::new(rate as usize));
        let sem_clone = semaphore.clone();

        tokio::spawn(async move {
            let mut ticker = interval(interval);
            loop {
                ticker.tick().await;
                sem_clone.add_permits(rate as usize);
            }
        });

        RateLimiter { semaphore }
    }

    pub async fn acquire(&self) -> RateLimit {
        let permit = self.semaphore.acquire().await.unwrap();
        RateLimit { _permit: permit }
    }
}

pub struct RateLimit<'a> {
    _permit: tokio::sync::SemaphorePermit<'a>,
}

// Usage:
async fn example() {
    let limiter = RateLimiter::new(10, Duration::from_secs(1));

    for i in 0..20 {
        let _permit = limiter.acquire().await;
        println!("Executing task {}", i);
    }
}
```
