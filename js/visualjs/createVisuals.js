/*jshint esversion: 6*/
const getPositions = (key) => {
  let positionObject = {
    0: "-20 2 -15",
    1: "-19 2 -15",
    2: "-18 2 -15",
    3: "-17 2 -15",
    4: "-16 2 -15",
    5: "-15 2 -15",
    6: "-14 2 -15",
    7: "-13 2 -15",
    8: "-12 2 -15",
    9: "-11 2 -15",
    10: "-10 2 -15",
    11: "-9 2 -15",
    12: "-8 2 -15",
    13: "-7 2 -15",
    14: "-6 2 -15",
    15: "-5 2 -15",
    16: "-4 2 -15",
    17: "-3 2 -15",
    18: "-2 2 -15",
    19: "-1 2 -15",
    20: "0 2 -15",
    21: "1 2 -15",
    22: "2 2 -15",
    23: "3 2 -15",
    24: "4 2 -15",
    25: "5 2 -15",
    26: "6 2 -15",
    27: "7 2 -15",
    28: "8 2 -15",
    29: "9 2 -15",
    30: "10 2 -15",
    31: "11 2 -15",
    32: "12 2 -15",
    33: "13 2 -15",
    34: "14 2 -15",
    35: "15 2 -15",
    36: "16 2 -15",
    37: "17 2 -15",
    38: "18 2 -15",
    39: "19 2 -15"
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
  newEntity.setAttribute("material", "color: lime");
  newEntity.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${value/4}`);
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