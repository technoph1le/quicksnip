---
title: Maybe Monad
description: Using the Maybe monad to handle computations that might fail.
author: ACR1209
tags: monads, maybe
---

```hs
safeDiv :: Int -> Int -> Maybe Int
safeDiv _ 0 = Nothing
safeDiv x y = Just (x `div` y)

-- Usage:
main :: IO ()
main = do
    let result = do
            a <- safeDiv 10 2
            b <- safeDiv a 2
            return b
    print result  -- Output: Just 2
```