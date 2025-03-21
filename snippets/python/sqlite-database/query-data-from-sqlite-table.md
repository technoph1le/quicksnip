---
title: Query Data from Sqlite Table
description: Fetches data from a specified SQLite table, with options for selecting specific columns and applying a WHERE clause.
author: pl44t
tags: sqlite,database
---

```py
import sqlite3

def query_table(db_path, table_name, columns='*', where_clause=None):
    with sqlite3.connect(db_path) as conn:
        cursor = conn.cursor()
        sql = f"SELECT {columns} FROM {table_name}"
        if where_clause:
            sql += f" WHERE {where_clause}"
        cursor.execute(sql)
        return cursor.fetchall()

# Usage:
db_path = 'example.db'
table_name = 'users'
columns = 'id, name, email'
where_clause = 'age > 25'
result = query_table(db_path, table_name, columns, where_clause)
for row in result:
    print(row)

```
