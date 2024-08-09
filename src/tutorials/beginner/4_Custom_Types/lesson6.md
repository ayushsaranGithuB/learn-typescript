---
layout: lesson
lesson: 6 - Exercise V
parent: TS-4
---

### Exercise: Inheritance and Function Return Types

#### Objective:

- Understand how to use inheritance in TypeScript.
- Define and use function return types.

#### Instructions:

1. **Create a TypeScript File:**

   - Create a file named `exercise5.ts` in your `src` directory.
   - Open `exercise5.ts` in your text editor and complete the following code:

```ts
// exercise5.ts

// Define a class named 'Person' with properties: name (string) and age (number)
class Person {
  constructor(public name: ??, public ??: number) {}

  // Define a method that returns a greeting message:
  // "Hello, my name is (name) and I am (age) years old."
  greet(): ??? {
    return ???;
  }
}

// Define a class named 'Employee' that inherits from 'Person' and adds a new property: jobTitle (string)
class ?? extends ?? {
  constructor(name: ??, ??: number, public jobTitle: ??) {
    super(??, ??);
  }

  // Override the greet method to include the job title in the message:
  // "Hello, my name is (name), I am (age) years old and I work as a (jobTitle)."
  greet(): ??? {
    return ???;
  }
}

// Create a Person object with name: "John", age: 40
let person = ??;

// Create an Employee object with name: "Jane", age: 30, jobTitle: "Software Engineer"
let employee = ??;

// Log the result of calling the greet method on both objects
console.log(person.greet());
console.log(employee.greet());


```

### Check Solution

- Compile and run your code

```bash
npx tsc

node ./dist/exercise5.js
```

Your output in the console should be:

```bash
> node ./dist/exercise5.js

Hello, my name is John and I am 40 years old.
Hello, my name is Jane, I am 30 years old and I work as a Software Engineer.
```

---

<details>
<summary>Solution:</summary>

```ts twoslash
// exercise5.ts

// Define a class named 'Person' with properties: name (string) and age (number)
class Person {
  constructor(public name: string, public age: number) {}

  // Define a method that returns a greeting message: "Hello, my name is (name) and I am (age) years old."
  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Define a class named 'Employee' that inherits from 'Person' and adds a new property: jobTitle (string)
class Employee extends Person {
  constructor(name: string, age: number, public jobTitle: string) {
    super(name, age);
  }

  // Override the greet method to include the job title in the message:
  // "Hello, my name is (name), I am (age) years old and I work as a (jobTitle)."
  greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
  }
}

// Create a Person object with name: "John", age: 40
let person = new Person("John", 40);

// Create an Employee object with name: "Jane", age: 30, jobTitle: "Software Engineer"
let employee = new Employee("Jane", 30, "Software Engineer");

// Log the result of calling the greet method on both objects
console.log(person.greet());
console.log(employee.greet());
```

</details>
