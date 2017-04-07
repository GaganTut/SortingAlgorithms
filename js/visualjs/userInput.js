/*jshint esversion: 6*/
const createUserInput = (parentID, createID, position) => {
  let newInput = document.createElement("input");
  newInput.id = createID;
  newInput.placeholder = "New Value";

  let parent = document.querySelector(parentID);
  parent.appendChild(newInput);
};

const createInputs = () => {
  for (var i = 0; i < 20; i++) {
    createUserInput("#wholeBody", `value${i}`);
  }
};


