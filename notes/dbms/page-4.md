---
title: Schemas, Logical & Physical Data Independence
description: Schemas in DBMS types, Logical & Physical Independen, needs
sidebar_position: 4
---

## What you know about Database Schema? 

The overall design of a database is called database schema.  
The schema gives the name of entities and the attributes, it also specify the relationship among them.

### Types of Schema

There are two type of schema.  
- The schema of Conceptual (Logical) level is called **Conceptual/Logical schema**.  
- The design of database in Internal/Physical level is called **Physical Schema/Internal Schema**.

**`Employee` Schema:**

| e-id # | e-name | Address | Sol. | Dept-NO |
|--------|--------|---------|------|---------|

---

## What Do You Know About Logical & Physical Data Independence?

<small><u>Appeared:</u> 2005, 2009, 2010</small>

1.  **Logical Data Independence:** The logical data independence is the ability to change the conceptual schema without affecting the external schemas. The conceptual/logical schema may be changed due to change in constraints on addition of new data items or removal an existing data items from the database. The separation of the external level from the conceptual level enable the users to make changes at the conceptual level without affecting the external level.

2.  **Physical Data Independence:** It is the ability to change the internal schema without affecting the conceptual/logical or external schema. An internal/physical schema can be changed due to several reasons such as to change the storage structure.


### Why is logical data independence needed?

The logical data independence is more difficult than physical data independence, because all the application program of user/view level directly related with logical level. The logical data independence is important because always changing the structure of database need to make a database flexible as per user requirement.