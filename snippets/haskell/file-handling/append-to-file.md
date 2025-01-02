---
title: Append to File
description: Appends text to an existing file.
author: ACR1209
tags: haskell,file,append,utilty
---

```hs
import System.IO

appendToFile :: FilePath -> String -> IO ()
appendToFile = appendFile 

main :: IO ()
main = do
    let file = "example.txt"
    let text = "This will be appended to the file.\n"
    appendToFile file text
```