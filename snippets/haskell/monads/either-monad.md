---
title: Either Monad for Error Handling
description: Using the Either monad to handle errors in a computation.
author: ACR1209
tags: haskell, monads, either, error handling
---

```hs
safeDiv :: Int -> Int -> Either String Int
safeDiv _ 0 = Left "Division by zero error"
safeDiv x y = Right (x `div` y)

main :: IO ()
main = do
    let result = do
            a <- safeDiv 10 2
            b <- safeDiv a 0  -- This will trigger an error
            return b
    print result  -- Output: Left "Division by zero error"
```