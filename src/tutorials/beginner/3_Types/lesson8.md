---
layout: lesson
lesson: 8 - Exercise III
parent: TS-3
---

Okay, let's do one more exercise to reinforce our learning before we move on to covering more types

# Exercise 3: Arrays and Enums

#### Objective:

- Practice defining and using arrays and enums in TypeScript.
- Implement a function that processes an array and uses an enum to categorize data.

- Create a file named `exercise3.ts` in your `src` directory.
- Open `exercise3.ts` in your text editor and complete the following code:

```ts

// exercise3.ts

// Define an enum for task status of 'NotStarted', 'InProgress' and 'Completed'

?? TaskStatus {
	??
}

// Define an array of tasks each with a title and status
let tasks: {???} = [

	// Add 3 sample tasks with statuses
	// 1. 'Learn TypeScript' - InProgress
	// 2. 'Build a TypeScript project' - NotStarted
	// 3. 'Review TypeScript concepts' - Completed

]

// Define a function that prints the tasks with their statuses

function printTasks(???: {???}[]): ??? {
	tasks.forEach(task => {
		???
		console.log(??); // print the name and status
	});
}

// Call the function and log the tasks
printTasks(tasks);

```

### Check Solution

- Compile and run your code

```bash
npx tsc

node ./dist/exercise3.js
```

Your output in the console should be:

```bash
> node ./dist/exercise3.js

Learn TypeScript: In Progress
Build a TypeScript project: Not Started
Review TypeScript concepts: Completed
```

---

<details>
<summary>Solution:</summary>

```ts
// exercise3.ts

// Define an enum for task status of 'NotStarted', 'InProgress' and 'Completed'
enum TaskStatus {
  NotStarted = "NotStarted",
  InProgress = "InProgress",
  Completed = "Completed",
}

// Define an array of tasks
let tasks: { title: string; status: TaskStatus }[] = [
  { title: "Learn TypeScript", status: TaskStatus.InProgress },
  { title: "Build a TypeScript project", status: TaskStatus.NotStarted },
  { title: "Review TypeScript concepts", status: TaskStatus.Completed },
];

// Define a function that prints the tasks with their statuses
function printTasks(tasks: { title: string; status: TaskStatus }[]) {
  tasks.forEach((task) => {
    console.log(`${task.title} - ${task.status}`); // print the name and status
  });
}

// Call the function and log the tasks
printTasks(tasks);
```

</details>
