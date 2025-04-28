---
title: "PLSQL"
description: "Procedural sql queries"
sidebar_position: 8
---

## 1. Find whether a given number is Odd or Even

```sql
DECLARE
    num NUMBER := &num;
BEGIN
    IF MOD(num, 2) = 0 THEN
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is Even');
    ELSE
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is Odd');
    END IF;
END;
/
```

## 2. Find whether a given number is Prime

```sql
DECLARE
    num NUMBER := &num;
    i NUMBER := 2;
    flag BOOLEAN := TRUE;
BEGIN
    IF num <= 1 THEN
        flag := FALSE;
    ELSE
        WHILE i <= SQRT(num) LOOP
            IF MOD(num, i) = 0 THEN
                flag := FALSE;
                EXIT;
            END IF;
            i := i + 1;
        END LOOP;
    END IF;

    IF flag THEN
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is Prime');
    ELSE
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is Not Prime');
    END IF;
END;
/
```

## 3. Find factorial of a given number

```sql
DECLARE
    num NUMBER := &num;
    factorial NUMBER := 1;
BEGIN
    IF num < 0 THEN
        DBMS_OUTPUT.PUT_LINE('Factorial not defined for negative numbers');
    ELSE
        FOR i IN 1..num LOOP
            factorial := factorial * i;
        END LOOP;
        DBMS_OUTPUT.PUT_LINE('Factorial of ' || num || ' is ' || factorial);
    END IF;
END;
/
```

## 4. Sum of first N natural numbers

```sql
DECLARE
    n NUMBER := &n;
    sum NUMBER := 0;
BEGIN
    FOR i IN 1..n LOOP
        sum := sum + i;
    END LOOP;
    DBMS_OUTPUT.PUT_LINE('Sum of first ' || n || ' natural numbers is ' || sum);
END;
/
```

## 5. Whether given number is Krishnamurthy Number

```sql
DECLARE
    num NUMBER := &num;
    temp NUMBER;
    rem NUMBER;
    sum NUMBER := 0;
    factorial NUMBER;
BEGIN
    temp := num;
    WHILE temp > 0 LOOP
        rem := MOD(temp, 10);
        factorial := 1;
        FOR i IN 1..rem LOOP
            factorial := factorial * i;
        END LOOP;
        sum := sum + factorial;
        temp := FLOOR(temp/10);
    END LOOP;

    IF sum = num THEN
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is a Krishnamurthy Number');
    ELSE
        DBMS_OUTPUT.PUT_LINE('The number ' || num || ' is not a Krishnamurthy Number');
    END IF;
END;
/
```

## 6. Find whether a year is Leap Year

```sql
DECLARE
    year NUMBER := &year;
BEGIN
    IF (MOD(year, 400) = 0) OR ((MOD(year, 4) = 0) AND (MOD(year, 100) != 0)) THEN
        DBMS_OUTPUT.PUT_LINE('The year ' || year || ' is a Leap Year');
    ELSE
        DBMS_OUTPUT.PUT_LINE('The year ' || year || ' is not a Leap Year');
    END IF;
END;
/
```

## 7. Grade of a given number using criteria

```sql
DECLARE
    marks NUMBER := &marks;
    grade VARCHAR2(2);
BEGIN
    IF marks >= 90 THEN
        grade := 'AA';
    ELSIF marks >= 80 THEN
        grade := 'A';
    ELSIF marks >= 70 THEN
        grade := 'BB';
    ELSIF marks >= 60 THEN
        grade := 'BC';
    ELSIF marks >= 50 THEN
        grade := 'CC';
    ELSE
        grade := 'Fail';
    END IF;

    DBMS_OUTPUT.PUT_LINE('Grade: ' || grade);
END;
/
```

