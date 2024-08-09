---
layout: lesson
lesson: 10 - any, unknown & never
parent: TS-3
---

# Primitive Types III

Next let's look at some special types that Typescript introduces that aren't represented in JavaScript.

**Top Types**

- `any`
- `unknown`

**Bottom Types**

- `never`

---

## `any`

TypeScript has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

```ts twoslash
let myVar: any = 10;

// All valid under the any type
myVar = "Hello";
myVar = true;
myVar = [1, 2, 3];
```

Using `any` disables all further type checking, and it is assumed that you are checking for type errors manually

It's not recommended to use the `: any` type because it removes most of the benefit of using Typescript in the first place so avoid using it unless you absolutely must.

---

## `unknown`

The `unknown` type is a counterpart of the `any` type.

It's used when you don’t know what type of value you'll receive, but you want to ensure that TypeScript checks the type before you use it.

#### Why use it?

- `any` allows you to do anything with a value, which can lead to runtime errors.
- `unknown` forces you to check the type of the value before you use it.

1. **Example**:

```ts twoslash
// @errors: 18046
let value: any;
value = 5;

// This will be allowed
value.toUpperCase(); // But it can cause a runtime error if value is not a string.

let value2: unknown;

// TypeScript knows toUpperCase can only be used on a string and will throw an warning
value2.toUpperCase(); // Error
```

Adding `unknown` adds **Type Safety** and prevents you from using the value inappropriately without checking its type.

This helps catch errors during development rather than at runtime.

---

## `never`

The `never` type represents the type of values that never occur.

It’s used to indicate that a function will never return anything.

This usually happens in two scenarios:

1. **Functions that Throw Errors**:

   When a function always throws an error and never successfully completes, its return type is `never`.

```ts twoslash
function throwError(message: string): never {
  throw new Error(message);
}
```

2. **Infinite Loops**: When a function contains an infinite loop that never ends, its return type is `never`.

```ts twoslash
function infiniteLoop(): never {
  while (true) {
    // Endless loop
  }
}
```

### Why is `never` Useful?

Using `never` helps TypeScript understand your code better and catch errors. It indicates to the compiler that certain code paths are impossible to reach, which can improve type safety and code readability.

Think of `never` as a way to say, "This part of the code is guaranteed not to continue normally." It’s a way to be very specific about what your code is supposed to do.

Imagine you have a function that handles different shapes and you want to ensure all possible shapes are covered:

```ts twoslash
type Shape = "circle" | "square";

function handleShape(shape: Shape) {
  if (shape === "circle") {
    // handle circle
  } else if (shape === "square") {
    // handle square
  } else {
    // This should never happen
    const _exhaustiveCheck: never = shape;
    throw new Error(`Unhandled shape: ${shape}`);
  }
}
```

In this example, if you add a new shape type later and forget to handle it, TypeScript will give you an error, because `shape` will no longer be assignable to `never`.

- **Without the `never` Line**:
  - The function will work, and it will throw an error if an unhandled shape is passed.
  - However, TypeScript won’t help you catch new unhandled shapes at compile time.
- **With the `never` Line**:
  - TypeScript will give you a compile-time error if you add a new shape to the `Shape` type without handling it in the function.
  - This is because the new shape won’t be assignable to `never`, helping you catch the mistake early and before code is shipped
