// Select the theme select element and the theme link
const themeSelect = document.querySelector("#theme-select");
const themeLink = document.querySelector("#theme-link");
const overlay = document.querySelector("#overlay");

// Get the selected theme from local storage or default to "modern.css"
const savedTheme = localStorage.getItem("selectedTheme") || "modern.css";

// Set the initial theme select value and the theme link href
themeSelect.value = savedTheme;
themeLink.href = "css/" + savedTheme;

// Log messages to confirm the initial values
console.log("Selected theme:", savedTheme);
console.log("Theme link href:", themeLink.href);

// Add a change event listener to the theme select
themeSelect.addEventListener("change", function() {
  // Get the selected theme value and set the theme link href
  const selectedTheme = themeSelect.value;
  console.log("Selected theme:", selectedTheme);
  overlay.style.display = "block";
  themeLink.href = "css/" + selectedTheme;
  console.log("Theme link href:", themeLink.href);

  // Save the selected theme to local storage
  localStorage.setItem("selectedTheme", selectedTheme);
  overlay.style.display = "none";
});
window.addEventListener("load", function() {
    overlay.style.display = "none";
  });
  