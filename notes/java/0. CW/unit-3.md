---
title: "Unit 3: OOP Fundamentals"
description: "Java OOP Concepts"  
---

## Class  
A **class** is a blueprint for creating objects. It defines the **properties (variables)** and **behaviors (methods)** an object will have.  

**Example:**  

```java
class Car {
    String brand;  // Property
    int speed;     // Property

    void display() {  // Method
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}
```

---

## Object  
An **object** is an instance of a class. It holds actual values for the properties defined in the class.  

**Example:**  
```java
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Creating an object
        myCar.brand = "Toyota";
        myCar.speed = 120;
        myCar.display();
    }
}
```

---

## Constructor  
A **constructor** is a special method used to initialize objects. It has the same name as the class and runs automatically when an object is created.  

**Example:**  
```java
class Car {
    String brand;
    int speed;

    // Constructor
    Car(String b, int s) {
        brand = b;
        speed = s;
    }

    void display() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Honda", 150); // Constructor automatically called
        myCar.display();
    }
}
```

---

###  Types of Constructors  

1. **Default Constructor**  
	
   - No parameters, assigns default values.  
   ```java
   class Car {
       Car() {
           System.out.println("Default constructor called.");
       }
   }
   ```
   
2. **Parameterised Constructor**  
	
   - Takes arguments to initialize properties.  
   
   ```java
   class Car {
       Car(String brand) {
           System.out.println("Car brand: " + brand);
       }
   }
   ```

3. **Copy Constructor** *(Java doesn’t have built-in copy constructors, but we can create one manually.)* 
	1. 
	   ```java
	   class Car {
	       String brand;

       Car(String b) {  // Parameterized constructor
           brand = b;
       }

       Car(Car obj) {  // Copy constructor
           brand = obj.brand;
       }
   }
   ```

---

## `this` Keyword  
Used to refer to the current object's instance variables.  
```java
class Car {
    String brand;

    Car(String brand) {
        this.brand = brand;  // "this" refers to the instance variable
    }
}
```

---

## Static vs Instance Members  

- **Static variables/methods** belong to the class and are shared by all objects.  
- **Instance variables/methods** belong to individual objects.  

```java
class Car {
    static int totalCars = 0;  // Static variable (shared)
    String brand;  // Instance variable

    Car(String b) {
        brand = b;
        totalCars++;
    }
}
```

---

## Encapsulation  
Encapsulation is the concept of **data hiding** using private variables and providing access via **getter and setter** methods.  

```java
class Car {
    private String brand;

    public void setBrand(String b) {
        brand = b;
    }

    public String getBrand() {
        return brand;
    }
}
```

---

## Polymorphism in Java  

### What is Polymorphism?  
Polymorphism means **"many forms"** and allows the same method or function to perform different behaviors based on the object that calls it.  

#### Types of Polymorphism:  
1. **Compile-time Polymorphism (Method Overloading)**  
2. **Runtime Polymorphism (Method Overriding)**  

---

### 1. Compile-time Polymorphism (Method Overloading)  
- **Method overloading** allows multiple methods in the same class to have the same name but **different parameters (different type or number of arguments).**  
- It is **resolved at compile-time.**  

### **Example:**  
```java
class MathUtils {
    // Method with two parameters
    int add(int a, int b) {
        return a + b;
    }

    // Method with three parameters (Overloaded)
    int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with different parameter type (Overloaded)
    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathUtils math = new MathUtils();
        System.out.println(math.add(10, 20));        // Calls first method
        System.out.println(math.add(10, 20, 30));    // Calls second method
        System.out.println(math.add(10.5, 20.5));    // Calls third method
    }
}
```

💡 **Key Points:**  
✔ Same method name, but different argument lists.  
✔ Decided at **compile-time**.  

---

### 2. Runtime Polymorphism (Method Overriding)
- **Method overriding** happens when a **subclass provides a specific implementation** of a method that is already defined in its **parent class**.  
- It is **resolved at runtime** using **dynamic method dispatch**.  

### **Example:**  
```java
// Parent class
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Child class
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}

// Child class
class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal;  // Parent class reference

        myAnimal = new Dog();
        myAnimal.makeSound();  // Calls Dog's makeSound()

        myAnimal = new Cat();
        myAnimal.makeSound();  // Calls Cat's makeSound()
    }
}
```

---

### Method Overloading vs Method Overriding
| Feature             | Method Overloading                                       | Method Overriding                            |
| ------------------- | -------------------------------------------------------- | -------------------------------------------- |
| **Definition**      | Multiple methods with same name but different parameters | Redefining a method in the subclass          |
| **Parameters**      | Must be different (type or number)                       | Must be same                                 |
| **Return Type**     | Can be same or different                                 | Must be same                                 |
| **Access Modifier** | No restriction                                           | Cannot be more restrictive than parent class |
| **Execution Time**  | Compile-time                                             | Runtime                                      |
| **Keyword Used**    | None                                                     | `@Override`                                  |