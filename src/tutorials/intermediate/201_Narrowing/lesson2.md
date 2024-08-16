---
layout: lesson
lesson: 2 - Truthiness narrowing
parent: TS-201
---

# Truthiness narrowing

In JavaScript we can can use certain operator to check the truthiness of a value. Operators like `if`, `&&`, `!`, `||` etc..

These constructs will _coerce_ the value of their condition to check for truthiness, even if the value is not a _boolean_. Consider:

```ts twoslash
let x = "Everyday"; // x is a string not a boolean

if (x) {
  console.log(true);
}

// logs true
```

Values like

- `0`
- `NaN`
- `""` (the empty string)
- `0n` (the `bigint` version of zero)
- `null`
- `undefined`

all coerce to `false`, and other values get coerced to `true`.

We can check for this truthiness and use it as a _type guard_ when writing our functions.

Let's see an example:

```ts twoslash
// @errors: 18047
function printLength(str: string | null) {
  console.log(str.length);
}
```

Typescript will warn us that `str` is possibly null, based on our declaration. We can fix this by checking for the truthiness of the value before proceeding:

```ts twoslash
function printLength(str: string | null) {
  if (str) {
    console.log(str.length);
  }
}

printLength("hello"); // 5
```

**This is another form of _type guard_.**

By checking if the value of `str` was _true_ we eliminated the `null` type and now we can use string methods since TypeScript has _narrowed_ down `str` to a `string`, since it is the only other possible value from our declaration.

---

#### Front-End Usage:

You may be already using this in your functions to check for `null` elements before making changes:

```ts twoslash
function styleElementById(elementId: string, color: string) {
  const element = document.getElementById(elementId);

  if (element) {
    // The element exists, so we can safely apply the style
    element.style.backgroundColor = color;
  } else {
    // The element doesn't exist, so we handle this case
    console.log(`Element with ID '${elementId}' not found.`);
  }
}

// Example usage:

// Assuming an element with ID "header" exists in the HTML
styleElementById("header", "lightblue");

// Assuming no element with ID "footer" exists in the HTML
styleElementById("footer", "lightgreen"); // Will log "Element with ID 'footer' not found."
```
