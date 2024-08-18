---
layout: lesson
lesson: 1 - Selecting Elements
parent: TS-7
---

# Selecting Elements

Selecting elements in Typescript is similar to how we select elements in plain JavaScript

```ts
// Selecting by ID
const button = document.getElementById("myButton");

// Selecting by Tag
const paragraphs = document.querySelectorAll("p");

// Selecting by Attribute
const inputField = document.querySelector("input[name='username']");
```

## Type Inference

Based on the selector we use Typescript assigns an auto-inferred type for the expected value;

```ts
// Selecting by Class or ID
const button = document.getElementById("myButton"); // HtmlElement

// Selecting by Tag
const paragraphs = document.querySelectorAll("p"); // NodeListOf<HtmlParagraphElement>
const inputField = document.querySelector("input"); // HtmlInputElement
```

## Null checking

An element specified in our script may not exist on the page, so by default TypeScript will warn us when we try to access a property that the element may be null.

We can work around this by enforcing checks or using the `!` symbol to tell typescript that we definitely know that the element exists

```ts twoslash
// @errors:  18047
const possibleButton = document.querySelector("button");
let value = possibleButton.value; // Error

// Better to Check

if (possibleButton) {
  let value = possibleButton.value; // This is allowed
}

// OR

const knownButton = document.querySelector("button")!; // ! = override
let valueX = knownButton.value; // This is allowed
```

The non-null operator (!) is a kind of type assertion. It allows us to tell TypeScript that a value will never be null or undefined. It’s important to be careful when using the non-null assertion operator, as it can lead to runtime errors if the value is actually `null` or `undefined`.

## Explicitly Specifying Type

By specifying the type of element TypeScript provides us with auto-completion of its properties in our editor and compile-time error checking, warning us if we try to use a property that does not exist for that element

```ts
const paragraph = document.querySelector("p")!;
let value = paragraph.value; // Error
```

In this example the property value exists on Inputs, Selects and other Form Elements but does not exist on paragraphs so TypeScript will warn us

## Classes and IDs

When we use tags in our selectors TypeScript can automatically infer the type of element from the tag, but when we use classes and IDs TypeScript does not know which element that CSS selector applies to.

```ts twoslash
// @errors: 2339
const element = document.querySelector(".input")!; // Using a Class selector

let value = element.value; // Error
```

We can use the as keyword to tell TypeScript what kind of element we are expecting as a return.

```ts
// using the as keyword
const inputElement = document.querySelector(".input") as HTMLInputElement;
let inputValue = inputElement.value; // No Error

// Note:  ! no longer needed after selector
// But it's still a good idea to test for a value before using it in production
```

An added benefit is that we no longer need the `!` sign after our element since TypeScript now knows what kind of element to expect.

In practice, webpages may be broken, attributes and values can be missing so it's still a good idea to test for a value before using it in production to avoid unexpected runtime errors.

## Different types of HTML Elements

There are many different types of HTML Elements that we can use in TypeScript:

```ts
// Selecting by ID
const button = document.getElementById("myButton") as HTMLButtonElement; // TS

// Selecting by Tag
const paragraphs = document.querySelectorAll("p") as HTMLElement; // TS

// Selecting by Attribute
const inputField = document.querySelector(
  "input[name='username']"
) as HTMLInputElement; // TS
```

You can refer to the MDN docs to see a list of all possible HTMLElement types https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API

You don't need to memorize them all right away. As we continue to work with TypeScript and the DOM you will become familiar with the most common types and our IDE will also help by auto-completing and suggesting the right Element type using Intellisense.
