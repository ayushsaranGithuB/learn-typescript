---
layout: lesson
lesson: 5 - The 'instanceof' type guard
parent: TS-201
---

# The 'instanceof' type guard

Similar to the `in` type guard we can use the `instanceof` typeguard to check if a value is an instance of another value or class.

Syntax: `object_name instanceof class_name`

Example:

```ts
class Animal {
  "species": string;
}

class Dog extends Animal {
  "breed": string;
}

let pug = new Dog();

// check if pug is an instance of Dog
console.log(pug instanceof Dog); // true
console.log(pug instanceof Animal); // also true because Dog extends Animal
```

We can use the `instanceof` operator as a _type guard_ to test if a value conforms to a object Type

### But keep in mind:

> The `instanceof` operator expects the left-hand operand to be an object, not a class.

```ts
// ALL FALSE - !!!

console.log(Dog instanceof Dog); // FALSE
// because Dog is a class not an instance of a class

console.log(Animal instanceof Animal); // FALSE
// because Animal is also class not an instance of a class

console.log(Dog instanceof Animal); // FALSE
// because Dog is a class not an instance of a class
```

**And similarly with Interfaces**

```ts
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

let pug: Dog = {
  species: "mammal",
  breed: "pug",
};

// Will Cause Errors - !!!

console.log(pug instanceof Dog); // Error - Dog only refers to a type and not a value
console.log(pug instanceof Animal); // Error - Animal only refers to a type and not a value
console.log(Dog instanceof Animal); // Error - Animal only refers to a type and not a value
```

## What is happening here ?

- Interfaces are a TypeScript feature used at compile-time for type-checking. They do not exist at runtime, which is why `instanceof` cannot be used with interfaces.

- Since interfaces are purely a compile-time construct and don’t exist in the emitted JavaScript, trying to use `instanceof` with an interface will cause a TypeScript error.

The `instanceof` operator is a powerful tool for runtime type checking in JavaScript, but it’s important to understand its limitations: **It only works with classes and instances, not with interfaces or types.**

---

Lets look at how we can apply this to Front-End Development

### Example: Form Validation

**Let's define a class to handle validation errors in forms.** We want the class to have a message and also hold the name of the input field which failed validation.

```ts
class ValidationError extends Error {
  constructor(public message: string, public field: string) {
    super(message);
  }
}
```

If there is an error in form validation we want to tell the user what field was the problem. For all other errors, we just want to display the error message.

We can handle both types of errors in a single function by using the `instanceof` type guard:

```ts
class ValidationError extends Error {
  constructor(public message: string, public field: string) {
    super(message);
  }
}

function handleError(error: Error) {
  if (error instanceof ValidationError) {
    // For Validation Errors
    console.error(`Validation failed on ${error.field}: ${error.message}`);
  } else {
    // For all other errors, output the message
    console.error(`General error: ${error.message}`);
  }
}

// Usage example:
const error1 = new ValidationError("Invalid email format", "email");
handleError(error1); // Validation failed on email: Invalid email format

const error2 = new Error("Something went wrong");
handleError(error2); // General error: Something went wrong
```

**Here is another example that deals with form elements:**

```ts twoslash
// A function that handles various types of form elements differently

function handleFormElement(el: HTMLElement) {
  if (el instanceof HTMLInputElement) {
    // Handle HTMLInputElement
    console.log("This is an input element.");
    el.value = "Updated value"; // Modify input element's value
  } else if (el instanceof HTMLButtonElement) {
    // Handle HTMLButtonElement
    console.log("This is a button element.");
    el.disabled = true; // Disable button
  } else {
    console.log("This is some other type of HTMLElement.");
  }
}
```
