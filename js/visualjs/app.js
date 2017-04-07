/*jshint esversion: 6*/
createInputs();
for (var i = 0; i < 40; i++) {
  let randomNum = Math.floor(Math.random() * 80);
  createInitEntity("#wholeScene", randomNum, i);
}

let userInputBtn = createButton("createBtn", "Create Custom List");
userInputBtn.addEventListener("click", () => {
  let userInputs = document.querySelectorAll("input");
  clearPlanes();
  for (var i = 0; i < userInputs.length; i++) {
    let inputNum = Number(userInputs[i].value);
    if (inputNum.isNaN || inputNum === Infinity) {
      inputNum = 0;
    }
    createNumEntity("#wholeScene", inputNum, i * 2);
  }
});

let clearAllBtn = createButton("clearBtn", "Clear Values");
clearAllBtn.addEventListener("click", () => {
  clearPlanes();
});

let randomBtn = createButton("randomBtn", "Create Random List");
randomBtn.addEventListener("click", () => {
  clearPlanes();
  for (var i = 0; i < 40; i++) {
  let randomNum = Math.floor(Math.random() * 80);
  createInitEntity("#wholeScene", randomNum, i);
}
});

let bubbleBtn = createButton("bubbleBtn", "Bubble Sort");
bubbleBtn.addEventListener("click", () => {
  disableSorts();
  visualBubble();
});

let insertionBtn = createButton("insertionBtn", "Insertion Sort");
insertionBtn.addEventListener("click", () => {
  disableSorts();
  visualInsertion();
});

let quickBtn = createButton("quickBtn", "Quick Sort");
quickBtn.addEventListener("click", () => {
  disableSorts();
  let valueArr = document.querySelectorAll(".customPlanes");
  let nodeArray = [];
  for (let i = 0; i < valueArr.length; i++) {
    nodeArray.push(valueArr[i]);
  }
  visualQuick(nodeArray);
});

let selectionBtn = createButton("selectionBtn", "Selection Sort");
selectionBtn.addEventListener("click", () => {
  disableSorts();
  visualSelection();
});

let mergeBtn = createButton("mergeBtn", "Merge Sort");