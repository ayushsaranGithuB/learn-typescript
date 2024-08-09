---
layout: lesson
lesson: 5 - Inheritance
parent: TS-4
---

# Inheritance

## Type Intersection

In TypeScript, type aliases can simulate inheritance by combining types using intersection (&) thus extending existing types.

This allows us to create more complex and specific types by building on top of existing ones. For instance, we can define a base type and then extend it with additional properties to create a more specialized type:

```ts twoslash
// Define a base type alias
type Person = {
  name: string;
  age: number;
};

// Extend the base type alias with additional properties
type Employee = Person & {
  role: string;
  department: string;
};

// Example usage
let employee: Employee = {
  name: "John",
  age: 30,
  role: "Developer",
  department: "Engineering",
};

console.log(employee);
// Output: { name: 'John', age: 30, role: 'Developer', department: 'Engineering' }
```

Here, Employee inherits the properties from Person and adds its own, allowing us to create a type hierarchy without needing classes. This approach provides a flexible and concise way to manage related types in our TypeScript code.

---

## Interface

Interfaces can also extended. This means you can create a new interface that inherits the properties and methods from multiple existing interfaces.

This allows us to create complex types by combining simpler, more focused types.

```ts twoslash
interface Model {
  year: number;
}

interface License {
  registration: string;
}

// Inherits properties from the previous interfaces
interface Car extends Model, License {
  passengers: number; // Adds a new property
}

// Inherits properties from the previous interfaces
interface Truck extends Model, License {
  capacity: string; // Adds a new property
}

const car: Car = {
  passengers: 5,
  year: 2020,
  registration: "ABC 123",
};

const pickup: Truck = {
  capacity: "1.5 Ton",
  year: 2020,
  registration: "ABC 123",
};
```

This makes our code more reusable. We can reuse existing interfaces to create new, more complex types without duplicating code. By combining multiple interfaces we can create flexible and modular type definitions.

It also ensures that any object or class implementing the extended interface adheres to all the combined properties and methods, reducing errors.

### Using `Class` and `Interface` together

```ts twoslash
interface Model {
  name: string;
  year: number;
}

interface Health {
  condition: string;
  mileage: number;
}

// A Class can implement multiple interfaces.
class Car implements Model, Health {
  name: string;
  year: number;
  condition: string;
  mileage: number;

  constructor(name: string, year: number, condition: string, mileage: number) {
    this.name = name;
    this.year = year;
    this.condition = condition;
    this.mileage = mileage;
  }

  getCarDetails() {
    return `Car: ${this.name}, Year: ${this.year}, 
        Condition: ${this.condition}, Mileage: ${this.mileage}`;
  }
}
```

Using inheritance we can create powerful, type-safe abstractions in our TypeScript code, enhancing both code organization and maintainability.
