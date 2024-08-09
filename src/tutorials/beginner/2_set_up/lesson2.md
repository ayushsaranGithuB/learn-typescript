---
layout: lesson
lesson:  2 - TsConfig
parent: TS-2
---

# Configuring Typescript

`tsconfig.json` is a configuration file in TypeScript that specifies the compiler options for building your project.

It helps the TypeScript compiler understand the structure of your project and how it should be compiled to JavaScript. Some common options include:

- `target`: the version of JavaScript to compile to.
- `module`: the module system to use.
- `strict`: enables/disables strict type checking.
- `outDir`: the directory to output the compiled JavaScript files.
- `rootDir`: the root directory of the TypeScript files.
- `include`: an array of file/directory patterns to include in the compilation.
- `exclude`: an array of file/directory patterns to exclude from the compilation.

Given below is the sample `tsconfig.json` file:

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

---

Create a `tsconfig.json` file in your project directory to specify the compiler options for building your project by copying the file above.

#### Compile your TypeScript code using the following command:

```
npx tsc
```

Note: You can also compile individual TypeScript files by specifying the file path after the tsc command. For example:

```
npx tsc ./src/index.ts
```

And you're all set! You can now start writing TypeScript code in your project.
