---
title: "Feb 22"
description: "Variable scope, wrapper classes, and garbage collection in Java"
sidebar_position: 2
---
## **Scope Variables and Default Values**

### Scope of Variables in Java

**Local Variable**: Declared inside a method/constructor/block. Accessible only within that
method/block.
**Instance Variable**: Declared inside a class, outside any method. Accessible to all methods
in the class; tied to the object.
**Class Variable (Static)**: Declared with static. Shared across all instances of the class.
**Global Variable**: Declared with Global keyword. 

Example:- 

```java
public class VariableScope {
    // Instance variable (class scope)
    int instanceVar = 10;

    // Static variable (class level)
    static int classVar = 20;

    public void method() {
        // Local variable (method scope)
        int localVar = 30;

        // Print values of all variables
        System.out.println("Instance Variable: " + instanceVar);
        System.out.println("Class Variable: " + classVar);
        System.out.println("Local Variable: " + localVar);
    }

    public static void main(String[] args) {
        VariableScope obj = new VariableScope();
        obj.method();  // Calling the method to see the variable output
    }
}
```

### Default values of variables

when a variable is declared but not initialised, Java automatically  defines default values depending on the type.

- *int*: 0
- *double*: 0.0
- *boolean*: false
- *object reference*: null

---
## Wrapper Classes in Java

A wrapper class in Java is a class that encapsulates (wraps) a primitive data type into an
object.

>[!info]
> - The  **wrapper classes are part of the java.lang package**
> - Wrapper classes are useful when you need to treat primitive data types as objects.


### Common wrapper classes
- Integer for int
- Double for double
- Character for char
- Boolean for boolean

```java
public class Main {
    public static void main(String[] args) {
        // Using wrapper class Integer to wrap an int
        int num = 100;

        Integer wrappedNum = Integer.valueOf(num);  // Wrap primitive int to Integer object

        System.out.println("Wrapped Integer: " + wrappedNum);

        // Unwrapping Integer to primitive int
        int unwrappedNum = wrappedNum.intValue();
        System.out.println("Unwrapped int: " + unwrappedNum);
    }
}
```

---

## Garbage Collection and How It Works

Garbage collection in Java is the process by which Java programs automatically reclaim
memory that is no longer in use. This helps in preventing memory leaks and optimizing
memory usage.

**Java's Garbage Collector (GC)** identifies and removes objects that are no longer reachable or
referenced by any part of the program.
# How Does It Work?
*Java uses automatic garbage collection*, so you don't need to manually free memory.
System.gc() can be used to suggest that the garbage collector runs, but it's not
guaranteed.

```java
public class GarbageCollectionExample {
    public static void main(String[] args) {
        // Creating an object of the class
        GarbageCollectionExample obj1 = new GarbageCollectionExample();

        // Setting the object reference to null, making it eligible for garbage collection
        obj1 = null;

        // Suggesting garbage collection (it's not guaranteed to run immediately)
        System.gc();  // Fixed the syntax issue

        // Waiting to observe the GC message
        System.out.println("Object is now eligible for garbage collection.");
    }

    @Override
    protected void finalize() {
        // This method is called just before the object is garbage collected
        System.out.println("Garbage Collector is collecting the object...");
    }
}
```