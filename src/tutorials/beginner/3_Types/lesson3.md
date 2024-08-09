---
layout: lesson
lesson: 3 - Arrays and Tuples
parent: TS-3
---

## `Arrays`

Arrays are a collection of values like [1,2,3] or ["red", "green", "blue"]

To specify the type of an array like `[1, 2, 3]`, we use the syntax `number[]`, similarly `string[]` is an array of strings, and so on.

```ts twoslash
// An array of odd numbers
let oddNumbers: number[] = [1, 3, 5, 7];

// An array of strings
let names: string[] = ["Joe", "Amy", "Jack"];

// number includes both int and float values
let integerValue: number = 25;
let floatingValue: number = 22.9;
```

> You may also see `number[]` written instead as `Array<number>`, which means the same thing.
>
> We’ll learn more about the syntax `T<U>` when we cover *generics*.

---

## Arrays of Objects

You can also build an array of objects by defining the object structure before the `[]`

```ts twoslash
// Define an array of objects
let points: { x: number; y: number }[] = [
  { x: 10, y: 56 },
  { x: 30, y: 86 },
  { x: 34, y: 68 },
];
```

---

## Mixed Arrays

So far we looked at Arrays that included all values of the same type, like strings, numbers or objects.

But in JavaScript we could also have mixed arrays, such as:

```js
// mixed array in *js*
let person = ["Jack", 43];
```

How can we achieve this in Typescript, we define this kind of array by using a **Union Type**

```ts twoslash
let person: (string | number)[] = ["Jack", 43];

// these are also valid
let persons: (string | number)[] = [43, "Jack"];
let people: (number | string)[] = ["Jack", 43];
```

### Union Types

The union `(string | number)` tells typescript that this array accepts values of either a string or a number type. The order or position of the types in the union does not matter.

The syntax is to separate all the acceptable types by a pipe `(number | string | boolean)`

We can also use this Union Type for variables:

```ts twoslash
let size: string | number = 6;

size = "XL"; // this is valid
size = 9; // this is also valid
```

---

## `Tuples`

If we have an array which expects specific number of types in specific positions, we call it a `Tuple`

> A tuple is an array with a pre-defined length and type of element, at each position in a specified order.

```ts twoslash
// @errors: 2493
// A tuple that expects 2 elements in a specific order
const owner: [string, number] = ["John", 43];

const fName = owner[0]; // 'John'
const age = owner[1]; // 43

// Typescript will warn us if we try to access an index that does not exist
const gender = owner[2]; // Error
```

Tuples can help us ensure that we do not try to access a property or index that does not exist and warn us at compile time instead of runtime in the browser, helping us catch errors early.

It will also warn us if we try to assign a value of the wrong type to the tuple

```ts twoslash
// @errors: 2322
// If '43' is passed as string instead of number
const owner: [string, number] = ["John", "43"]; // Error
```

### Should I use tuples or a union type in TypeScript?

> Tuples should be used when you need to enforce a specific order and type for each element in an array. This is useful for representing structured data where each position has a defined meaning and type.
>
> Union types, on the other hand, are better for scenarios where you need flexibility in the types of elements that can be stored in the array and there is **no specific meaning implied to the position of the items** in the array

This is most useful when passing an array into a function where the function may require the first element in the array to be a first name and the second a last name etc...
