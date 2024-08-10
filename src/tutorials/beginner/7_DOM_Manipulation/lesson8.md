---
layout: lesson
lesson: 8 - Exercise VII
parent: TS-7
---

# Exercise VII

### Exercise: Fetch and Display User Data

Now that we understand promises and `async/await`, let's apply these concepts in a real-world scenario.

We'll create a simple application that fetches user data from an API and displays it on the page.

In this example:

- We define an `async` function `loadUserData` to fetch user data from an API.
- The fetched data is then used to populate an unordered list in the DOM.
- A button with the ID `loadButton` is used to trigger the data loading.

#### Objective:

- Learn how to use event handlers to interact with the DOM.
- Practice using `async/await` to handle API calls.
- Learn how to manipulate the DOM based on API responses.

#### Instructions:

1. **Set Up the HTML:**

   - Create an HTML file and add a button with the ID `loadButton` and an empty unordered list with the ID `userList`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User List</title>
  </head>
  <body>
    <button id="loadButton">Load Users</button>
    <ul id="userList"></ul>
    <script src="./dist/exercise7.js"></script>
  </body>
</html>
```

2. **Write the TypeScript:**

- Create a TypeScript file named `exercise7.ts` in the `src` directory and complete the following code:

```ts
// exercise7.ts

// 1. Write an async function to fetch user data from
// https://jsonplaceholder.typicode.com/users

// 2. If the fetch call is sucessful update the ul#userList with the user data returned.
// If the fecth call fails, alert the user

// 3. The function should fire when the user clicks the button with ID #loadButton
```

Ensure the compiled `exercise7.js` file is correctly referenced in your HTML file inside the `dist` directory.

3. **Test Your Application:**

   - Open the HTML file in a browser.
   - Click the "Fetch User Data" button.
   - Observe the user's name, email, and phone number displayed on the page.

#### Expected Output:

- When the "Fetch User Data" button is clicked, the user's name, email, and phone number should appear on the page.
- If there is an error during the fetch, an error message should be displayed.

---

<details>
<summary>
Solution:
</summary>

```ts twoslash
// app.ts

async function fetchUserData(): Promise<void> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user data.");
    }

    const user = await response.json();
    displayUserData(user);
  } catch (error) {
    if ((error as Error).message) {
      document.getElementById("userData")!.textContent = `Error: ${
        (error as Error).message
      }`;
    }
  }
}

function displayUserData(user: {
  name: string;
  email: string;
  phone: string;
}): void {
  const userDataDiv = document.getElementById("userData")!;
  userDataDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
}

document
  .getElementById("fetchButton")
  ?.addEventListener("click", fetchUserData);
```

</details>
