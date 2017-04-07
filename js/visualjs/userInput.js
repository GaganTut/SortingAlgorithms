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

createInputs();
let userInputBtn = createButton("createBtn", "Create List");

userInputBtn.addEventListener("click", () => {
  let userInputs = document.querySelectorAll("input");
  for (var i = 0; i < userInputs.length; i++) {
    createNumEntity("#wholeScene", Number(userInputs[i].value), i);
  }
});
