---
title: Remove duplicates
description: Removes duplicate values from an array.
author: ACR1209
tags: haskell,array,deduplicate,utility
---

```hs
import Data.List (nub)

removeDuplicates :: Eq a => [a] -> [a]
removeDuplicates = nub

-- Usage
main :: IO ()
main = do
    let array = [1, 2, 2, 3, 4, 4, 5]
    print $ removeDuplicates array -- Output: [1, 2, 3, 4, 5]
```
