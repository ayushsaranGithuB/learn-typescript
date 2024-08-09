---
layout: lesson
lesson: 2 - Interface
parent: TS-4
---

## `Interface`

An interface in TypeScript is a way to define the shape of an object.

It specifies what properties and methods an object should have, but it doesn't provide implementations for them.

Interfaces are used for type-checking and ensuring that objects conform to a particular structure.

```ts twoslash
// Example:
interface Person {
  name: string;
  age: number;
}

// This function takes an input 'person' of type: Person
function greet(person: Person) {
  return "Hello " + person.name;
}
```

#### Key Points:

1. **Defines Structure**: Interfaces define the structure of an object, including properties and their types.
2. **Optional Properties**: Properties can be marked as optional using a `?`.
3. **Readonly Properties**: Properties can be marked as readonly using `readonly`.
4. **Methods**: Interfaces can also define methods without providing implementations.

```ts twoslash
// Example of an Interface with optional(?) and readonly properties

interface Person {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
  greet(): void; // method without implementation details
}

const person: Person = {
  name: "Alice",
  age: 30,
  id: 1,
  greet() {
    console.log(`Hello, my name is ${this.name}`); // method implementation
  },
};

person.greet();
```

---

## Interface vs Type

## `Type vs Interface`

In TypeScript, both `type` and `interface` are used to define custom types, but they have some key differences in terms of usage, capabilities, and flexibility.

Here’s a breakdown of the differences between them:

**Flexibility**

- An Interface is primarily used to define the shape of an object, including its properties and their types.
- A Type can define an objects, but it can also define a primitive, union or intersection of types. It is more flexible than an Interface

**Merging**

- Interface supports declaration merging. That means TypeScript will automatically combine multiple interfaces which share the same name.
- Types do not support declaration merging. If you define two `type` aliases with the same name, it will result in a type error.

  Example:

```ts twoslash
// @errors: 2300
// Defining an Interfacee
interface Person {
  name: string;
}

// Defined again
interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};
// This works with interfaces because the two declarations are automatically merged

// But Not with Types

type PersonType = { name: string };
type PersonType = { age: number }; // Error
```

**Extending**

- Both Types and Interfaces can be extended using their respective methods. There is no major difference in this regard.

> We will cover how to extend them in the next chapter

### Summary

- Use **interfaces** when you need to define the structure of an object, and when you need the capabilities of declaration merging or extending other interfaces.
- Use **type aliases** when you need more flexibility, such as defining unions, intersections, or more complex types that go beyond just the shape of an object.

In many cases, either `type` or `interface` can be used interchangeably, and it often comes down to personal or project-specific preferences.
