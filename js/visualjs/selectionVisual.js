/*jshint esversion: 6*/

const pushNode = (node) => {
  let valueArr = document.querySelectorAll(".customPlanes");

  node.parentNode.appendChild(node);
  for (let i = 0; i < valueArr.length; i++) {
    valueArr[i].removeAttribute("animation");
    valueArr[i].setAttribute("material", "color: lightblue");
    valueArr[i].setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(valueArr[i].getAttribute("planeVal"))}`);
    valueArr[i].setAttribute("text", `value: ${Number(valueArr[i].getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
    valueArr[i].setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(valueArr[i].parentNode.children).indexOf(valueArr[i]) - 6)}`);
  }
};


const visualSelection = () => {
  let parent = document.querySelector("#wholeScene");

  const selectionTime = (j) => {
    setTimeout(() => {
      eachPass(j);
    }, 1000);
  };

  const eachPass = (j) => {
    let valueArr = document.querySelectorAll(".customPlanes");
    let maxNum = valueArr[0];
    for (let i = 0; i < valueArr.length - j; i++) {
      if(Number(valueArr[i].getAttribute("planeVal")) < Number(maxNum.getAttribute("planeVal"))) {
        maxNum = valueArr[i];
      }
    }
    pushNode(maxNum, j);
    j++;
    if(j < valueArr.length) {
      selectionTime(j);
    }
  };

  selectionTime(0);
};

let selectionBtn = createButton("selectionBtn", "Selection Sort");
selectionBtn.addEventListener("click", () => {
  visualSelection();
});