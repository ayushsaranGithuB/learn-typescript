---
layout: lesson
lesson: 1 - The 'typeof'  type guard
parent: TS-201
---

# The 'typeof' type guard

Consider this example:

- We have a function that prints an input to the console
- The input could be a 'string', or an 'Array of strings'

```ts twoslash
// @errors: 2339
function printAll(text: string | string[]) {
  // print each part
  text.forEach((str: string) => {
    console.log(str);
  });
}
```

Here typescript is warning us that `forEach` is available on the array `string[]` but not on the single `string`

We can fix this by checking the `typeof text` before proceeding:

```ts twoslash
function printAll(text: string | string[]) {
  if (typeof text === "object") {
    // text must be string[] since Arrays are objects in JS
    // print each part
    text.forEach((str: string) => {
      console.log(str);
    });
  } else {
    // if not array, must be a string, this is narrowing
    console.log(text);
  }
}
```

**Let's examine this code**

- When TypeScript encounters  `typeof text === "object"` inside out `if` statement, it understands that as a *type guard*.

- This process of refining types to a more specific type than originally declared is called _narrowing_.

When it reaches the `else` statement it knows by elimination that `text` is a `string`, since we already dealt with the array `string[]` earlier, and `string` is the only other type we declared as a possible input when we declared the function:

`function printAll(text: string | string[]) {`

---

## The 'typeof' operator

JavaScript supports a `typeof` operator which can give us information about the type of a value.

It returns a string from one of the following:

- `"string"`
- `"number"`
- `"bigint"`
- `"boolean"`
- `"symbol"`
- `"undefined"`
- `"object"`
- `"function"`

> Note: `null` and `arrays` are a type of object in JavaScript

We can use these values in our _type guards_ to narrow down the possible values of an input and work with them appropriately.

---

### Front-End Example:

Let's create an example where we handle different types of input for a width setting.

The user can provide the width either as a string with a unit (like `"100px"` or `"50%"`) or as a number representing pixels.

We'll use the `typeof` type guard to manage these cases.

```ts twoslash
function setElementWidth(element: HTMLElement, width: string | number) {
  if (typeof width === "string") {
    // If width is a string,
    // assume it's in a valid CSS format (e.g., "100px" or "50%")
    element.style.width = width;
  } else if (typeof width === "number") {
    // If width is a number, treat it as pixels
    element.style.width = `${width}px`;
  }
}

// usage:
const element = document.getElementById("my-element")!;

setElementWidth(element, "30%"); // Sets width to 30%
setElementWidth(element, 100); // Sets width to 100px
```
