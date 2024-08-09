---
layout: lesson
lesson: 5 - Inheritance
parent: TS-4
---

## Inheritance

Interfaces can extended. This means you can create a new interface that inherits the properties and methods from multiple existing interfaces.

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
