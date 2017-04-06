/*jshint esversion: 6*/
const getPositions = (key) => {
  let positionObject = {
    0: "-10 2 -15",
    1: "-8 2 -15",
    2: "-6 2 -15",
    3: "-4 2 -15",
    4: "-2 2 -15",
    5: "0 2 -15",
    6: "2 2 -15",
    7: "4 2 -15",
    8: "6 2 -15",
    9: "8 2 -15",
  };

  return positionObject[key];
};
const removeNumPlanes = () => {
  let oldVals = document.querySelector(".customPlanes");
  for (let i = 0; i < oldVals.length; i++) {
    oldVals[i].parentNode.removeChild(oldVals[i]);
  }
};

const createNumEntity = (parent, value, position) => {
  let newEntity = document.createElement("a-entity");
  newEntity.id = "plane" + value;
  newEntity.className = "customPlanes";
  newEntity.setAttribute("planeVal", value);
  newEntity.setAttribute("material", "color: lightblue");
  newEntity.setAttribute("geometry", `primitive: plane; width: 1; height: ${value}`);
  newEntity.setAttribute("text", `value: ${value}; color: black; align: center; font: dejavu; width: 15`);
  newEntity.setAttribute("position", getPositions(position));

  let parentObj = document.querySelector(parent);
  parentObj.appendChild(newEntity);

  return newEntity;
};

const addEntAnimation = (elementID, position) => {
  let thisElement = document.querySelector(elementID);
  thisElement.removeAttribute("animation");
  thisElement.setAttribute("animation", `property:position; dir:normal; dur:3000; loop:false; to:${position}`);
};