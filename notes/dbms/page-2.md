---
title: Applications, Advantages & Disadvantages
description: Applications, Advantages, Disadvantages, Inconsistensy in DBMS.
sidebar_position: 2
---

## Applications of DBMS

DBMS is widely used in various domains for managing and storing data efficiently. Some key applications include:

1. **Banking Sector** – To keep records of all customers.
2. **Universities** – To maintain records of students, teachers, etc.
3. **Airlines** – To manage reservation schedules and information.
4. **Credit Card Transactions** – To keep transaction records.
5. **Telecommunication** – For keeping records of monthly bills, maintaining balances, etc.

--- 

## Advantages of DBMS

DBMS provides several benefits, which are discussed below:-

### 1. Controlling Redundancy
- Duplicate data cannot be stored in various places in the same database.
- Reduces memory wastage by storing data efficiently.

### 2. Integrity Enforcement 
- Ensures data integrity so that incorrect information cannot be stored.
- Integrity constraints enforce data correctness, preventing the insertion of invalid data.

### 3. Avoiding Inconsistency
- Example: In a college system, if the General Office records indicate that **Roll No. 5 lives in Howrah**, but the library file states that **Roll No. 5 lives in Kolkata**, this creates inconsistency.
- DBMS prevents such conflicts by maintaining a single accurate record and allowing updates through queries.

### 4. Data Sharing
- Data is stored in a **centralized system**, allowing multiple users and programmers to access shared information.

### 5. Restricting Unauthorized Access
- DBMS provides security features to control user access and ensure that only authorized users can retrieve or modify data.

### Restricting Unauthorized Access

Some users should not be authorized to access all information in the database. This means some users may only be permitted to retrieve data by providing authentication.

### Providing Backup and Recovery

A DBMS must provide facilities for recovering from hardware or software failures. The backup and recovery system of a DBMS is responsible for recovery.

For example, if any computer system fails in the middle of a complex update program, the recovery system of the DBMS ensures that the database is restored to the state it was in before the program started executing.


---

## What do you know about Data inconsistency in DBMS?

To explain this, we must give an example; consider the college system. Suppose in the case of a general office file, it is indicated that Roll No. 5 lives in Howrah, but in a library file, it is indicated that Roll No. 5 lives in Kolkata. There, the two entries of the same object do not agree with each other. In this condition, it is said to be inconsistent. Here, the data of the same object is incorrect or conflicting. 

In DBMS, this conflicting can easily be overcome. For example, Roll No. 5's address value is shifted from Howrah to Kolkata by using some query, which cannot be possible in the traditional file processing system.

---

## Disadvantages of DBMS

The disadvantages of DBMS are as follows:

1. **Complexity:** It is not easy to understand for all users of DBMS, how the data store, retrieve, update, modify etc. in a database due to its complexity.

2. **Size:** The complexity and functionality make the DBMS an extremely large piece of software, occupying many megabytes of disk space and also required a large amount of memory to run efficiently.

3. **Performance:** All the application may not run properly as fast by the using of DBMS.

4. **Cost of DBMS:** The cost of DBMS can very depend on the environment and functionality. Here a large amount of memory is required, so the cost will increase.

5. **Additional Cost:** For all cases we can not directly implement the DBMS, as why the additional cost of DBMS will increase, when it imply with other applications.

