---
layout: lesson
lesson: 6 - Functions
parent: TS-3
---

# Functions

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts.

Parameter type annotations go after the parameter name:

```ts twoslash
// Input type annotation
function greet(name: string) {
  console.log("Hello, " + name);
}
```

When a parameter has a type annotation, arguments to that function are checked against the type

```ts twoslash
// @errors: 2345
function greet(name: string) {
  console.log("Hello, " + name);
}
// Correct
greet("John"); // Output: Hello, John

// Error:
greet(1); // Argument of type '1' is not assignable to parameter of type 'string'.
```

Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

```ts twoslash
// @errors:  2554
function greet(name: string) {
  console.log("Hello, " + name);
}
greet(); // Error: Expected 1 arguments, but got 0.
```

### Return Type Annotations

By default if your function does not include a return statement then Typescript will auto-infer the type as :void

```ts twoslash
// The auto-inferred return type is :void
function doSomething() {
  let a = 10;
}
```

> `void` represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any `return` statements, or doesn’t return any explicit value from those return statements:

Similarly for functions that do return a value, Typescipt will auto-infer the return type based on the output returned by the function

```ts twoslash
// The auto-inferred return type is :number
function add(a: number, b: number) {
  return a + b;
}

let result = add(2, 3);
console.log(typeof result); // number
```

You can also explicitly tell Typescript what you expect the return type to be

```ts twoslash
// @errors: 2339
// The explicitly set return type is :number
function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2);

// Typescript will warn us if we try to use string methods,
// since we explicitly said the function will return a number

console.log(result.toLowerCase); // Property 'toLowerCase' does not exist on type 'number'.
```

You usually don’t need a return type annotation for functions, since it will be auto-inferred but it's a good idea to include them for clarity so it's clear what the inputs and outputs of a function are expected to be and prevent accidental changes that can break code elsewhere.

> Besides primitive types and :void functions can also return Promises and other types, we will cover these in the intermediate tutorials

TODO - Contextual typing/Anonymous functions
