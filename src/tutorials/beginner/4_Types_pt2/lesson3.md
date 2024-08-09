---
layout: lesson
lesson: 3 - Interface and Class
parent: TS-4
---

# Interface and Class

Like the primitive types we saw previously, we also have a set of Object Types.

We will cover 6 different Object Types:

- Interface
- Class
- Enum
- Array
- Tuple
- Object

Let's look at the first two:

## `Interface`

An interface in TypeScript is a way to define the shape of an object.

It specifies what properties and methods an object should have, but it doesn't provide implementations for them.

Interfaces are used for type-checking and ensuring that objects conform to a particular structure.

```ts twoslash
// Example:
interface Person {
  name: string;
  age: number;
}

// This function takes an input 'person' of type: Person
function greet(person: Person) {
  return "Hello " + person.name;
}
```

#### Key Points:

1. **Defines Structure**: Interfaces define the structure of an object, including properties and their types.
2. **Optional Properties**: Properties can be marked as optional using a `?`.
3. **Readonly Properties**: Properties can be marked as readonly using `readonly`.
4. **Methods**: Interfaces can also define methods without providing implementations.

```ts twoslash
// Example of an Interface with optional(?) and readonly properties

interface Person {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
  greet(): void; // method without implementation details
}

const person: Person = {
  name: "Alice",
  age: 30,
  id: 1,
  greet() {
    console.log(`Hello, my name is ${this.name}`); // method implementation
  },
};

person.greet();
```

---

## `Class`

A class is similar to a method, it provides a blueprint for creating objects with specific properties and methods.

```ts twoslash
// Classes can have a constructor to initialize objects.

class Phone {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Calling from my ${this.year} ${this.make} ${this.model}`);
  }
}
```

But, It can also include implementations of properties and methods, and have constructors, inheritance, and access modifiers.

```ts twoslash
class Animal {
  // by using the public keyword we can automatically create properties with the same name as the constructor arguments
  constructor(public name: string, public age: number) {}

  //Classes can define methods with implementations
  public getAge(): number {
    return this.age;
  }
}

// Classes can extend other classes to inherit properties and methods.

class Dog extends Animal {
  // By using private keyword, we can restrict access to the owner property
  constructor(
    name: string,
    age: number,
    public breed: string,
    private owner?: string
  ) {
    super(name, age);
  }

  public introduce(): void {
    console.log(`${this.name} is a ${this.age} yr old ${this.breed}`);
  }
}

const dog = new Dog("Buddy", 5, "Golden Retriever");

dog.introduce(); // Buddy is a 5 yr old Golden Retriever
```

### Differences Between Interface and Class

**Interface** is used to define the shape of an object, primarily for type-checking. It does not provide implementations for properties and methods.

**Class** is Used to create objects with specific properties and methods, and can provide implementations for properties and methods.
