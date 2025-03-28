---
title: "Jan 25"
description: "Type casting, identifiers, strings, and control flow in Java"
sidebar_position: 1
---

## What is type casting?

### 1. Implicit / Widening Casting (automatically)
Converting a smaller type to a larger type size

```java
byte -> short -> char -> int -> long -> float -> double
```

### 2. Explicit / Narrowing Casting (manually)

Converting a larger type to a smaller size type

```java
double -> float -> long -> int -> char -> short -> byte
```

## What is identifier literal?

Identifier means name. For example, variable, array, function.

Literal is a constant.

```java
int age = 21;
//  ^     ^\ 
//  |       \
//identifier literal
```

## What is string?

A string is a combination of characters.  
- It's a _non-primitive_ data type.

```java
String a = "Edutech";
String a = "124";
String a = "*@#12d";
```

### String Methods

- toUpperCase()
- toLowerCase()
- length()
- indexOf()
- charAt()
- concat()
- equals()

### Index

- Indexing starts from 0.

### Example

```java
String txt = "Hello Java";
System.out.println(txt.toUpperCase()); // O/P: HELLO JAVA
System.out.println(txt.toLowerCase()); // O/P: hello java

String txt = "JAVA";
System.out.println(txt.indexOf("V"));   // O/P: 2
System.out.println(txt.length());       // O/P: 4
System.out.println(txt.charAt(0));      // O/P: J

String firstName = "John";
String lastName = "Doe";
System.out.println(firstName.concat(lastName)); // O/P: JohnDoe
```

## Difference between equals() & ==

```java
int a = 10;
int b = 10;
System.out.println(a == b); // O/P: true
```

| Operator | Description |
| --- | --- |
| `==` | Compares memory references |
| `equals()` | Compares actual values of objects |

## What is if-else statement? Give Examples

The `if-else` statement is used to execute one block of code if a condition is true, and another block of code if the condition is false. It's used for decision-making in programming.

### Syntax

```java
if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}
```

### if Statement

An `if` statement in Java is used to execute a block of code if a specified condition is true. If the condition evaluates to false, the code inside the `if` block is skipped.

### else Statement

An `else` statement is used in conjunction with an `if` statement. It defines a block of code that will execute if the `if` condition is false.

### else if Statement

The `else if` statement in Java is used when you want to check multiple conditions in sequence. It allows you to add additional conditions between the `if` and `else` statements, making it possible to evaluate more than one condition.

```java
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if both condition1 and condition2 are false
}
```