/*jshint esversion: 6*/
function createUserInput(parentID, createID, position) {
  let newInput = document.createElement("input");
  newInput.id = createID;
  newInput.placeholder = "Enter Number";
  newInput.style.position = "fixed";
  newInput.style.top = "10px";
  newInput.style.left = position;

  let parent = document.querySelector(parentID);
  parent.appendChild(newInput);
}

function createInputs() {
  for (var i = 0; i < 10; i++) {
    createUserInput("#wholeBody", `value${i}`, `${10*i}%`);
  }
}

function createInputButton() {
  let newButton = document.createElement("button");
  newButton.id = "CreateNumPlanes";
  newButton.innerHTML = "Create List";
  newButton.width = "10%";
  newButton.style.position = "fixed";
  newButton.style.top = "30px";
  newButton.style.left = "45%";

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
}

createInputs();
let userInputBtn = createInputButton();

userInputBtn.addEventListener("click", () => {
  let userInputs = document.querySelectorAll("input");
  for (var i = 0; i < userInputs.length; i++) {
    createNumEntity("#wholeScene", Number(userInputs[i].value), i);
  }
});
