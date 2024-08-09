---
layout: lesson
lesson: 1 - the 'type' Alias
parent: TS-4
---

The simplest way to define a custom type in TypeScript is to use the `type` alias

A `type` alias allows you to give a name to any type, whether it's a primitive, a union, a function, or an object.

This not only improves code readability but also makes it easier to manage and reuse types across your codebase.

#### Basic Syntax

The basic syntax for defining a custom type with the `type` alias is:

`type AliasName = Type;`

```ts
// Defining different type aliases

// Primitive Types: string, number and boolean
type Username = string;
type Age = number;
type Active = boolean;

// A Union type
type UserId = string | number; // union type

// An Object type
type ContactInfo = {
  email: string;
  phone: number;
};

// Using the custom type aliases
let username: Username = "john_doe";
let age: Age = 26;
let isActive: Active = true;
let userId: UserId = 565656877; // could also be a string 'A786786s786s' etc.
let contactInfo: ContactInfo = { email: "john@doe.com", phone: 457895789 };
```

We could also combine these types in a new Type for easier use

```ts
type User = {
  username: Username;
  age: Age;
  isActive: Active;
  userId: UserId;
  contactInfo: ContactInfo;
};

let newUser: User = {
  username: "john_doe",
  age: 26,
  isActive: true,
  userId: 565656877,
  contactInfo: { email: "john@doe.com", phone: 457895789 },
};
```

In this example, `User` is a custom type alias that describes the shape of a `User` object. This makes it easy to define and enforce the structure of user-related data throughout our application.

This also gives us the advantage of being able to extend the `User` type into an `Admin` type by reusing the definition and adding new fields where necessary

```ts
// Admin inherits the User type and adds new fields
type Admin = User & {
  role: string;
  secretKey: string;
  access_level: number;
};

// to use this Admin type we have to supply the fields of both types
let newAdmin: Admin = {
  username: "tom",
  age: 46,
  isActive: true,
  userId: 785446877,
  contactInfo: { email: "tom@admin.com", phone: 454545459 },
  role: "admin",
  secretKey: "secret_key",
  access_level: 5,
};
```

This let's us re-use sections of our code, making maintainability easier in the future.

> We will look at type inheritance and extending types in detail in the next chapter.

#### Using Type Aliases with Functions

You can also use `type` aliases to define the shape of functions:

```ts
// Define a type alias for a function type
type Operation = (a: number, b: number) => number;

// Use the custom type alias
const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

In this example, `Operation` is a custom type alias for a function that takes two numbers as parameters and returns a number.

This can be useful for ensuring consistency in function signatures across our code.
