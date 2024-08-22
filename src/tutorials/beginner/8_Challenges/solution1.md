---
layout: lesson
lesson: 2 - Solution to Challenge 1
parent: TS-8
---

# Here is the solution for the 1st Challenge

There is more than one specific way to complete the exercise and meet the requirements.

You may have chosen to complete the task differently, that's okay.

Compare your solution to the one presented below to see if there is room to refactor your code based on the ideas below.

```ts twoslash
// We save these common references to use in multiple functions
const form = document.getElementById("search-form") as HTMLFormElement;
const cart = document.querySelector("#cart .cart-items") as HTMLUListElement;

window.onload = () => {
  // Register a function on page load to handle the form submit
  form.onsubmit = handleForm;
};

// Define a structure for a Book
// This is Optional: not technically required to complete the exercise
interface Book {
  key: string;
  title: string;
  publisher?: string[];
  author_name?: string;
  first_publish_year?: number;
  isbn?: string[];
  cover_i?: string;
  number_of_pages_median?: number;
}

// Our function to handle the form submission
async function handleForm(e: Event): Promise<void> {
  // Stop the form from submtting traditionally
  e.preventDefault();

  //  Get the value of the search input field
  const searchField = form.querySelector(
    "input[name='search']"
  ) as HTMLInputElement;
  // Trim away whitespaces
  const searchTerm = searchField.value.trim();

  if (searchTerm.length > 0) {
    // Set the Submit button and input field to loading state
    toggleLoadingState(true);

    try {
      const books = await fetchBooks(searchTerm);
      displayBooks(books);
    } catch (error) {
      showError("Failed to fetch books. Please try again.");
    } finally {
      toggleLoadingState(false);
    }
  }
}

async function fetchBooks(searchTerm: string): Promise<Book[]> {
  // Make a call to the OpenLibrary API
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.docs as Book[];
}

function toggleLoadingState(isLoading: boolean) {
  const submitButton = form.querySelector(
    "button[type='submit']"
  ) as HTMLButtonElement;
  const results = document.getElementById("results") as HTMLElement;
  const searchField = form.querySelector(
    "input[name='search']"
  ) as HTMLInputElement;

  searchField.disabled = isLoading;
  submitButton.disabled = isLoading;
  submitButton.setAttribute("aria-busy", isLoading.toString());
  submitButton.innerHTML = isLoading ? "Loading..." : "Search";
  results.setAttribute("aria-busy", isLoading.toString());
}

function displayBooks(books: Book[]) {
  const results = document.getElementById("results") as HTMLElement;
  results.innerHTML = "";
  if (books.length === 0) {
    results.innerHTML = "No results found.";
    return;
  }

  books.forEach((book) => {
    const bookElement = createBookElement(book, "results");
    results.appendChild(bookElement);
  });
}

//  Common function to handle DOM manipulation for results and cart section
function createBookElement(
  book: Book,
  location: "results" | "cart"
): HTMLElement {
  const bookElement =
    location === "cart"
      ? document.createElement("li")
      : document.createElement("article");
  bookElement.className = location === "cart" ? "item" : "book";

  const coverBox = document.createElement("div");
  coverBox.className = "cover";

  const image = document.createElement("img");
  image.src = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "/public/no-image.svg";
  image.alt = book.title;
  coverBox.appendChild(image);
  bookElement.appendChild(coverBox);

  const info = document.createElement("div");
  info.className = "info";

  const title =
    location === "cart"
      ? document.createElement("p")
      : document.createElement("h3");
  title.className = "title";
  title.innerHTML = `<a href="https://openlibrary.org${book.key}">${book.title}</a>`;
  info.appendChild(title);

  const author = document.createElement("p");
  author.className = "author";
  author.innerHTML = book.author_name
    ? `- ${book.author_name}`
    : "- Unknown Author";
  info.appendChild(author);

  if (location === "results") {
    const isbn = document.createElement("p");
    isbn.className = "isbn";
    isbn.innerHTML = `ISBN: ${book.isbn?.[0] || "N/A"}`;
    info.appendChild(isbn);

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.innerText = `${book.publisher?.[0] || ""}, ${
      book.first_publish_year || ""
    }, ${
      book.number_of_pages_median ? book.number_of_pages_median + " pages" : ""
    }`;
    info.appendChild(meta);

    // Results have an 'Add to Cart' functionality
    const button = document.createElement("button");
    button.innerHTML = "Add to Cart";
    button.setAttribute("data-book-id", book.key);
    button.addEventListener("click", () => addToCart(book, button));
    info.appendChild(button);
  } else {
    // cart has a remove button
    const remove = document.createElement("button");
    remove.className = "remove";
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => {
      bookElement.remove();
      const addToCartButton = document.querySelector(
        `#results button[data-book-id="${book.key}"]`
      ) as HTMLButtonElement;
      if (addToCartButton) {
        addToCartButton.disabled = false;
        addToCartButton.innerHTML = "Add to Cart";
      }
      countCartItems();
    });
    info.appendChild(remove);
  }

  bookElement.appendChild(info);

  return bookElement;
}

function addToCart(book: Book, button: HTMLButtonElement) {
  const item = createBookElement(book, "cart");
  // Create a cart item: i.e. without ISBN and meta fields

  cart?.appendChild(item);

  button.disabled = true;
  button.innerHTML = "Added...";

  // Remove the 'Your Cart is Empty' message, if it exists
  const empty = document.querySelector(".empty") as HTMLLIElement;
  if (empty) empty.remove();

  // Enable the Cart Actions
  const buttons = document.querySelectorAll(
    "#cart button"
  ) as NodeListOf<HTMLButtonElement>;
  buttons.forEach((btn) => (btn.disabled = false));

  // Update the Count of items in the cart
  countCartItems();
}

function countCartItems() {
  const cartCount = document.querySelector("label#cart-icon");
  if (cartCount) {
    const items = document.querySelectorAll("#cart li.item");
    cartCount.setAttribute("data-count", items.length.toString());
  }
}

function clearCart() {
  const cart = document.querySelector("#cart .cart-items") as HTMLUListElement;
  if (cart) {
    // Replace the 'Your Cart is Empty' message
    cart.innerHTML = "<li class='empty'>Your Cart is Empty!</li>";

    // Disable the Cart Actions since it's empty
    const buttons = document.querySelectorAll(
      "#cart button"
    ) as NodeListOf<HTMLButtonElement>;
    buttons.forEach((button) => (button.disabled = true));

    // Remove the 'Added to Cart' message on the results
    // and enable the Add action
    const addToCartButtons = document.querySelectorAll(
      "#results button"
    ) as NodeListOf<HTMLButtonElement>;
    addToCartButtons.forEach((button) => {
      button.disabled = false;
      button.innerHTML = "Add to Cart";
    });

    // Update the count of the cart
    countCartItems();
  } else {
    showError("Cart not found.");
  }
}

function showError(message: string) {
  const results = document.getElementById("results") as HTMLElement;
  results.innerHTML = `<p class="error">${message}</p>`;
  console.error(message);
}

// REQUEST MODAL
const dialog = document.querySelector(
  "dialog#request-modal"
) as HTMLDialogElement;
const showButton = document.querySelector(
  "button#request-books"
) as HTMLButtonElement;
const closeButton = document.querySelector(
  "button#close-request"
) as HTMLButtonElement;

showButton.addEventListener("click", () => {
  dialog.showModal();

  // Get a list of all the items from the cart and copy it to the Request Books modal
  const requestModal = document.querySelector(
    "#request-modal ul"
  ) as HTMLUListElement;
  requestModal.innerHTML = cart.innerHTML;

  // Empty the cart
  clearCart();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
```
