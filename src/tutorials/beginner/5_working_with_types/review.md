---
layout: lesson
lesson: 6 - Review
parent: TS-5
---

### Type Assertions and Inference

We looked at how to explicitly declare the type of a variable using the 'as' keyword and saw how TypeScript can infer the type of variables and functions even when not explicitly defined.

### Type, Function and Class Compatibility

We explored the fundamental concepts of type compatibility in TypeScript, focusing on function and class compatibility. Here's a brief summary of the key points covered:

#### Type Compatibility

- **Structural Typing**: TypeScript uses structural typing to determine if two types are compatible. If the structures of two types match, they are considered compatible.

#### Function Compatibility

- **Parameter Compatibility**: Functions with fewer parameters can be assigned to functions with more parameters, as long as the existing parameters match.
  - Example: A function `(x: number) => void` can be assigned to `(x: number, y: number) => void`, but not vice versa.
- **Return Type Compatibility**: A function with a more specific return type (e.g., `string`) can be assigned to a function with a more general return type (e.g., `any`). However, a function with a general return type cannot be assigned to a function expecting a specific return type.
  - Example: A function `() => string` can be assigned to `() => string | number`, but not vice versa.

#### Class Compatibility

- **Instance Members**: Classes are compatible if their instance members (properties and methods) match. Constructors and static members are not considered for compatibility.
  - Example: A class `Point` with `x` and `y` properties is compatible with a class `ThreeDPoint` that extends `Point` and adds a `z` property, but not the other way around.
-
