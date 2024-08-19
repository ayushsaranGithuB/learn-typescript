---
layout: lesson
lesson: 2 - Advantages of Type Predicates
parent: TS-202
---

# Advantages of Type Predicates

### **Reusability**

We can replicate some of the type checking by directly embedding inline checks into our functions such as: 

 (`event.type === "click"` or `event.type === "keyboard"`) embedded directly within a `handleEvent` function. 
 
But, if you need to check these types in other parts of your code, you’ll have to repeat these checks, which can lead to code duplication.

Having dedicated type guard functions like `isClickEvent` and `isKeyboardEvent` that use type predicates promotes reusability. These functions can be reused wherever you need to determine the type of an event, making the code more DRY (Don't Repeat Yourself).

### **Readability**

The use of separate type guards can make the code more readable, especially in larger codebases. 

It makes it clear that each check is a distinct operation with a specific purpose, improving maintainability.

### **Testing**

It's harder to test the type checks in isolation if they are embedded inside functions. 

With separate functions, you can easily write unit tests specifically for `isClickEvent` and `isKeyboardEvent`, ensuring each type guard behaves as expected independently of the `handleEvent` function.

### **Extensibility**

If you need to extend the functionality by adding more event types, you’ll have to modify the `handleEvent` function, which could become unwieldy if it handles many event types.


The separate type guards allow you to extend functionality in a modular way. You can add new type guards and extend the `handleEvent` function more cleanly.

### Summary

 The separate type guard functions provide better reusability, readability, testability, and extensibility, making them preferable in larger or more complex codebases.