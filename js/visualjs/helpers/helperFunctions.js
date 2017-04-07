function createButton(createID, innerHTML) {
  let newButton = document.createElement("button");
  newButton.id = createID;
  newButton.innerHTML = innerHTML;

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
}