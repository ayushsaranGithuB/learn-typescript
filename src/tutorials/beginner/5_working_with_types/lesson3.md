---
layout: lesson
lesson: 3 - Type Compatibility
parent: TS-5
---

# Type Compatibility

TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

Here’s an example of type compatibility in TypeScript:

```ts twoslash
interface Coordinate {
  x: number;
  y: number;
}

let a1: Coordinate = { x: 10, y: 20 };
let a2: { x: number; y: number };

// we can assign the values of a1 to a a2
// as they share the same stucture
a2 = a1;

console.log(a2.x); // Output: 10 as defined in a1
```

In this example, `a1` has the type `Coordinate`, while `a2` has the type `{ x: number; y: number }`.

Despite the fact that the two types have different names, they are considered compatible because they have the same structure. This means that you can assign a value of type Coordinate to `a2` even though its type is stated as  `{ x: number; y: number }`.

**Subtype and Supertype**:

- A type is considered a subtype of another if it has all the required properties of the other type and possibly more.
- The supertype has properties or methods that the subtypes also have, but it doesn't necessarily have all the properties or methods of the subtypes.

```ts twoslash
// @errors: 2741
// Person is the super-type
interface Person {
  name: string;
  age: number;
}

// Employee is a sub-type of Person
interface Employee {
  name: string;
  age: number;
  employeeId: number;
}

let person: Person = { name: "Alice", age: 30 };
let employee: Employee = { name: "Bob", age: 25, employeeId: 123 };

// Employee is compatible with Person because it has all the properties required by Person.
person = employee; // This is allowed

// Person is not compatible with Employee because it lacks the employeeId property
employee = person; // Error: This would cause an error
```
