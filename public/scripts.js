// THEME SWITCHER

const storageKey = "theme-preference";

const onClick = () => {
  // flip current value
  theme.value = theme.value === "light" ? "dark" : "light";

  console.log("theme.value", theme.value);

  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);

  document
    .querySelector("input#theme-checkbox")
    ?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  console.log("theme.value", theme.value);
  mobileMenu();
  // now this script can find and listen for clicks on the control
  document
    .querySelector("label.theme-slider-label")
    .addEventListener("click", onClick);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });

// MOBILE MENU

const mobileMenu = () => {
  const menu = document.getElementById("lesson-nav");

  if (menu) {
    const mobileMenu = menu.querySelector(".mobile-menu");
    const menuButton = document.getElementById("icon-menu");

    const themeSwitcher = document.querySelector(
      "#theme-switch-container label"
    );
    // clone inside menu ul
    mobileMenu.appendChild(themeSwitcher.cloneNode(true));
    // now this script can find and listen for clicks on the control
    menu
      .querySelector("label.theme-slider-label")
      .addEventListener("click", onClick);

    menuButton.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
      console.log("menu.style.display", menu.style.display);
    });
  }
};
