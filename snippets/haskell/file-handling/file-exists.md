---
title: Check if File Exists
description: Checks if a file exists at a given path.
author: ACR1209
tags: haskell,file,exists
---

```hs
import System.Directory (doesFileExist)

checkFileExists :: FilePath -> IO Bool
checkFileExists = doesFileExist

main :: IO ()
main = do
    let file = "example.txt"
    exists <- checkFileExists file
    if exists then putStrLn "File exists." else putStrLn "File does not exist."
```