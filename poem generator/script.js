document.addEventListener("DOMContentLoaded", function () {
  function generatePoem(event) {
    event.preventDefault();
    let poem = document.querySelector("#poem");
    poem.innerHTML = "Say youll remember me standing in a nice dress";
  }

  let formElement = document.querySelector("#submit-form");
  formElement.addEventListener("submit", generatePoem);
});
new Typewriter("#typewriter", {
  strings: ["Say you'll remember me standing in a nice dress"],
  autoStart: true,
  delay: 1,
});
