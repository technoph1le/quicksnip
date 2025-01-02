---
title: Update Records in Sqlite Table
description: Updates records in a specified SQLite table, allowing dynamic column updates and an optional WHERE clause.
author: pl44t
tags: python,sqlite,database,utility
---

```py
import sqlite3

def update_table(db_path, table_name, updates, where_clause=None):
    with sqlite3.connect(db_path) as conn:
        set_clause = ', '.join([f"{col} = ?" for col in updates.keys()])
        sql = f"UPDATE {table_name} SET {set_clause}"
        if where_clause:
            sql += f" WHERE {where_clause}"
        conn.execute(sql, tuple(updates.values()))
        conn.commit()

# Usage:
db_path = 'example.db'
table_name = 'users'
updates = {'name': 'Jane Doe', 'age': 28}
where_clause = "id = 1"
update_table(db_path, table_name, updates, where_clause)

```
