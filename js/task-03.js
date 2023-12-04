const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const showInput = () => {
  output.textContent =
    textInput.value.trim() === "" ? "Anonymous" : textInput.value.trim();
};
textInput.addEventListener("input", showInput);
