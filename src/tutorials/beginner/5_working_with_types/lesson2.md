---
layout: lesson
lesson: 2 - Type Inference
parent: TS-5
---

# Type Inference

Even if we don't explicitly declare types, Typescript will auto-infer the type, this let's us write code that is more concise and easier to understand, as the TypeScript compiler can deduce the types of variables without us having to explicitly specify them.

Let's see how this works

---

TypeScript automatically determines the type of a variable based on the value assigned to it.

Here’s an example of type inference in TypeScript:

```ts twoslash
// @errors: 2362
// Typescript knows that 'name' is a string
let fName = "John Doe";

console.log(fName.toLowerCase); // No Errors

console.log(fName / 2); // Warning: Operation not permitted on string
```

In this example, the TypeScript compiler automatically infers that the type of the name variable is string. This means that you can use the name variable just like any other string in your code, and the TypeScript compiler will ensure that you don’t perform any invalid operations on it.
