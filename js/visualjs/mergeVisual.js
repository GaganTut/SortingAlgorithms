/*jshint esversion: 6*/
const createMergeButton = ()=> {
  let newButton = document.createElement("button");
  newButton.id = "mergeBtn";
  newButton.innerHTML = "Merge Sort";
  newButton.addEventListener("click", () => {
    visualMerge();
  });

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
};

createMergeButton();