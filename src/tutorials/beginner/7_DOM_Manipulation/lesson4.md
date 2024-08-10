---
layout: lesson
lesson: 4 - Exercise VI - Form Validation
parent: TS-7
------

# Exercise VI - Form Validation


Let’s create an example where we validate user input in a form using TypeScript. This example will demonstrate how to handle `input` and `submit` events with proper type annotations.

**Instructions:**

1. **Create a TypeScript File:**

- Create a new file named `formValidation.ts` in your `src` directory.

2. **HTML Setup:**

- Create an HTML file in your `dist` folder to house the form
- Ensure your HTML file includes a form with an input field for the username and a `feedback` element.
- Connect the expected `formValidation.js` to your page using a script tag
  
```html
    <!-- Example HTML -->
	<form id="myForm">
	  <label for="username">Username:</label>
	  <input type="text" id="username" name="username" />
	  <p id="feedback"></p>
	  <button type="submit">Submit</button>
	</form>
	
	<!-- Add the expected compiled JavaScript file --> 
	<script src="./dist/formValidation.js"></script>
 
```

3. Fill in the ?? to complete the following Code in `formValidation.ts`:

```ts
// formValidation.ts

// Step 1: Select the form and input elements by their *IDs*
const form = ??;
const usernameInput = ??;
const feedback = ??;

// Step 2: Add an event listener to validate the username input in real-time
usernameInput.addEventListener("input", (event: ?) => {

  const target = ??;
  
  if (target ??) {
    // If the username is shorter than 3 characters, the feedback text will display in red, instructing the user to lengthen the input.
    ??
  } else {
   // If the username meets the criteria, the feedback text will display in green, indicating the input is valid.
   ??
  }
  
});

// Step 3: Handle form submission and prevent it if username validation fails
form.addEventListener(??,(?)) => {
  ?? // Prevent form from submitting
  if (usernameInput.?? ) {
   ??
  }
});


```

#### Expected Output

When using the form:

- If the username is shorter than 3 characters, the feedback text will display in red, instructing the user to lengthen the input.
- If the username meets the criteria, the feedback text will display in green, indicating the input is valid.
- Submitting the form with an **invalid** username will trigger an alert message, preventing submission.

---

- \*\*Ensure the Compiled JavaScript file (`formValidation.js`) is referenced correctly in your HTML file as shown in the `HTML Setup` step above.

---

#### Check Solution

After completing the code and inserting the compiled script into your HTML file, open your HTML file in a browser to see the result. As you type in the input field, you should see real-time feedback.

---

The Solution:

```ts twoslash
// formValidation.ts

// Step 1: Select the form and input elements by their IDs
const form = document.getElementById("myForm") as HTMLFormElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const feedback = document.getElementById("feedback") as HTMLElement;

// Step 2: Add an event listener to validate the username input in real-time
usernameInput.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.value.length < 3) {
    feedback.textContent = "Username must be at least 3 characters long.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Username looks good!";
    feedback.style.color = "green";
  }
});

// Step 3: Handle form submission and prevent it if validation fails
form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault(); // Prevent form from submitting
  if (usernameInput.value.length < 3) {
    alert("Please enter a valid username.");
  } else {
    alert("Form submitted successfully!");
  }
});
```
