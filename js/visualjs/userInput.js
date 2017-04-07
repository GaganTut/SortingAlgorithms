/*jshint esversion: 6*/
function createUserInput(parentID, createID, position) {
  let newInput = document.createElement("input");
  newInput.id = createID;
  newInput.placeholder = "Enter Number";

  let parent = document.querySelector(parentID);
  parent.appendChild(newInput);
}

function createInputs() {
  for (var i = 0; i < 10; i++) {
    createUserInput("#wholeBody", `value${i}`);
  }
}

function createInputButton() {
  let newButton = document.createElement("button");
  newButton.id = "createBtn";
  newButton.innerHTML = "Create List";

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
