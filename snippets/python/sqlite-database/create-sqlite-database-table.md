---
title: Create SQLite Database Table
description: Creates a table in an SQLite database with a dynamic schema.
author: e3nviction
tags: python,sqlite,database,table
---

```py
import sqlite3

def create_table(db_name, table_name, schema):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    schema_string = ', '.join([f'{col} {dtype}' for col, dtype in schema.items()])
    cursor.execute(f'''
        CREATE TABLE IF NOT EXISTS {table_name} (
            {schema_string}
        )''')
    conn.commit()
    conn.close()

# Usage:
db_name = 'example.db'
table_name = 'users'
schema = {
    'id': 'INTEGER PRIMARY KEY',
    'name': 'TEXT',
    'age': 'INTEGER',
    'email': 'TEXT'
}
create_table(db_name, table_name, schema)
```
