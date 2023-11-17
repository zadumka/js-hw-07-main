function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNum = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function destroyEl() {
  boxes.textContent = "";
}

function createBoxes(amount) {
  destroyEl();
  for (let i = 0; i < amount; i++) {
    const size = 30 + 10 * i;
    const divBox = document.createElement("div");
    divBox.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxes.insertAdjacentElement("beforeend", divBox);
  }
  inputNum.value = "";
}

btnCreate.addEventListener("click", () => {
  if (1 <= inputNum.value <= 100) {
    createBoxes(inputNum.value);
  }
});

btnDestroy.addEventListener("click", destroyEl);
