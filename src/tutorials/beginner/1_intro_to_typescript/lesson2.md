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

Each of these types have special methods attached, for example you can add, subtract and divide integers. You can can convert Strings to Lowercase, extract sub-strings, etc...

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
console.log(answer); // ERROR: NaN
```

The function was expecting two numbers as parameters, when we passed a string as the first number it produced an error, because we cannot divide a string by a number.

**Typescript can help us catch such errors before we ship this code into production.**

This is a very simple example, but it becomes more helpful as our programs grow in complexity and we start passing functions and objects around which expect specific parameters and attributes. Typescript will highlight errors in our code when we mistype, misname or forget attributes.
