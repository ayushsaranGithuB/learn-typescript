---
layout: lesson
lesson: 3 - Class
parent: TS-4
---

## `Class`

A class is similar to an interface, it provides a blueprint for creating objects with specific properties and methods.

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
