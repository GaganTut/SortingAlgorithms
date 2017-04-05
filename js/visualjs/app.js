/*jshint esversion: 6*/

function createBubbleButton() {
  let newButton = document.createElement("button");
  newButton.id = "bubbleButton";
  newButton.innerHTML = "BubbleSort";
  newButton.width = "10%";
  newButton.style.position = "fixed";
  newButton.style.top = "50px";
  newButton.style.left = "45%";

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
}

let bubbleButton = createBubbleButton();

bubbleButton.addEventListener("click", () => {
  let valuePlanes = document.querySelectorAll(".customPlanes");

  let valueArr = [];
  for (let i = 0; i < valuePlanes.length; i++) {
    valueArr.push(Number(valuePlanes[i].getAttribute("planeVal")));
  }
  visualBubble(valueArr);
});