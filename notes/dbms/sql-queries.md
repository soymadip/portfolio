---
title: SQL Queries
description: SQL queries from class
sidebar_position: 1.5
---

## CREATE TABLE

#### **Syntax:-**
 ```sql
 CREATE TABLE <table_name> (
    col1 datatype params,
    col2 datatype params,
    col3 datatype ...,
    ...
    coln datatype ..
 )
 ```
#### **Example:-**
```sql

CREATE TABLE teacher ( 
    TID INT PRIMARY KEY,
    TNAME VARCHAR(30),
    PHNO INT(10)
);
```

## INSERT INTO 

#### **Syntax:-**

```sql
    INSERT INTO <table_name> ( col1, col2, col3,... coln)
    VALUES (R1, R2, R3,....Rn);
```

#### **Example:-**
```sql
INSERT INTO teacher values(
    1, 'ABC', 92...
);
```

## SELECT 
- The select statement is used to select  data from a database.
- Or we say the select statement is used to select specific columns or the total table.

#### **Syntax:-**
```sql
-- To get all colomns
SELECT * FROM <Table_name>;

-- To get specific columns
SELECT col1, col2 FROM Table_name;
```