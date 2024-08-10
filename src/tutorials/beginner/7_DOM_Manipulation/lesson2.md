---
layout: lesson
lesson: 2 - Manipulating Elements
parent: TS-7
---

# Manipulating Elements

OK let's take a look at how we can manipulate a DOM element once we have selected it.

Let’s walk through a simple example where we select a button element, change its text content, and apply some styles using TypeScript.

```ts twoslash
// Manipulating a button element

// Select the button element by its ID and assign a type
const button = document.getElementById("myButton") as HTMLButtonElement;

// Change the text content of the button
button.textContent = "Click Me!";

// Apply some styles to the button
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";
```

Besides assigning a type, the rest of the code is the same as common JavaScript that you should already be familiar with.

Writing TypeScript for the web is the same as writing JavaScript with the added advantages of robust error-checking and intellisence suggestions right in our IDE.
