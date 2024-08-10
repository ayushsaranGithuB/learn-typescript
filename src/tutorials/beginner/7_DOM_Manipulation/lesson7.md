---
layout: lesson
lesson: 7 - Asynchronous Programming
parent: TS-7
---

# **Asynchronous Programming**

Handling promises and async/await, when dealing with APIs and the DOM.

As front-end developers, you’ll often need to interact with APIs or perform tasks that take time, like fetching data or waiting for user actions. Understanding how to handle these tasks effectively with promises and `async/await` will help you write cleaner and more responsive code.

We’ll cover:

- **Promises:** How to create and manage promises to handle asynchronous operations.
- **Async/Await:** A more readable way to write asynchronous code, making it easier to work with promises.
- **Real-World Examples:** Using promises and `async/await` to handle API calls and interact with the DOM.

## **Promises (`es2015.promise`)**

Promises are a key concept in asynchronous programming, allowing us to handle operations that may complete at a later time. A promise represents a value that may be available now, in the future, or never.

The `es2015.promise` module defines the `Promise` type, which is used for handling asynchronous operations in TypeScript. This module provides type definitions for promises, allowing you to work with asynchronous code in a type-safe manner.

**Why It’s Important:**

- Simplifies asynchronous code with a clean, consistent API.
- Helps in handling complex operations like API calls, file reads, etc.

##### Creating a Promise

Let's start by creating a simple promise:

```ts twoslash
const myPromise = new Promise<string>((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});
```

In this example:

- We define a new promise that will either resolve with a success message or reject with an error message.
- The promise is typed to return a `string`.

##### Handling a Promise

Once we have a promise, we can handle its outcome using `.then()` and `.catch()`:

```ts
myPromise
  .then((result) => {
    console.log(result); // "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed."
  });
```

---

## \*_Async/Await_

While promises are powerful, chaining multiple `.then()` calls can sometimes lead to less readable code. TypeScript offers `async/await` as a more intuitive way to work with asynchronous operations.

##### Writing an Async Function

An `async` function automatically returns a promise. Inside the function, we can use `await` to pause execution until a promise is resolved or rejected.

```ts twoslash
async function fetchData(): Promise<void> {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

In this example:

- The `fetchData` function is marked as `async`, meaning it will return a promise.
- We use `await` to pause execution until the `fetch` promise resolves, then parse the response as JSON.
- If an error occurs, it is caught in the `catch` block.

---

### Working with the Error type

In the previous example if we wanted to display the error message to the user we would normally access it through `error.message` but if we try to do this in Typescript we will get a warning that `error` is `unknown`

```ts twoslash
// @errors: 18046
async function fetchData(): Promise<void> {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    alert(error.message);
  }
}
```

This is because the error object returned could be of any type and may not have an error property. Consider these possibile shapes for the error being returned

```ts
// Most Likely an object with a message property, this is common
error = {
  message: '500: Internal Server Error';
}

// Could also be just a string
error = 'Something went wrong'

// Or an array
error = [500,'Internal Server Error']

```

To prevent accessing a property that may not exist TypeScript will warn us and so we should use a type assertion and an if block to check the message exists and then access it for display.

Example:

```ts twoslash
async function fetchData(): Promise<void> {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    if ((error as Error).message) {
      alert((error as Error).message);
    }
  }
}
```
