---
layout: tutorial-intro
title: Types - Pt I
tags: tutorial
children: TS-3
level: beginner
summary: "What are Types? How do we use them. Explore the power of type annotations. Learn string, number, boolean, array, tuple, object, enum and function types. "
---

# Types

Types are what power the magic of Typescript and allow it to help us with error-checking and validation.

To declare the type for a variable or function we append it to the name when initializing by using a semi-colon `:` followed by the type.

```js
// Examples

let isTrue: boolean = true;
let fullName: string = "John Doe";
```

If we try to assign a number to a variable that we previously declared as a string, we will get an error

```ts twoslash
// @errors: 2322

let fname: string;
fname = 42; // Error
```

There is a lot more we can do with Types so let's start by looking at the most basic types: string, number and boolean.
