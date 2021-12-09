let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.getElementById("txt-input");
let txtOutput = document.querySelector("#output");

let api_url = "https://api.funtranslations.com/translate/pirate.json";

function translation_url(input) {
  return api_url + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("Error: ", error);
  alert("Something is wrong! Pirate Lords aren't Happy😥! Server not responding, please try again later.");
}

function translate() {
  let inputText = txtInput.value;

  fetch(translation_url(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translated_text = json.contents.translated;
      txtOutput.innerText = translated_text;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", translate);
