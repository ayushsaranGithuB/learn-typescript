---
layout: lesson
lesson: 4 - Exercise IV
parent: TS-4
---

### Exercise: Create an Interface and Implement It in a Function

#### Objective:

- Learn how to define and use interfaces in TypeScript.
- Implement a function that accepts an object adhering to an interface.

#### Instructions:

1. **Create a TypeScript File:**

   - Create a file named `exercise4.ts` in your `src` directory.
   - Open `exercise4.ts` in your editor and complete the following code:

```ts

// exercise4.ts

// Define an interface for a user that accepts a name, age and email
interface User {
  ???
}

// Define a function that takes a User object and returns this greeting message
// "Hello, (name)! You are (age) years old and your email is (email).`;

function greetUser(???): ??? {
  return ???;
}

// Create a user object that implements the User type and has
// name: "Alice",  age: 30, email: "alice@example.com"
let user ???


// Call the function and log the result
console.log(greetUser(user));

```

### Check Solution

- Compile and run your code

```bash
npx tsc

node ./dist/exercise4.js
```

Your output in the console should be:

```bash
> node ./dist/exercise4.js

Hello, Alice! You are 30 years old and your email is alice@example.com.

```

---

<details>
<summary>Solution:</summary>

```ts
// exercise4.ts

// Define an interface for a user that accepts a name, age and email
interface User {
  name: string;
  age: number;
  email: string;
}

// Define a function that takes a User object and returns this greeting message
// "Hello, (name)! You are (age) years old and your email is (email).";
function greetUser(user: User): string {
  return `Hello, ${user.name}! You are ${user.age} years old and your email is ${user.email}.`;
}

// Create a user object that implements the User type and has
// name: "Alice", age: 30, email: "alice@example.com"
let user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Call the function and log the result
console.log(greetUser(user));
```

</details>
