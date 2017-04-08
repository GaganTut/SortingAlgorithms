/*jshint esversion: 6*/
const swapNodes = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);
  nodeIndex = Array.from(node.parentNode.children).indexOf(node);
  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");
  node.setAttribute("material", "color: lime");
  node.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${Number(node.getAttribute("planeVal"))/4 + 0.5}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 10`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(nodeIndex)}`);
  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(nodeIndex + 1)}`);
};
const animNodes = (node) => {
  node.removeAttribute("animation");
  node.previousSibling.removeAttribute("animation");
  node.setAttribute("animation", "property: material; dir: alternate; from: color: lime; dur: 50; loop: false; to: color: yellow");
  node.previousSibling.setAttribute("animation", "property: material; dir: alternate; from: color: lime; dur: 50; loop: false; to: color: yellow");
};

const visualBubble = () => {
  let valueArr = document.querySelectorAll(".customPlanes");

  let cleanPass = true;

  const miniTimeout = (i) => {
    setTimeout(()=> {testPass(i);}, 200);
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

  miniTimeout(0);
  return;
};