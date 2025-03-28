---
title: "March 1" 
description: "Class concepts, objects, methods, and OOP fundamentals in Java"
sidebar_position: 3
---

## Class in Java
A class is a blueprint for creating objects. It defines fields (variables) and methods
(functions) that describe the properties and behaviours of an object.
Example:
```java
public class CST{
}

```

---
## Define Fields and Methods in a Class
Fields are variables, and methods are functions inside a class.

```java
 class Car {
    String model;  // Field

    void display() {  // Method
        System.out.println(model);
    }
}

```

---
## Create an Object of a Class
Use the new keyword to create an object.

```java
Car myCar = new Car();  // Creating an object of the Car class

```

---
## Access Fields and Methods of a Class
Use the dot `.` operator to access fields and methods.
```java
myCar.model = "Toyota";  // Access field
myCar.display();        // Call method

```

---
## The `this` Keyword

The this keyword refers to the current object within the class, used to distinguish between class fields and parameters with the same name.

>[!note]
> `this` keyword is not accessible with `static` keyword.

```java
class Person {
    String name;
    
    Person(String name) {
        this.name = name;  // 'this' refers to the field of the object
    }
}

```

---
## The `static` Keyword

The static keyword makes a field or method belong to the class, not instances(objects). It is shared by all objects.
without creating objects, I can access the methods directly

```java
class Counter {
    static int count = 0;  // Static field
    
    static void increment() {  // Static method
        count++;
    }
}

```

---
## Method Overloading

Method overloading occurs when multiple methods in the same class have the
same name but different parameters.
```java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

```

---
## The `final` Keyword

The final keyword is used to define constants (final variables), prevent method
overriding, and prevent class inheritance.

```java
final class Circle {  // Final class can't be extended
    final double PI = 3.14;  // Final variable can't be changed
}

```


---

## Logic Building: Program to reverse a String.

```java
// Method Overloading (Compile-time Polymorphism)

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum of 2 numbers: " + calc.add(5, 10));
        System.out.println("Sum of 3 numbers: " + calc.add(5, 10, 15));
    }
}


```