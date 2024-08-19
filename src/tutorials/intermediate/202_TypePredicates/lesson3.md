---
layout: lesson
lesson: 3 - Drawbacks of Type Predicates
parent: TS-202
---

# Drawbacks of Type Predicates

While type predicates are very useful, they have some drawbacks:

1. **Runtime Overhead**: Type predicates add runtime checks to your code. For complex types or frequent checks, this can slow down performance.
2. **Limited by JavaScript Capabilities**: Type predicates can only check what JavaScript can do at runtime. They can't enforce more complex TypeScript-only types, like interfaces with methods or generic types.
3. **Maintainability**: We can cause problems if the type definitions are updated but the type predicates are not.
4. **False Security**: If not written correctly, type predicates can give a false sense of security, leading to potential bugs if the type checks are not thorough.

Here's an example of how a poorly written type predicate can create a false sense of security, leading to potential bugs:

```ts twoslash
interface Button {
  value: "Login";
  onClick: () => void;
}

interface Input {
  value: "Login";
  name: "username";
}

type Field = Button | Input;

function isButton(element: Field): element is Button {
  return (element as Button).value === "Login";
}

function handleField(element: Field) {
  if (isButton(element)) {
    // TypeScript now believes 'element' is a Button
    element.onClick(); // This line is considered safe by TypeScript
  } else {
    console.log(element.name); // This line is considered safe by TypeScript
  }
}

// Simulated events
const unknownField: Field = { value: "Login", name: "username" };
handleField(unknownField);
```

Here is a function with no Typescript errors, but an improperly written type predicate produces errors at runtime:

```
[ERR]: element.onClick is not a function
```

The problem is that it assumes that the presence of value: "Login" guarantees that `element` is indeed a Button. The check only looks at the `value` property without verifying the presence of the `onclick` method.

Because the predicate is incomplete (only checking the `value` property), it can lead to assumptions that aren't true, potentially causing bugs at runtime.

In most cases
