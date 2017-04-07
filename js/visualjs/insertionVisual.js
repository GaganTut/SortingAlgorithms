/*jshint esversion: 6*/

const swapWithPrev = (node) => {
  node.parentNode.insertBefore(node, node.previousSibling);

  node.removeAttribute("animation");
  node.nextElementSibling.removeAttribute("animation");

  node.setAttribute("material", "color: lightblue");
  node.setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(node.getAttribute("planeVal"))}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 6)}`);

  node.nextElementSibling.setAttribute("animation", `property: position; dir: normal; dur: 500; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 5)}`);
};

const insertAtBeginning = (node) => {
  let valueArr = document.querySelectorAll(".customPlanes");
  node.parentNode.insertBefore(node, valueArr[0]);

  node.removeAttribute("animation");
  node.setAttribute("material", "color: lightblue");
  node.setAttribute("geometry", `primitive: plane; width: 1; height: ${Number(node.getAttribute("planeVal"))}`);
  node.setAttribute("text", `value: ${Number(node.getAttribute("planeVal"))}; color: black; align: center; font: dejavu; width: 15`);
  node.setAttribute("animation", `property: position; dir: normal; dur: 100; loop: false; to: ${getPositions(Array.from(node.parentNode.children).indexOf(node) - 6)}`);
};

const visualInsertion = () => {
  let valueArr = document.querySelectorAll(".customPlanes");

  const outerLoop = (j) => {
    setTimeout(() => {
      loopValues(j);
    }, 1000);
  };

  const innerLoop = (l) => {
    setTimeout(() => {
      reorderPlanes(l);
    }, 100);
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
  outerLoop(1);
};

let insertionBtn = createButton("insertionBtn", "Insertion Sort");
insertionBtn.addEventListener("click", () => {
    visualInsertion();
  });