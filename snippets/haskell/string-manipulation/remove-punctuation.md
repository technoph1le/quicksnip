---
title: Remove Punctuation
description: Removes all punctuation from a given string.
author: ACR1209
tags: haskell,string,punctuation,remove
---

```hs
import Data.Char (isPunctuation)

removePunctuation :: String -> String
removePunctuation = filter (not . isPunctuation)

main :: IO ()
main = do
    let text = "Hello, Haskell! How's it going?"
    print $ removePunctuation text -- Output: "Hello Haskell Hows it going"
``` 