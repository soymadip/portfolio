---
title: "Full Revision: Unit 2"
description: "Comprehensive revision notes for Java Unit 2"
---

# Unit 2 Full Revision

## Primitive Data Types

**Explanation:** Data types: `int` (integers), `float` (decimals), `char` (characters), `boolean` (true/false).

**Code Example:** 
```java
int a = 5; 
boolean flag = true;
```

## User Defined Data Type

**Explanation:** Creating custom data types using classes.

**Code Example:** 
```java
class Car { 
    String model; 
    int year; 
}
```

## Identifiers & Literals

**Explanation:** Identifiers are names given to variables, methods, or classes. Literals are constant values like numbers or characters.

**Code Example:** 
```java
int num = 10; 
char letter = 'A';
```

## Constants & Variables

**Explanation:** Constants are values that don't change (declared with `final`). Variables hold data that can change.

**Code Example:** 
```java
final int MAX = 100; 
int age = 25;
```

## Type Conversion and Casting

**Explanation:** Type Conversion: Automatic (widening) and manual (narrowing).

**Code Example:** 
```java
int x = (int) 3.14;
```

## Scope of Variables & Default Values

**Explanation:** Variables' scope: local (inside method), instance (inside class), and class-level (static). Defaults are assigned for uninitialized local vars.

**Code Example:** 
```java
int x; // Local variable with no value by default
```

## Wrapper Classes

**Explanation:** Wrapper classes allow primitive types to be used as objects.

**Code Example:** 
```java
Integer x = 5;
```

## Comment Syntax

**Explanation:** Comments are used for explanations. Single-line (`//`), multi-line (`/*...*/`), and Javadoc (`/**...*/`).

**Code Example:** 
```java
// This is a comment
```

## Garbage Collection

**Explanation:** Automatic memory management that frees unused memory from the heap.

**Code Example:** 
```java
System.gc();
```

## Arrays of Primitive Data Types

**Explanation:** Arrays store multiple values of the same type.

**Code Example:** 
```java
int[] arr = {1, 2, 3};
```

## Types of Arrays

**Explanation:** Single-dimensional and multi-dimensional arrays.

**Code Example:** 
```java
int[] arr1D = {1, 2}; 
int[][] arr2D = {{1, 2}, {3, 4}};
```

## String Operations

**Explanation:** Operations: concatenation, changing case, extraction, comparison.

**Code Example:** 
```java
String str = "Hello"; 
String upper = str.toUpperCase();
```

## Different Operators

**Explanation:** Arithmetic (`+`, `-`), Bitwise (`&`, `|`), Logical (`&&`, `||`).

**Code Example:** N/A

## Decision & Control Statements

**Explanation:** `if`, `if-else`, `switch`, loops (`while`, `for`, `do-while`), and jump statements (`break`, `continue`).

**Code Example:** 
```java
if (x > 5) { 
    System.out.println("Greater"); 
}
```
