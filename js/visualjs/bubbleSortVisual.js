/*jshint esversion: 6*/
const swapNodes = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);
  nodeIndex = Array.from(node.parentNode.children).indexOf(node);
  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");
  node.setAttribute("material", "color: lime");
  node.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${Number(node.getAttribute("planeVal"))/4}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 10`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 200; loop: false; to: ${getPositions(nodeIndex)}`);
  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 200; loop: false; to: ${getPositions(nodeIndex + 1)}`);
};
const animNodes = (node) => {
  node.removeAttribute("animation");
  node.previousSibling.removeAttribute("animation");
  node.setAttribute("animation", "property: rotation; dir: alternate; dur: 100; loop: false; to: 0 90 0");
  node.previousSibling.setAttribute("animation", "property: rotation; dir: alternate; dur: 100; loop: false; to: 0 90 0");
};
const visualBubble = () => {
  let cleanPass = true;
  miniTimeout(0);
  return;
};
const miniTimeout = (i) => {
  setTimeout(()=> {
    testPass(i);
  }, 500);
};
const testPass = (i) => {
  let valueArr = document.querySelectorAll(".customPlanes");
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