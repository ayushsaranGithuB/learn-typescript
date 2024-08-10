---
layout: lesson
lesson: 1 - Generic Functions
parent: TS-6
---

# Generic Functions

Generics allow you to create functions that can work with different types while maintaining type safety.

The syntax for defining a generic function includes type parameters that act as placeholders for the types that will be provided when the function is called.

```ts twoslash
// Syntax for a generic function with different input and output types
function concatenate<X, Y>(param1: X, param2: Y): string {
  return `${param1} ${param2}`;
}
```

In this example:

- `<X, Y>` represent the types of input parameters that the function will accept.
- `param1: X` indicates that the parameter `param1` is of type `X`.
- Similarly, `param2: Y` indicates that the parameter `param1` is of type `Y`.
- The function returns a value of type `string`, regardless of the input and output parameters.

Let's look at another example:

```ts twoslash
function functionName<T>(parameter1: T): T {
  return parameter1;
}
```

- This function accepts only one type of input parameter `<T>`
- Therefore the type of `parameter1` is `T` as denoted by: `(parameter1: T)`
- We can use any valid identifier instead of `T`, but `T` is most commonly used as it stands for "type".
- The function also returns a value of type `T`, hence we denote `:T` after the declaration and before the opening curly brace `{` to specify the return type as `T`.

---

A generic function can accept parameters of different types and return results of those types.

```ts twoslash
// genericFunctions.ts

// A generic function that accepts multiple elements and logs the element passed to it
function logData<T>(data: T): T {
  console.log(data);
  return data;
}

// Using the function with different types
let stringLog = logData<string>("User login successful");
let numberLog = logData<number>(42);
let objectLog = logData<{ userId: number; action: string }>({
  userId: 123,
  action: "login",
});

// Outputs to the console
// "User login successful"
// 42
// { userId: 123, action: 'login' }
```

The function can be used to log any type of data without needing multiple logging functions for different types.

## But Can't I just use `any`

Consider this scenario:

```ts twoslash
// @errors: 2339
function logDataAny(data: any): any {
  // No error at compile time, Possible runtime error
  console.log(data.toFixed());
  return data;
}

// VS

function logDataGeneric<T>(data: T): T {
  // Warning T may not be a number and have `toFixed` method
  console.log(data.toFixed()); // Error here
  return data;
}
```

If we use the `any` type we lose all error-checking. It's better to use the generic because Typescript will warn us before we use any methods or properties that may not exist at runtime.

It's better to find these errors and run checks at compile time, rather than find out about them at runtime.
