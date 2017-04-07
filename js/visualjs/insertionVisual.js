/*jshint esversion: 6*/

const swapWithPrev = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);

  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");

  node.setAttribute("material", "color: lime");
  node.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${Number(node.getAttribute("planeVal"))/4 + 0.5}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 10`);

  node.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node))}`);
  node.setAttribute("animation__", `property: material; dir: alternate; from: color:lime; dur: 100; loop: false; to: color:yellow`);
  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) + 1)}`);
};
const insertAtBeginning = (node) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  node.parentNode.insertBefore(node, valueArr[0]);

  node.removeAttribute("animation");
  node.setAttribute("material", "color: lime");
  node.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${Number(node.getAttribute("planeVal"))/4 + 0.5}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 10`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node))}`);
  node.setAttribute("animation__", `property: material; dir: alternate; from: color:lime; dur: 100; loop: false; to: color:yellow`);
};
const visualInsertion = () => {
  outerLoop(1);
};
const outerLoop = (j) => {
  setTimeout(() => {
    loopValues(j);
  }, 500);
};
const innerLoop = (l) => {
  setTimeout(() => {
    reorderPlanes(l);
  }, 450);
};
const loopValues = (j) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  innerLoop(j);
  j++;
  if(j < valueArr.length) {
    outerLoop(j);
  }
};
const reorderPlanes = (l) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  if (l === 0) {
    insertAtBeginning(valueArr[l]);
  } else if (Number(valueArr[l].getAttribute("planeVal")) < Number(valueArr[l - 1].getAttribute("planeVal"))){
    swapWithPrev(valueArr[l]);
  } else {
    l = 0;
  }
  l--;
  if(l >= 0) {
    innerLoop(l);
  }
};