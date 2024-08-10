---
layout: lesson
lesson: 3 -  Event Handling
parent: TS-7
---

# Event-Handling

Event handling in TypeScript follows the same convention as JavaScript

```ts twoslash
// Step 1: Select the button element by its ID and assign a type
const button = document.getElementById("changeButton") as HTMLButtonElement;

// Step 2: Add an event listener to fire when the button is clicked
button.addEventListener("click", () => {
  button.textContent = "Button Clicked!";
  button.style.backgroundColor = "green";
  button.style.color = "white";
});
```

#### Handling Different Types of Events

Different events in the DOM have different types associated with them, such as `MouseEvent`, `KeyboardEvent`, `FocusEvent`, etc. When handling these events, it's important to annotate them correctly to get the full benefits of TypeScript's type checking.

If you hover over the example above you will see that a `MouseEvent` was implied because we used the `click` event listener.

Here are some examples:

1. **MouseEvent:** Click

```ts twoslash
const button = document.getElementById("myButton") as HTMLButtonElement;

button.addEventListener("click", (event: MouseEvent) => {
  console.log("Mouse coordinates:", event.clientX, event.clientY);
});
```

2.  **Generic Event: Input**

```ts
const inputField = document.getElementById("myInput") as HTMLInputElement;

inputField.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log("Input value:", target.value);
});
```

3. **Form Submission Event:**

```ts twoslash
const form = document.getElementById("myForm") as HTMLFormElement;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault(); // Prevent form submission
  console.log("Form submitted");
});
```

Although not required, by explicitly typing these events, we can avoid many common mistakes, such as trying to access properties that don’t exist on the event object.
