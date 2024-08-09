---
layout: lesson
lesson: 4 - Enums
parent: TS-3
---

Let's move on to the next Object Type

## `Enum`

Enums (short for "enumerations") in TypeScript are a way to define a set of named constants.

They help organize related values and make code more readable by providing meaningful names to values.

**Here is an example of a numeric enum in TypeScript:**

```ts twoslash
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

Above, we have a numeric enum where `Up` is initialized with `1`. All of the following members are auto-incremented from that point on.

So, `Direction.Up` has the value `1`, `Down` has `2`, `Left` has `3`, and `Right` has `4`.

By default, TypeScript enums are numeric. The first member gets the value 0, and the values increase by 1 for each subsequent member.

If we left off the initializer for `Up`, it would have the value `0` and the rest of the members would be auto-incremented from there.

**You can assign custom values to enum members.**

```ts twoslash
enum Status {
  Success = 1,
  InProgress = 3,
  Failed = 5,
}
```

### TypeScript supports both numeric and string enums.

```ts twoslash
// An example of a string enum in TypeScript:
enum ErrorCode {
  NotFound = "404",
  Unauthorized = "401",
  InternalServerError = "500",
}

let errorCode: ErrorCode = ErrorCode.NotFound;
console.log(errorCode); // Output: 404
```

> **Heterogeneous Enums** TypeScript also allows enums to contain both string and numeric members, though this is less commonly used.

### Benefits of Using Enums

- **Readability**: Enums provide meaningful names to numeric or string values, making code easier to understand.
- **Maintainability**: Enums help manage related constants in a centralized way, reducing the risk of errors.
- **Type Safety**: TypeScript checks that you use valid enum values, catching errors at compile time.

### Using Enums in Functions

Enums can be used in function parameters to restrict possible values.

#### Example:

```ts twoslash
enum Status {
  Success = 1,
  InProgress = 3,
  Failed = 5,
}

function respond(status: Status): void {
  if (status === Status.Success) {
    console.log("Operation was successful.");
  } else if (status === Status.InProgress) {
    console.log("Operation is in progress.");
  } else if (status === Status.Failed) {
    console.log("Operation failed.");
  }
}

respond(Status.Success); // Operation was successful.
```

In this example, the `respond` function only accepts `Status` enum values, ensuring type safety and clarity.
