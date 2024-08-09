---
layout: lesson
lesson: 7 - Exercise II
parent: TS-3
---

# Exercise 2: Basic Types and Variables

#### Objective:

- Practice defining and using basic types in TypeScript.
- Implement a function that uses these types to perform a simple task.

**Create a TypeScript File:**

- Create a file named `exercise2.ts` in your src directory.
- Open `exercise2.ts` in your text editor and fill in the ?? marks to complete the following code:

```ts
// exercise2.ts

// Part I

// Write a 'greet' function that checks if a boolean is true then outputs 'Welcome to TypeScript in 2024'

// Define a string variable
let ??? = "Welcome to TypeScript!";

// Define a number variable
let ??? = 2024;

// Define a boolean variable
let ?? = true;

// Define the greet function that takes the boolean as the input and returns a string
let greet(??) : ?? {
	if(??){
	  return ?? // concatenated string and year
	}else{
	 return 'nothing'; // if the boolean is false
	}
}

// Log the output of the greet function
console.log(greet(isActive));

```

Try to complete this exercise yourself with no typescript errors.

If you can do this without peeking, then you're in a good place to carry on to the next section.

---

<details>
<summary>Solution:</summary>
    
```ts twoslash
    // exercise2.ts

    // Part I

    // Write a 'greet' function that checks if a boolean is true then outputs 'Welcome to TypeScript in 2024'

    // Define a string variable
    let welcomeMessage: string = "Welcome to TypeScript!";

    // Define a number variable
    let year: number = 2024;

    // Define a boolean variable
    let isActive: boolean = true;

    // Define the greet function that takes the boolean as the input and returns a string
    function greet(isActive: boolean): string {
        if(isActive){
            return `${welcomeMessage} in ${year}`; // concatenated string and year
        }else{
            return 'nothing'; // if the boolean is false
        }
    }

    // Log the output of the greet function console.log(greet(isActive));

```

</details>
