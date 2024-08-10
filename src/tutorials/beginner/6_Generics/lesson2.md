---
layout: lesson
lesson: 2 - Generic Interfaces
parent: TS-6
---

# Generic Interfaces

Generic interfaces allow you to define interfaces that can be used with various types.

```ts twoslash
// A generic interface for a key-value pair
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Using the generic interface with different types
let stringNumberPair: KeyValuePair<string, number> = { key: "age", value: 30 };
let numberBooleanPair: KeyValuePair<number, boolean> = { key: 1, value: true };

console.log(stringNumberPair); // { key: 'age', value: 30 }
console.log(numberBooleanPair); // { key: 1, value: true }
```

### Real-World Usage Example: Configuration Management

Imagine you are building a configuration management system for an application. You might need to store and access configuration settings as key-value pairs, where the key is a string representing the setting name, and the value can be of various types such as `string`, `number`, `boolean`, or custom types.

Here's how you might use the `KeyValuePair` interface to handle configuration settings:

```ts twoslash
// Define the generic interface for a key-value pair
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Example usage: Configuration settings for an application
// where the key is a string, but the value can be a string, number, or boolean

const configSettings: KeyValuePair<string, string | number | boolean>[] = [
  { key: "apiUrl", value: "https://api.example.com" },
  { key: "timeout", value: 3000 },
  { key: "loggingEnabled", value: false },
];

// Function to get a setting value by key with type guards
function getSetting<K>(
  settings: KeyValuePair<K, string | number | boolean>[],
  key: K
): string | number | boolean | undefined {
  const setting = settings.filter((s) => s.key === key)[0];
  return setting ? setting.value : undefined;
}

// Using the function to get configuration values

const apiUrl = getSetting(configSettings, "apiUrl");
// Returns "https://api.example.com"

const timeout = getSetting(configSettings, "timeout");
// Returns 3000

const loggingEnabled = getSetting(configSettings, "loggingEnabled");
// Returns false

console.log(`API URL: ${apiUrl}`);
console.log(`Timeout: ${timeout}`);
console.log(`Logging Enabled: ${loggingEnabled}`);
```

This approach is useful in applications where you need to manage and retrieve any form of data that follows a key-value structure, making it both flexible and type-safe.
