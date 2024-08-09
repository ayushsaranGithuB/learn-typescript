---
layout: lesson
parent: TS-Stage1-1
children: TS-1-1
lesson: 3 - More Benefits
---

# More Benefits

We saw how TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match. Let's look at some more ways Typescript can make life easier for us as developers.

### Improved Tooling

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

Typescript integrates into our IDEs and uses Intellisense to bring up useful information while writing code.

> Hover over the variables in the code below to see Typescript Intellisence in action

```ts twoslash
let fName = "John";
let age = 43;

function greet(fName: string, age: number) {
  return `Hello ${fName}. You are ${age} years old`;
}
```

You can highlight or hover over any variable or function in your IDE to see it's expected type and arguments. This can be helpful so you don't have to dig out documentation or find the original function declaration to know what parameters are expected.

### Improved Maintainability

For small codebases that you write yourself you may be familiar with all the functions. But even this gets harder as the project grows in complexity, or when you return to the codebase after many months to make changes. You may not remember the exact order or structure of arguments for a function.

This is especially helpful when working on a team or shared project where multiple people are contributing code or when trying to edit an existing project where you did not write the code yourself.

Typescript let's you jump into a project and start making contributions without knowing 'All' the previously written functions because you can get help from Intellisence right in your IDE as you're writing new code.

### Backwards Compatibility

Browsers don't yet understand Typescript so it's compiled into JavaScript for execution. You can specify what version of javascript you want to target and all the TypeScript code is converted into JavaScript for runtime and to ship to browsers.
