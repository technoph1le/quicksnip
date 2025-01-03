---
title: File Operations Class
description: It's an class where you have some functions for file Operation
author: mrcool7387
tags: python,file operation,class
---


```py
import zipfile
import os
import shutil

class FileOperations:
    def create_file(self, file_path: str):
    """Creates an empty File"""
        with open(file_path, 'w') as f:
            pass

    def delete_file(self, file_path: str):
    """Deletes a File"""
        if os.path.exists(file_path):
            os.remove(file_path)

    def write_file(self, file_path: str, context: str):
    """Writes some text to a file. '\n' is used fo a new Line"""
        with open(file_path, 'w') as f:
            f.write(context)

    def move_file(self, src: str, dest: str):
    """Moves a File form its Source to it's destination"""
        shutil.move(src, dest)

    def copy_file(self, src: str, dest: str):
    """Copies a File form its Source to it's destination"""
        shutil.copy(src, dest)

    def get_file_size(self, file_path: str):
    """Returns the File size of the selected File"""
        return os.path.getsize(file_path) if os.path.isfile(file_path) else 0

    def get_file_extension(self, file_path: str):
    """Returns the Type/Extension of the selected File"""
        return os.path.splitext(file_path)[1]

    def zip_files(self, files: list[str], zip_name: str):
    """Compresses some selected Files, don't forget the '.zip' at the end of the ZIP-File-Name"""
        with zipfile.ZipFile(zip_name, 'w') as zf:
            for file in files:
                zf.write(file)

    def extract_zip(self, zip_name: str, extract_to: str):
    """Extracts from a selected ZIP File to a Destination"""
        with zipfile.ZipFile(zip_name, 'r') as zf:
            zf.extractall(extract_to)

# Usage
fo = FileOperations()

fo.create_file('./notes/note1.txt')
fo.create_file('./note2.txt')

fo.write_file('./notes/note1.txt', 'Very Important Notes!')

fo.zip_files(['./notes/note1.txt', './note2.txt'], 'notes.zip')

fo.delete_file('./notes/note1.txt')
```
