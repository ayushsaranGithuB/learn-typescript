---
layout: lesson
lesson: 4 - Type predicates vs equality checks vs assertions.
parent: TS-202
---

# Deciding the right type guard

We have seen 3 different methods to implement type guards:

1. Type predicates
2. Equality Checks
3. Assertions

Here's a brief summary of when to prefer type predicates, equality checks, or assertions in TypeScript:

### 1. **Type Predicates (`value is Type`)**

- **Use When**: You need to determine the type of a value within a conditional block and ensure TypeScript narrows the type based on the check.
- **Best For**: Situations where type checks are common, reusable, and where you want the function to return `true` or `false`.

**Example**: Checking if an event is of a specific type in a function that processes different types of events.

```ts
function isClickEvent(event: Event): event is ClickEvent {
  return event.type === "click";
}
```

### 2. **Equality Checks (`===`)**

- **Use When**: You need a straightforward comparison of values.
- **Best For**: Simple cases where you're comparing primitives or checking specific conditions. Easier to implement when the check is simple and not re-used many times, hence adding a type predicate may not be beneficial.

**Example**: Verifying that a string or number has a particular value.

```ts
if (event.type === "click") {
  console.log("This is a ClickEvent.");
}
```

### 3. **Assertion Functions (`asserts value is Type`)**

- **Use When**: You want to enforce that a value must be of a specific type and **want to throw an error if it isn't**.

This stops further execution if the assertion fails.

- **Best For**: Scenarios where it's critical that a value conforms to a specific type, and you need to ensure that downstream code operates on the correct type without fallback logic.

**Example**:

```ts
function assertIsClickEvent(event: Event): asserts event is ClickEvent {
  if (event.type !== "click") {
    throw new Error("Not a ClickEvent");
  }
}
```

### Summary:

- **Use Type Predicates** for reusable type checks where the result determines code flow.
- **Use Equality Checks** for simple, direct comparisons or when TypeScript can infer the correct type from the comparison.
- **Use Assertion Functions** when you need to guarantee a specific type and want to **stop execution** if the type condition isn't met.
