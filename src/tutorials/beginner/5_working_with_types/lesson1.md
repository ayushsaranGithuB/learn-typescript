---
layout: lesson
lesson: 1 - Type Assertions
parent: TS-5
---

# Type Assertions

In TypeScript, type assertions are a powerful feature that allows developers to override the type inference system. They provide a way to tell the TypeScript compiler "trust me, I know what I'm doing," enabling more control over type-checking and facilitating specific scenarios where the default type inference might fall short.

Type assertions are particularly useful in situations where you are certain about the type of a value, but TypeScript cannot automatically infer it. This can often occur when working with dynamic content, such as data fetched from an API, where the type information is not explicitly available. By using type assertions, you can ensure that your code is interpreted as you intend, helping to avoid unnecessary type errors and making the codebase more manageable.

Let's look at how to use type assertions in our code.

---

In TypeScript, the `as` keyword is used for type assertions, allowing you to explicitly inform the compiler about the type of a value when it cannot be inferred automatically.

```ts twoslash
// @errors: 18046
let someValue: unknown = "Hello, TypeScript!";

let strLowerCase: string;

strLowerCase = someValue.toLowerCase(); // Error: Object is of type 'unknown'.

// But if we explicitly define its type using 'as'
strLowerCase = (someValue as string).toLowerCase(); // This is OK
```

Type assertions are a way to override the default static type-checking behavior and tell the compiler that you know more about the type of a particular expression than it does.

In this example, `someValue` is initially of type `unknown`, and we use the `as` operator to assert that it is of type `string` before accessing its `toLowerCase` method.

Type assertions are useful in scenarios where:

- The type of a variable cannot be easily inferred by the compiler.
- The type of a variable changes dynamically, such as when dealing with third-party libraries or API responses.
- You need to narrow down the type of a variable for further operations.
