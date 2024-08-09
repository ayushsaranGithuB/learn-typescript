---
layout: lesson
lesson:  1 - Primitive Types
parent: TS-3
---

# Primitive Types

Before we dig into Typescript specific types let's look at some of the primitive types that we already know from JavaScript and can also use in Typescript.

## `string`, `number`, and `boolean`

JavaScript has three very commonly used [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive): `string`, `number`, and `boolean`. Each has a corresponding type in TypeScript.

As you might expect, these are the same names you’d see if you used the JavaScript `typeof` operator on a value of those types:

- `string` represents string values like `"Hello, world"`
- `number` is for numbers like `42`. JavaScript does not have a special runtime value for integers, so there’s no equivalent to `int` or `float` - everything is simply `number`
- `boolean` is for the two values `true` and `false`

To declare the type for a variable or function we append it to the name when initializing by using a semi-colon `:` followed by the type.

```ts twoslash
// Examples

let fullName: string = "John Doe";
let age: number = 43;
let isAdult: boolean = true;

console.log(typeof fullName); // string
console.log(typeof age); // number
console.log(typeof isAdult); // boolean
```

Next, Let look at some more primitive types that we already know from JasvaScript
