---
layout: lesson
lesson: 5 -  The DOM and TypeScript Generics
parent: TS-7
---

# The DOM and TypeScript Generics

**Lesson: Working with the DOM and TypeScript Generics**:

TypeScript Generics `<T>` can help us create flexible, reusable functions for DOM manipulation that can interact with various types of DOM elements.

Let's recap the syntax of generics:

```ts
function myFunction<T>(param: T): returnType{
	...
}
```

Generics can help us by reducing the number of functions we need to write and maintain.

For example: A generic function that toggles visibility of any type of `HTMLElement` supplied to it.

```ts twoslash
// Toggles visibility
function toggleVisibility<T extends HTMLElement>(element: T): void {
  element.style.display = element.style.display === "none" ? "block" : "none";
}
```

In this example we want to restrict the input to the subset of `HTMLElement` instead of allowing any type so we use the `extends` keyword to specify that `T` must be of type `HTMLElement`.

- `HTMLElement` is the base class for all HTML elements in the DOM, such as `<div>`, `<input>`, `<button>`, etc.

- By writing `T extends HTMLElement`, we are telling TypeScript that the generic type `T` must be either `HTMLElement` itself or one of its subclasses (e.g., `HTMLDivElement`, `HTMLInputElement`, etc.).

- When using an IDE, you'll get better auto-completion and documentation support since TypeScript knows that `T` must be an `HTMLElement`.
