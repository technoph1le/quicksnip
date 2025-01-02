--- 
title: Writer Monad
description: Using the Writer monad to accumulate logs or other outputs alongside a computation.
author: ACR1209
tags: haskell, monads, writer, logs
---

```hs
import Control.Monad.Writer

addAndLog :: Int -> Int -> Writer [String] Int
addAndLog x y = do
    tell ["Adding " ++ show x ++ " and " ++ show y]
    return (x + y)

main :: IO ()
main = do
    let (result, logs) = runWriter $ do
            res1 <- addAndLog 3 5
            addAndLog res1 1
    print result  -- Output: 9
    print logs  -- Output: ["Adding 3 and 5", "Adding 8 and 1"]
```