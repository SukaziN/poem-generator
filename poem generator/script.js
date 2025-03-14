document.addEventListener("DOMContentLoaded", function () {
  let formElement = document.querySelector("#submit-form");
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    generatePoem();
  });
  function generatePoem() {
    let apiKey = "6f68db0a5tf8734ofa9df0238e83067c";
    let prompt = "Generate a short 4 line poem about nature in French";
    let context = "You are a Shakespear level poet with a love for nature";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(function (response) {
      new Typewriter("#poem", {
        strings: [response.data.answer],
        autoStart: true,
        delay: 75,
        loop: false,
        cursor: "",
      });
    });
  }
});
