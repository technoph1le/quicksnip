---
title: File Operations Class
description: It's an class where you have some functions for file Opertation
author: mrcool7387
tags: python,file operation,class
---


```py
class FileOperations:
    def create_file(self, file_path: str):
        with open(file_path, 'w') as f:
            pass

    def delete_file(self, file_path: str):
        if os.path.exists(file_path):
            os.remove(file_path)

    def write_file(self, file_path: str, context: str):
        with open(file_path, 'w') as f:
            f.write(context)

    def move_file(self, src: str, dest: str):
        shutil.move(src, dest)

    def copy_file(self, src: str, dest: str):
        shutil.copy(src, dest)

    def get_file_size(self, file_path: str):
        return os.path.getsize(file_path) if os.path.isfile(file_path) else 0

    def get_file_extension(self, file_path: str):
        return os.path.splitext(file_path)[1]

    def zip_files(self, files: list[str], zip_name: str):
        with zipfile.ZipFile(zip_name, 'w') as zf:
            for file in files:
                zf.write(file)

    def extract_zip(self, zip_name: str, extract_to: str):
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
