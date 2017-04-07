/*jshint esversion: 6*/
const swapNodes = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);
  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");
  node.setAttribute("material", "color: lightblue");
  node.setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(node.getAttribute("planeVal"))}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 400; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 6)}`);
  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 400; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 5)}`);
};

const animNodes = (node) => {
  node.removeAttribute("animation");
  node.previousSibling.removeAttribute("animation");

  node.setAttribute("animation", "property: rotation; dir: alternate; dur: 100; loop: false; to: 0 90 0");
  node.previousSibling.setAttribute("animation", "property: rotation; dir: alternate; dur: 100; loop: false; to: 0 90 0");
};

const visualBubble = () => {
  let parent = document.querySelector("#wholeScene");

  let cleanPass = true;

  const miniTimeout = (i) => {
    setTimeout(()=> {testPass(i);}, 1000);
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

let bubbleBtn = createButton("bubbleBtn", "Bubble Sort");
bubbleBtn.addEventListener("click", () => {
    visualBubble();
  });