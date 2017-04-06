/*jshint esversion: 6*/
/*const createSelectionButton = ()=> {
  let newButton = document.createElement("button");
  newButton.id = "selectionBtn";
  newButton.innerHTML = "Selection Sort";
  newButton.width = "10%";
  newButton.style.position = "fixed";
  newButton.style.top = "70px";
  newButton.style.left = "45%";

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
};

const pushNode = (node) => {
  node.parentNode.appendChild(node);
  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");
  node.setAttribute("material", "color: lightblue");
  node.setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(node.getAttribute("planeVal"))}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 7)}`);
};

const animNodes = (node) => {
  node.removeAttribute("animation");
  node.previousSibling.removeAttribute("animation");

  node.setAttribute("animation", `property: material.color; dir: alternate; dur: 300; loop: false; to: none`);
  node.previousSibling.setAttribute("animation", `property: material.color; dir: alternate; dur: 300; loop: false; to: none`);
};

const visualSelection = () => {
  let valueArr = document.querySelectorAll(".customPlanes");
  let parent = document.querySelector("#wholeScene");
  let maxNum = 0;

  const miniTimeout = (i) => {
    setTimeout(()=> {testPass(i);}, 600);
  };
  const testPass = (i) => {
    if (collection[i] >= maxNum[0]) {
      maxNum = [collection[i]];
    }
    i++;
    if(i < valueArr.length - 1) {
      miniTimeout(i);
    }
  };

  miniTimeout(0);
};*/