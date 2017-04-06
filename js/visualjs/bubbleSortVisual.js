/*jshint esversion: 6*/
const createBubbleButton = ()=> {
  let newButton = document.createElement("button");
  newButton.id = "bubbleButton";
  newButton.innerHTML = "Bubble Sort";
  newButton.width = "10%";
  newButton.style.position = "fixed";
  newButton.style.top = "50px";
  newButton.style.left = "45%";

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
};

const swapNodes = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);
  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");
  node.setAttribute("material", "color: lightblue");
  node.setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(node.getAttribute("planeVal"))}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 6)}`);
  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 5)}`);
};

const animNodes = (node) => {
  node.removeAttribute("animation");
  node.previousSibling.removeAttribute("animation");

  node.setAttribute("animation", `property: material.color; dir: alternate; dur: 300; loop: false; to: red`);
  node.previousSibling.setAttribute("animation", `property: material.color; dir: alternate; dur: 300; loop: false; to: red`);
};

const visualBubble = () => {
  let valueArr = document.querySelectorAll(".customPlanes");
  let parent = document.querySelector("#wholeScene");

  let cleanPass = true;

  const miniTimeout = (i) => {
    setTimeout(()=> {testPass(i);}, 600);
  };

  const testPass = (i) => {
    animNodes(valueArr[i + 1]);
    if (Number(valueArr[i].getAttribute("planeVal")) > Number(valueArr[i + 1].getAttribute("planeVal"))) {
      swapNodes(valueArr[i + 1]);
      cleanPass = false;
    }
    i++;
    if(i < valueArr.length - 1) {
      miniTimeout(i);
    } else {
      if (!cleanPass) {
        visualBubble();
      }
    }
  };

  miniTimeout(0);
  return;
};