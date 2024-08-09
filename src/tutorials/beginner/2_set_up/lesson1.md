---
layout: lesson
lesson: 1 - Installing Typescript
parent: TS-2
---

# Installing Typescript

Typescript can be installed multiple ways, but the simplest way is to use a package manager like npm.

> **You must have Node.js setup already for these commands to work** - If not, go get it [here](https://nodejs.org/en) before proceeding.

## Open up your terminal and create a project directory

```bash
mkdir typescript-basics
```

- Navigate inside the directory

```bash
cd typescript-basics
```

- Initialize npm by running the following command:

```
npm init
```

This creates a `package.json` file where we can keep track of project dependencies.

- Install TypeScript as a project dependency by running the following command:

```
npm install --save-dev typescript
```

the `--save-dev flag` tells Node to add typescript to the list of dev dependencies for the project.

> Note:
>
> You could also install typescript TypeScript globally, instead of a per-project basis by running the command `npm install -g typescript` but this is not recommended, in most cases it's better to have TypeScript set up on a per-project basis with different versions of TypeScript, this keeps each project working consistently and makes it less likely that a future update will break an older project if there are significant changes in the language.

#### This is what your package.json file should look now like:

![https://i.postimg.cc/4xCqZnCS/screenshot-16.png](https://i.postimg.cc/4xCqZnCS/screenshot-16.png)

Okay now lets verify that it's installed correctly by running `npx tsc -v` You should see the version of Typescript returned back, like `Version 5.5.4`

## Let's take it for a spin:

Open up your IDE and create a file called `index.ts` in your project directory

```ts twoslash
// index.ts
const hello = "Hello World";
console.log(hello);
```

> .ts denotes a TypeScript file.

Now run `npx tsc index.ts` in your terminal and you should see a new `.js` file created alongside it:

```js
// index.js
var hello = "Hello World";
console.log(hello);
```

### What happened ?

The typescript compiler converted our `.ts` file into a plain `.js` file, exchanging our modern `const` declaration for an older `var` for maximum compatibility.

It added the new `.js` file to the same directory as the original `.ts` file, which is not very helpful, next we will look at adding a tsconfig file and setting up options for input / output directories, JavaScript versions and more...
