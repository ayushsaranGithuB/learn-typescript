---
layout: lesson
lesson: 5 - Objects
parent: TS-3
---

Finally let's look at object types

## Objects

Apart from primitives, the most common sort of type you’ll encounter is an *object type*. This refers to any JavaScript value with properties.

To define an object type, we simply list its properties and their types.

```ts twoslash
const user = {
  name: "Hayes",
  id: 0,
};
```

This creates an object with an inferred type which includes `name: string` and `id: number`

We can also supply object declarations as input parameters for a function

```ts twoslash
function greetCustomer(customer: {
  firstName: string;
  lastName: string;
}): string {
  return `Hello, ${customer.firstName} ${customer.lastName}!`;
}

greetCustomer({ firstName: "John", lastName: "Doe" }); // Hello, John Doe!
```

### Optional Properties

Object types can also specify that some or all of their properties are *optional*. To do this, add a `?` after the property name:

```ts twoslash
// last?: implies that last is optional
function printName(obj: { first: string; last?: string }) {
  // ...
}

// Both Valid
printName({ first: "Joe" });
printName({ first: "Tom", last: "Shaw" });
```

### Undefined properties

If you try to access a property that doesn’t yet exist, you’ll get the value `undefined` rather than a runtime error.

Because of this, when you *read* from an optional property, you’ll have to check for `undefined` before using it.

```ts twoslash
// @errors: 18048
function printName(obj: { first: string; last?: string }) {
  // @errors: 18048
  console.log(obj.last.toUpperCase()); // Error

  // A safer alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```
