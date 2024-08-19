---
layout: lesson
lesson: 1 - What are Type Predicates
parent: TS-202
---

# What are Type Predicates in TypeScript?

A type predicate is a function that returns a boolean, showing whether a variable is of a specific type.

### Syntax:

```ts
function isType(arg: any): arg is Type {
  // logic to check if arg is of Type
}
```

Here, `arg is Type` is the type predicate. It tells TypeScript that if the function returns `true`, `arg` is of type `Type`.

### Examples:

## Ensuring Data Integrity in API Responses

When dealing with API responses, the data might not always be in the expected format. For example, if we get user data from an API, we need to make sure it matches our `User` interface before using it.

```ts twoslash
interface User {
  id: number;
  name: string;
  email: string;
}

function isUser(data: any): data is User {
  return (
    data &&
    typeof data === "object" &&
    "id" in data &&
    typeof data.id === "number" &&
    "name" in data &&
    typeof data.name === "string" &&
    "email" in data &&
    typeof data.email === "string"
  );
}

// Simulated API response
const apiResponse: any = {
  id: 1,
  name: "Jack Black",
  email: "jack@example.com",
};

if (isUser(apiResponse)) {
  // TypeScript now knows that 'apiResponse' is a 'User'
  console.log(`User: ${apiResponse.name}`);
} else {
  console.error("Invalid user data");
}
```

This example shows how type predicates make sure the API response matches the `User` structure before doing anything with it, preventing possible runtime errors.

## Handling Different Event Types in Event Listeners

When handling different event types, it's important to know the exact type of event to handle it properly. For example, if we have a system that logs various events like `ClickEvent` and `KeyboardEvent`.

```ts twoslash
interface ClickEvent {
  type: "click";
  x: number;
  y: number;
}

interface KeyEvent {
  type: "keyboard";
  keystroke: string;
}

type EventType = ClickEvent | KeyEvent;

function isClickEvent(event: EventType): event is ClickEvent {
  return event.type === "click";
}

function isKeyboardEvent(event: EventType): event is KeyEvent {
  return event.type === "keyboard";
}

function handleEvent(event: EventType) {
  if (isClickEvent(event)) {
    console.log(`Click at coordinates: (${event.x}, ${event.y})`);
  } else if (isKeyboardEvent(event)) {
    console.log(`Key pressed: ${event.keystroke}`);
  } else {
    console.log("Unknown event type");
  }
}

// Simulated events
const events: EventType[] = [
  { type: "click", x: 100, y: 200 },
  { type: "keyboard", keystroke: "Enter" },
];

events.forEach(handleEvent);
```

This example shows how type predicates can help handle different event types correctly, making sure the right logic is used based on the event type.
