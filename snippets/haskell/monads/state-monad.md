---
title: State Monad
description: Managing mutable state using the State monad.
author: ACR1209
tags: haskell, monads, state, state-management
---

```hs
import Control.Monad.State

increment :: State Int Int
increment = do
    count <- get
    put (count + 1)
    return count

main :: IO ()
main = do
    let (res1, intermediateState) = runState increment 0
    print res1      -- Output: 0
    let (result, finalState) = runState increment intermediateState
    print result    -- Output: 1
    print finalState  -- Output: 2

```