---
layout: lesson
lesson: 6 - Modules
parent: TS-7
---

# Modules

In modern front-end development, modularizing your code is essential for maintaining a clean, organized, and scalable codebase.

TypeScript's module system allows you to break your application into smaller, manageable pieces, each with its own responsibilities.

Let's look at importing and exporting modules, which is especially useful when working on larger applications that involve DOM manipulation.

## **ES6 Modules (`import` and `export`)**

Modern browsers support ES6 modules, allowing you to use `import` and `export` directly in the browser.

The ES6 module system allows you to organize your code into reusable and maintainable pieces. You can split your code into multiple files, export the necessary components from one file, and import them into another.

**Example:**

We can save reusable functions in a `utils.ts` file

```ts twoslash
// src/utils.ts
export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

And import it into our TypeScript files when we need it:

```ts
// src/main.ts
import { greet } from "./utils";
console.log(greet("World")); // Output: Hello, World!
```

### **The `import` and `export` keywords:**

These keywords are required for the module system to work.

**Exporting**:

- When you "export" something from a module, you make it available for use in other modules.
- Exports can be functions, variables, classes, or even entire modules.
- Exported items are not accessible outside of their module unless explicitly exported.

**Importing**:

- When you "import" something into a module, you bring in functionalities that have been exported from another module.
- Imports are used to make use of variables, functions, or classes defined in other files.
- When importing from other files, you can use relative paths (e.g., `./utils`) or absolute paths based on your project structure.

### Named vs Default Exports

In TypeScript, there are two main ways to export items from a module: **named exports** and **default exports**.

##### 1. Named Exports

- Named exports allow you to export multiple items from a single module.

```ts twoslash
// EXPORTS: src/utils.ts

export const apiUrl = "https://api.example.com";

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export class User {
  constructor(public name: string, public age: number) {}
}
```

- Each exported item can be imported using the exact name it was exported with.

```ts
// IMPORTS src/main.ts
import { apiUrl, greet, User } from "./utils";
```

- You can alias imports if you want to avoid naming conflicts or clarify the imported names.

```ts
// IMPORTS src/main.ts
import { apiUrl as endpoint, greet as sayHello } from "./utils";
```

##### 2. Default Exports

- A default export is used when you want to export a single item from a module.
- A module can only have one default export.

```ts twoslash
// DEFAULT EXPORT - src/logger.ts

export default function logMessage(message: string): void {
  console.log(`Log: ${message}`);
}
```

### Browser Support for Modules and Modifying the Script Tag

---

Modern browsers support ES6 modules, allowing you to use `import` and `export` directly in the browser. To leverage this in your front-end projects, you need to modify your `<script>` tags.

#### Enabling ES6 Modules in Browsers

To use ES6 modules in the browser, add the `type="module"` attribute to your `<script>` tag:

````html
```
<script type="module" src="app.js"></script>
````

This tells the browser to treat the script as a module, enabling the use of `import` and `export`. The `type="module"` attribute also ensures that:

- Scripts are loaded with `defer` behavior by default, meaning they will execute after the HTML has been fully parsed.
- Module scripts are automatically executed in strict mode.
- Each module script is fetched with CORS, ensuring cross-origin safety.

#### Legacy Browser Support

For older browsers that do not support ES6 modules, you can include an alternate single file version of your script as a fallback using the `nomodule` attribute:

```html
<script nomodule src="legacy-app.js"></script>
```

This will load an alternative script for browsers that don't understand modules, ensuring compatibility.

---

## **CommonJS Modules** in TypeScript

While ES6 modules are the modern standard for JavaScript, many environments, especially Node.js, still use the CommonJS module system.

Understanding how to work with CommonJS modules in TypeScript is important, particularly when dealing with legacy code or libraries that haven’t transitioned to ES6 modules.

---

#### Key Differnece?

Unlike ES6 modules, which use `import` and `export`, CommonJS modules use `require()` to import and `module.exports` or `exports` to export functionalities.

---

#### Exporting in CommonJS

In CommonJS, you export functionalities using either `module.exports` or `exports`.

##### 1. Using `module.exports`

- This method is often used for exporting a single item, like a function, class, or object.

```js
// src/utils.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;
```

##### 2. Using `exports`

- This method is used for exporting multiple items from a module. It’s essentially a shortcut for adding properties to `module.exports`.

```js
// src/utils.js
exports.apiUrl = "https://api.example.com";

exports.greet = function (name) {
  return `Hello, ${name}!`;
};
```

---

#### Importing in CommonJS

In CommonJS, you import functionalities using the `require()` function.

##### 1. Importing a Single Export

- When using `module.exports` to export a single item, you can import it directly using `require()`.

```js
// src/app.js
const greet = require("./utils");

console.log(greet("Alice")); // Output: 'Hello, Alice!'
```

`

##### 2. Importing Multiple Exports

- When using `exports` to export multiple items, you need to destructure the imports or access them as properties of the imported object.

```js
// src/app.js
const { apiUrl, greet } = require("./utils");
```

``

---

#### TypeScript with CommonJS

TypeScript supports CommonJS modules out of the box. When you compile TypeScript code to JavaScript, it can be configured to output CommonJS modules.

##### 1. Configuring TypeScript for CommonJS

To compile your TypeScript files into CommonJS modules, set the `module` option to `commonjs` in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5"
  }
}
```

`

##### 2. Writing TypeScript with CommonJS

When using TypeScript with CommonJS, you can write your TypeScript code using ES6-style `import` and `export`, and TypeScript will handle the conversion to CommonJS during compilation.

However, if you prefer, you can write your TypeScript code directly using CommonJS syntax.

**Example Using ES6 Syntax:**

```ts
// src/utils.ts

export function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

**Example Using CommonJS Syntax:**

```ts
// src/utils.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

module.exports = greet;
```

Both examples above will work in a Node.js environment, depending on your module setup.

---

### Summary

TypeScript’s flexibility allows you to work seamlessly with both CommonJS and ES6 modules.

Whether you're maintaining legacy code or developing new features, understanding how to use and configure modules in TypeScript will ensure your code is compatible across many different environments.
