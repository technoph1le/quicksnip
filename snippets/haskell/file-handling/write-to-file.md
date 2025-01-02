---
title: Write to File
description: Writes text to a file, overwriting any existing content.
author: ACR1209
tags: haskell,file,write
---

```hs
import System.IO (writeFile)

writeToFile :: FilePath -> String -> IO ()
writeToFile = writeFile

main :: IO ()
main = do
    let file = "example.txt"
    let content = "This is new content."
    writeToFile file content
```