document.addEventListener("DOMContentLoaded", function () {
  function generatePoem(event) {
    event.preventDefault();
    new Typewriter("#poem", {
      strings: ["Say you'll remember me standing in a nice dress"],
      autoStart: true,
      delay: 75,
      loop: false,
      cursor: "",
    });
  }

  let formElement = document.querySelector("#submit-form");
  formElement.addEventListener("submit", generatePoem);
});

let apiKey = "6f68db0a5tf8734ofa9df0238e83067c";
let prompt = "Generate a short 4 line poem about nature in French";
let context = "You are a Shakespear level poet with a love for nature";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
