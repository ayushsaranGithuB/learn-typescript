---
layout: lesson
lesson: 3 - Generic Classes
parent: TS-6
---

# Generic Classes

Generic classes allow you to define classes that can work with a variety of types.

```ts twoslash
// genericClasses.ts

// A generic class for a simple data storage
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getAllItems(): T[] {
    return [...this.data];
  }
}

// Re-using the methods from the generic class but with different types

// with strings
let textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getAllItems()); // ['World']

// with numbers
let numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getAllItems()); // [2]
```

Let's look at this line by line

`class DataStorage<T> {`

- We defined a class named `DataStorage` that accepts a single generic type, represented by `<T>`

`private data: T[] = [];`

- The class has a property named `data`, which is an array of the generic type `<T>` that we defined earlier. We initiated data with an empty array to start `= [];`

- The `private` keyword denotes that we cannot directly access the `data` property from outside the class and manipulate it. We must use the methods defined in the class to add or remove data from the array.

We then defined two methods `addItem()` and `removeItem()` to manipulate the `data` property of the class.

```ts
addItem(item: T): void {
    this.data.push(item);
  }

removeItem(item: T): void {
	this.data = this.data.filter(i => i !== item);
}
```

- Both these methods accept an item of the generic type `T` as an input parameter. This is the same generic type as the `<T>` we specified when defining the Class.

We then defined a method to fetch all the items from `data` and return them as an array of the same type as `<T>` by explicitly stating the return type as `: T[]`

```ts
getAllItems(): T[] {
  return [...this.data];
}
```

Now we are able to re-use this Generic Class to store different types of data types, but have access to the same methods on both

```ts
// Same Class, Different Data Types
let textStorage = new DataStorage<string>();
let numberStorage = new DataStorage<number>();

// addItem() and other methods are common to both
textStorage.addItem("Hello");
numberStorage.addItem(2);
```

Being able to use a Generic Class saved us the effort of needing to write separate classes for string and number storage.

We could have used a Common class with a union type allowing for both numbers and strings and in some cases this may be easier, but it's generally preferred to use the generic class because it can be extended to cover more types easily without modification to the internal methods.

In summary, while union types can be straightforward for specific scenarios, generics offer a more scalable solution, especially when dealing with a broader range of types.
