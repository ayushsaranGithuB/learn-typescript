---
layout: lesson
lesson: 1 - void, undefined & null
parent: TS-4
---

# Primitive Types - II

Let's cover three more primitive types that also carry over from JavaScript

## `void`

`void` represents the return value of functions which don’t return a value.

It’s the default inferred type any time a function doesn’t have any `return` statements, or doesn’t return any explicit value from those return statements.

```ts twoslash
// The inferred return type is :void
function greet() {
  console.log("Hello!");
}

// Same here, since the return does not actually return any value
function noOutput() {
  return;
}
```

**`void` Type**:

- Used to indicate explicitly state that a function’s purpose is to perform an action without returning anything.
- It helps in type-checking to ensure you don't mistakenly try to use a return value that doesn't exist.

## `undefined`

```ts twoslash
// @errors: 18048
function doNothing(): undefined {
  return undefined;
}

let result = doNothing();

// Typescript will warn us if we try to use this return value
console.log(result.toString()); // error
```

#### To Summarize:

- **`void`**: Indicates a function doesn’t return a value. It’s a way to say, "Don’t expect anything back from this function."
- **`undefined`**: Is a value that can be explicitly returned or assigned. A function that returns `undefined` is still considered to have a return value, even if it’s `undefined`.

## `null`

In TypeScript, `null` is a special value that represents an explicitly empty or non-existent value. By default, TypeScript assumes that variables can’t be `null` or `undefined` unless you explicitly allow them.

You can allow `null` by using a union type.

```ts twoslash
// In this example, `fName` can be either a string or `null`.
let fName: string | null = null;
fName = "Alice"; // This is allowed
fName = null; // This is also allowed
```

##### `null` is different from `undefined`.

`undefined` means a variable has been declared but has not yet been assigned a value, while `null` is an assignment value that represents no value.

`null` is useful because we can leverage it to run conditional statements:

```ts twoslash
// We can initialize variables to `null`
// This implies that they may be assigned a value later.

let data: string | null = null;

// This function may or may not return data return
function maybeGetsData(): string | null {
  return Math.random() > 0.5 ? "Some data" : null;
}

data = maybeGetsData();

if (data === null) {
  console.log("Data is null");
} else {
  console.log("Data:", data);
}
```

> When working with APIs, `null` is often used to represent missing or non-existent data.

### Strict Mode Checks

Without Strict Mode enabled, null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

```ts
// StrictMode: Off | This would be okay
let num: number = null;
```

Without Strict Mode enabled you will be warned that null is not assignable to other types unless explicitly defined:

```ts twoslash
// @errors: 2322
// StrictMode: On | This will throw an error
let num1: number = null; // Error

// Unless explicitly defined
let num2: number | null = null; // This is okay
```

We can toggle the null check within our `tsconfig` file

```json
// tsconfig.json
{
	"compilerOptions": {
		"strictNullChecks": true
	}
}

// Same result if we just leave on:
{
	"compilerOptions": {
	    "strict": true
	}
}

```

> Without `strict` or `strictNullChecks`, values that might be `null` or `undefined` can still be accessed normally, and the values `null` and `undefined` can be assigned to a property of any type.
>
> The lack of checking for these values tends to be a major source of bugs so it's recommend to leave `strict` on unless for some reason it’s not practical to do.
