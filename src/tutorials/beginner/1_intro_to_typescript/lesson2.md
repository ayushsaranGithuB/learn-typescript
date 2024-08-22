---
layout: lesson
parent: TS-Stage1-1
children: TS-1-1
lesson: 2 - Why Use TypeScript?
---

# Why use TypeScript?

JavaScript is a dynamically typed language. This means types are determined at runtime and you can switch them around without an error.

### What are types ?

In broadest terms types represent the kind of data that a variable can hold. For example a string, integer, etc...

Each of these types have special methods attached, for example you can add, subtract and divide integers. You can convert Strings to Lowercase, extract sub-strings, etc...

Here is an example of the dynamically typed nature of JavaScript:

```js
var person = "Steve"; // string
person = 199; // integer

console.log(person); // 199
```

The code above is valid JavaScript, we started with person being a string type and changed it into an integer by re-assigning it. This produces no errors

## Why this is a problem

It can be difficult to understand what types of data are being passed around in JavaScript.

Take this example, a function that divides a number by another and returns the result:

```js
function divide(num1, num2) {
  let result = num1 / num2;
  return result;
}

let answer = divide(10, 2);
console.log(answer); // 5

let answer = divide("ten", 2);
console.log(answer); // Will produce a runtime ERROR: NaN
```

The function was expecting two numbers as parameters, when we passed a string as the first number it produced an error at runtime, because we cannot divide a string by a number.

## Let's fix it with TypeScript

Ideally we would like to catch such errors at development time, before we ship our code to production

Let's see how Typescript can help:

```ts twoslash
function divide(num1: number, num2: number) {
  let result = num1 / num2;
  return result;
}
```

By assigning the type `:number` to the arguments of the function we are telling typescript that this function only accepts a number as an argument.

If we now try to pass a string such as `ten`, Typescript will warn us

```ts twoslash
// @errors: 2345
function divide(num1: number, num2: number) {
  let result = num1 / num2;
  return result;
}

let answer = divide("ten", 2);
```

**Typescript can help us catch such errors before we ship this code into production.**

This is a very simple example, but it becomes more helpful as our programs grow in complexity and we start passing functions and objects around which expect specific parameters and attributes. Typescript will highlight errors in our code when we mistype, misname or forget attributes.
