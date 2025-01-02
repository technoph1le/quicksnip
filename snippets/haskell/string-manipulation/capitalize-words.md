---
title: Capitalize Words
description: Capitalizes the first letter of each word in a string.
author: ACR1209
tags: haskell,string,capitalize,words
---

```hs
import Data.Char (toUpper)

capitalizeWords :: String -> String
capitalizeWords = unwords . map capitalize . words
  where
    capitalize []     = []
    capitalize (x:xs) = toUpper x : xs

main :: IO ()
main = do
    let sentence = "haskell is awesome"
    print $ capitalizeWords sentence -- Output: "Haskell Is Awesome"
```