---
layout: lesson
lesson: 3 - Equality narrowing
parent: TS-201
---

# Equality narrowing

Apart from the `typeof` operator we can also use other `switch` statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types. For example:

```ts twoslash
// @errors: 2339 18047
function example(x: string | number, y: string | null) {
  x.toUpperCase(); // Error

  y.toUpperCase(); // Error

  // But

  if (x === y) {
    // both are 'string' because that is the only type common to both
    // so we can use string methods without an error

    x.toUpperCase();
    y.toUpperCase(); // No Error
  }
}
```

Since `string` is the only type in common between the possible values of `x` and `y`, Typescript knows this and allows us to perform string operations.
