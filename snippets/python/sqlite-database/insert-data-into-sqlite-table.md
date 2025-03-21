---
title: Insert Data into Sqlite Table
description: Inserts a row into a specified SQLite table using a dictionary of fields and values.
author: e3nviction
tags: sqlite,database
---

```py
import sqlite3

def insert_into_table(db_path, table_name, data):
    with sqlite3.connect(db_path) as conn:
        columns = ', '.join(data.keys())
        placeholders = ', '.join(['?'] * len(data))
        sql = f"INSERT INTO {table_name} ({columns}) VALUES ({placeholders})"
        conn.execute(sql, tuple(data.values()))
        conn.commit()

# Usage:
db_path = 'example.db'
table_name = 'users'
data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'age': 30
}
insert_into_table(db_path, table_name, data)
```
