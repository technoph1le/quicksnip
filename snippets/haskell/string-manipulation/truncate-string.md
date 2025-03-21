---
title: Truncate String
description: Truncates a string to a specified length, optionally adding an ellipsis.
author: ACR1209
tags: string,truncate,utility
---

```hs
truncateString :: Int -> String -> String
truncateString maxLength str
    | length str <= maxLength = str
    | otherwise = take (maxLength - 3) str ++ "..."

-- Usage:
main :: IO ()
main = do
    let longString = "Haskell is a powerful functional programming language."
    print $ truncateString 20 longString -- Output: "Haskell is a powe..."
    print $ truncateString 54 longString -- Output: "Haskell is a powerful functional programming language."
```