/*jshint esversion: 6*/

const createInitEntity = (parent, value, position) => {
  let newEntity = document.createElement("a-entity");
  newEntity.id = "plane" + value;
  newEntity.className = "customPlanes";
  newEntity.setAttribute("planeVal", value);
  newEntity.setAttribute("material", "color: lime");
  newEntity.setAttribute("geometry", `primitive: plane; width: 0.95; height: ${value/4}`);
  newEntity.setAttribute("text", `value: ${value}; color: black; align: center; font: dejavu; width: 10`);
  newEntity.setAttribute("position", getPositions(position));

  let parentObj = document.querySelector(parent);
  parentObj.appendChild(newEntity);

  return newEntity;
};

for (var i = 0; i < 40; i++) {
  let randomNum = Math.floor(Math.random() * 80);
  createInitEntity("#wholeScene", randomNum, i);
}