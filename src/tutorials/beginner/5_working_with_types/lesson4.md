---
layout: lesson
lesson: 4 - Function Compatibility
parent: TS-5
---

# Function Compatibility

Function compatibility is determined by the types of the parameters and the return type. TypeScript uses a set of rules to check function compatibility.

```ts twoslash
type Sum = (a: number, b: number) => number;
type Add = (x: number, y: number) => number;

let sum: Sum = (a, b) => a + b;
let add: Add = (x, y) => x + y;

// Both functions are compatible if they have the same parameter and return types
sum = add;
add = sum;
```

---

## Parameter Compatibility

A function with fewer parameters can be assigned to a function with more parameters, but not the other way around.

In this next example:

- `OneParamFunction` is a type for functions that take one parameter.
- `TwoParamFunction` is a type for functions that take two parameters.

```ts twoslash
// @errors: 2322
type OneParamFunction = (x: number) => void;
type TwoParamFunction = (x: number, y: number) => void;

let oneParamFunc: OneParamFunction = (x) => {
  console.log(`One parameter: ${x}`);
};

let twoParamFunc: TwoParamFunction = (x, y) => {
  console.log(`Two parameters: ${x}, ${y}`);
};

twoParamFunc = oneParamFunc; // This works, the extra param is ignored

oneParamFunc = twoParamFunc; // This would cause an error, missing param
```

#### Assigning a One-Parameter Function to a Two-Parameter Function works.

`twoParamFunc = oneParamFunc;`

This assignment works because `oneParamFunc` is compatible with `twoParamFunc`. Even though `twoParamFunc` expects two parameters, `oneParamFunc` only uses the first parameter, and the extra parameter is simply ignored.

#### But, assigning a Two-Parameter Function to a One-Parameter Function does not.

`// oneParamFunc = twoParamFunc; // This would cause an error`

This assignment does not work because `twoParamFunc` requires two parameters, but `oneParamFunc` can only provide one.

TypeScript will generate an error here because the number of parameters required by `twoParamFunc` (2) is greater than what `oneParamFunc` can provide (1).

---

### Return Type Compatibility:

The return type of a function must be compatible with the return type expected by the assigned variable.

#### Example:

```ts twoslash
// @errors: 2322
type StringFunction = () => string;
type MixedFunction = () => string | number;

let returnString: StringFunction = () => {
  return "Hello";
};

let returnStringOrNumber: MixedFunction = () => {
  return 42; // This is a number
};

let functionA: MixedFunction;
functionA = returnString; // This works because MixedFunction accepts String or Number return types

let functionB: StringFunction;
functionB = returnStringOrNumber; // This doesn't work StringFunction only accepts String return types
```

This is complicated, but the take-away point is that return type compatibility allows a function with a more specific return type to be assigned to a function type with a more general return type, but not the other way around.
