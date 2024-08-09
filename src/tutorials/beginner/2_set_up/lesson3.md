---
layout: lesson
lesson: 3 - Review
parent: TS-2
---

# Review

Let's review what we learnt from this Lesson

### Typescript needs to be compiled before it can be shipped and executed in the browser.

We can setup a `tsconfig.json` file at the root of our project directory with options that will apply to all typescript compilations in our project.

Then we can skip declaring options in the command line and just run the `tsc` command to compile our whole project based on those rules.

```
npx tsc
```

OR we can compile individual files by passing the filename and options to the typescript compiler

```
tsc index.ts --target ES5 --module commonjs
```

Next we will dig deeper into Typescript itself and learn about Types and how to use them.
