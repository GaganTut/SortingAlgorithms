/*jshint esversion: 6*/
let bubbleButton = createBubbleButton();

bubbleButton.addEventListener("click", () => {
  let valuePlanes = document.querySelectorAll(".customPlanes");

  let valueArr = [];
  for (let i = 0; i < valuePlanes.length; i++) {
    valueArr.push(Number(valuePlanes[i].getAttribute("planeVal")));
  }
  visualBubble(valueArr);
});

/*let selectionButton = createSelectionButton();*/
