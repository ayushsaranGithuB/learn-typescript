---
layout: lesson
lesson: 4 - The 'in' type guard
parent: TS-201
---

# The 'in' type guard

JavaScript has `in` operator for determining if an object or its prototype chain has a property with a specific name.

It follows the syntax: `property_name in object_name`

Let's see an example:

```ts twoslash
type Person = { name: string; age?: number }; // age is optional

let john: Person = { name: "John", age: 32 };
let tim: Person = { name: "tim" }; // no age given

function hasAge(person: Person) {
  if ("age" in person) {
    console.log(`${person.name} has an age of ${person.age}`);
  }
}

hasAge(john); // "John has an age of 32"

hasAge(tim); // No Output - as tim has no age declared
```

Here the `if("age" in person)` checks to see if the `age` attribute is declared for the `person` input before proceeding.

The `in` type guard determines if an object contains a specific attribute, which can be a method or a property. It returns a boolean, indicating if the property is present in the object.

We can utilize this boolean value in our TypeScript as a way to narrow down potential types.

---

### Front-End Usage:

Here is an example of a function that resets form input fields, if the element is an `input` it resets it to blank, if the element is a select dropdown, it defaults back to the first option in the list.

```ts twoslash
function resetFormElement(el: HTMLInputElement | HTMLSelectElement) {
  // Check if the element is an input field
  if ("value" in el) {
    el.value = ""; // Reset input field
  }
  // Check if the element is a select field
  if ("options" in el) {
    el.selectedIndex = 0; // Reset select field to the first option
  }
}

// Example usage:
const inputEl = document.querySelector("input") as HTMLInputElement;
const selectEl = document.querySelector("select") as HTMLSelectElement;

resetFormElement(inputEl); // Resets input field to " "
resetFormElement(selectEl); // Resets select field to the first option
```

Try it out: [Codepen -pen/gONovmG](https://codepen.io/ayushsaranGithuB/pen/gONovmG)
