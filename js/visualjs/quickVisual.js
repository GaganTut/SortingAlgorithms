/*jshint esversion: 6*/
const createQuickButton = ()=> {
  let newButton = document.createElement("button");
  newButton.id = "quickBtn";
  newButton.innerHTML = "Quick Sort";
  newButton.addEventListener("click", () => {
    let valueArr = document.querySelectorAll(".customPlanes");
    let nodeArray = [];
    for (let i = 0; i < valueArr.length; i++) {
      nodeArray.push(valueArr[i]);
    }
    visualQuick(nodeArray);
  });

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
};

const alignNodesBefore = (nodeArray, reference) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  for (let z = nodeArray.length - 1; z >= 0; z--) {
    reference.parentNode.insertBefore(nodeArray[z], reference.nextSibling);
  }
  for (let i = 0; i < valueArr.length; i++) {
    valueArr[i].removeAttribute("animation");
    valueArr[i].setAttribute("material", "color: lightblue");
    valueArr[i].setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(valueArr[i].getAttribute("planeVal"))}`);
    valueArr[i].setAttribute("text", `value: ${Number(valueArr[i].getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
    valueArr[i].setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(valueArr[i].parentNode.children).indexOf(valueArr[i]) - 6)}`);
  }
};

const alignNodesAfter = (nodeArray, reference) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  for (let z = 0; z < nodeArray.length; z++) {
    reference.parentNode.insertBefore(nodeArray[z], reference);
  }
  for (let i = 0; i < valueArr.length; i++) {
    valueArr[i].removeAttribute("animation");
    valueArr[i].setAttribute("material", "color: lightblue");
    valueArr[i].setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(valueArr[i].getAttribute("planeVal"))}`);
    valueArr[i].setAttribute("text", `value: ${Number(valueArr[i].getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
    valueArr[i].setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(valueArr[i].parentNode.children).indexOf(valueArr[i]) - 6)}`);
  }
};

const animMiddle = (node) => {
  node.removeAttribute("animation");
  node.setAttribute("animation", `property: material; dir: normal; dur: 500; loop: false; to: color: red`);
};

const visualQuick = (nodeArray) => {
  if (nodeArray.length <= 1) {
    return nodeArray;
  }

  let leftArr = [];
  let middleArr = [nodeArray[0]];
  let rightArr = [];

  for (let j = 1; j < nodeArray.length; j++) {
    if (Number(nodeArray[j].getAttribute("planeVal")) >= Number(nodeArray[0].getAttribute("planeVal"))) {
      rightArr.push(nodeArray[j]);
    } else {
      leftArr.push(nodeArray[j]);
    }
  }
  animMiddle(middleArr[0]);

  setTimeout(() => {
    alignNodesBefore(leftArr, middleArr[0]);
  }, 1000);

  setTimeout(() => {
    alignNodesAfter(rightArr,middleArr[middleArr.length -1]);
  }, 1000);

  setTimeout(() => {
    visualQuick(leftArr);
  }, 2000);
  setTimeout(() => {
    visualQuick(rightArr);
  }, 2000);
};

createQuickButton();