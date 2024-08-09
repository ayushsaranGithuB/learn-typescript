---
layout: lesson
lesson: 2 - Exercise I
parent: TS-3
---

# Install TypeScript and Write a Simple TypeScript Program

#### Objectives:

- Set up a TypeScript development environment.
- Write and run a simple TypeScript program.

#### Steps:

1. If you haven't already created a project directory, do so and navigate into it:

   ```bash
   mkdir typescript-basics
   cd typescript-basics
   ```

2. Initialize a new Node.js project:

   ```bash
   npm init -y
   ```

3. Install TypeScript as a local dependency:

   ```bash
   npm install typescript --save-dev
   ```

4. Create a TypeScript configuration file:

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "target": "es5",
       "module": "commonjs",
       "strict": true,
       "outDir": "./dist",
       "rootDir": "./src"
     },
     "exclude": ["node_modules"],
     "include": ["src"]
   }
   ```

5. Create a `src` directory. This is where we will put our `.ts` typescript files.

   ```bash
   mkdir src
   ```

6. **Write a Simple TypeScript Program:**

   - Create a new file named `index.ts` in the `src` directory.
   - Open `index.ts` in your text editor and add the following code:

   ```ts
   // index.ts

   // Define a variable with a string type
   ?? = "Hello, TypeScript!";

   // Define a function that returns a greeting message
   function greet(name: string){
       return `${greeting} Welcome, ${name}!`;
   }
   // Call the function and log the result
   console.log(greet("Student"));
   ```

7. **Compile the TypeScript Code:**

   - Compile your TypeScript code to JavaScript using the TypeScript compiler. Run the following command in your terminal:

   ```bash
   npx tsc
   ```

   - This will generate a `dist` directory and a file named `index.js` inside it with our compiled code.

8. **Run the JavaScript Code:**

   - Run the compiled JavaScript code using Node.js:

   ```bash
   node ./dist/index.js
   ```

   - You should see the output: `Hello, TypeScript! Welcome, Student!`.
