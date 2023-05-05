// Select the toggle button and the theme link
const toggleBtn = document.querySelector(".btn-toggle");
const themeLink = document.querySelector("#theme-link");

// Log messages to confirm the elements were found
console.log("Toggle button found:", toggleBtn);
console.log("Theme link found:", themeLink);

// Add a click event listener to the toggle button
toggleBtn.addEventListener("click", function() {
  // Check the current theme and switch to the opposite one
  if (themeLink.getAttribute("href") === "css/light.css") {
    console.log("Switching to dark theme");
    themeLink.href = "css/dark.css";
  } else {
    console.log("Switching to light theme");
    themeLink.href = "css/light.css";
  }
});
