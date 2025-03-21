---
title: Unit 2 FR
---

## Unit 2 Full Revision

| Concept                           | Explanation                                                                 | Code Example |
|-----------------------------------|-----------------------------------------------------------------------------|-------------|
| **2.1 Primitive Data Types**      | Data types: `int` (integers), `float` (decimals), `char` (characters), `boolean` (true/false). | ```java<br>int a = 5; boolean flag = true;<br>``` |
| **2.2 User Defined Data Type**    | Creating custom data types using classes. | ```java<br>class Car { String model; int year; }<br>``` |
| **2.3 Identifiers & Literals**    | Identifiers are names given to variables, methods, or classes. Literals are constant values like numbers or characters. | ```java<br>int num = 10; char letter = 'A';<br>``` |
| **2.4 Constants & Variables**     | Constants are values that don’t change (declared with `final`). Variables hold data that can change. | ```java<br>final int MAX = 100; int age = 25;<br>``` |
| **2.5 Type Conversion and Casting** | Type Conversion: Automatic (widening) and manual (narrowing). | ```java<br>int x = (int) 3.14;<br>``` |
| **2.6 Scope of Variables & Default Values** | Variables' scope: local (inside method), instance (inside class), and class-level (static). Defaults are assigned for uninitialized local vars. | ```java<br>int x; // Local variable with no value by default<br>``` |
| **2.7 Wrapper Classes**           | Wrapper classes allow primitive types to be used as objects. | ```java<br>Integer x = 5;<br>``` |
| **2.8 Comment Syntax**            | Comments are used for explanations. Single-line (`//`), multi-line (`/*...*/`), and Javadoc (`/**...*/`). | ```java<br>// This is a comment<br>``` |
| **2.9 Garbage Collection**        | Automatic memory management that frees unused memory from the heap. | ```java<br>System.gc();<br>``` |
| **2.10 Arrays of Primitive Data Types** | Arrays store multiple values of the same type. | ```java<br>int[] arr = {1, 2, 3};<br>``` |
| **2.11 Types of Arrays**          | Single-dimensional and multi-dimensional arrays. | ```java<br>int[] arr1D = {1, 2}; int[][] arr2D = {{1, 2}, {3, 4}};<br>``` |
| **2.12 String Operations**        | Operations: concatenation, changing case, extraction, comparison. | ```java<br>String str = "Hello"; String upper = str.toUpperCase();<br>``` |
| **2.13 Different Operators**      | Arithmetic (`+`, `-`), Bitwise (`&`, `|`), Logical (`&&`, `||`). | N/A |
| **2.14 Decision & Control Statements** | `if`, `if-else`, `switch`, loops (`while`, `for`, `do-while`), and jump statements (`break`, `continue`). | ```java<br>if (x > 5) { System.out.println("Greater"); }<br>``` |
