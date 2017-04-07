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

const createButton = (createID, innerHTML) => {
  let newButton = document.createElement("button");
  newButton.id = createID;
  newButton.innerHTML = innerHTML;

  let parent = document.querySelector("#wholeBody");
  parent.appendChild(newButton);

  return newButton;
};

const clearPlanes = () => {
  let valPlanes = document.querySelectorAll(".customPlanes");
  enableSorts();
  for (let i = 0; i < valPlanes.length; i++) {
    valPlanes[i].parentNode.removeChild(valPlanes[i]);
  }
};

const enableSorts = () => {
  insertionBtn.disabled = false;
  quickBtn.disabled = false;
  bubbleBtn.disabled = false;
  selectionBtn.disabled = false;
  mergeBtn.disabled = false;
};

const disableSorts = () => {
  insertionBtn.disabled = true;
  quickBtn.disabled = true;
  bubbleBtn.disabled = true;
  selectionBtn.disabled = true;
  mergeBtn.disabled = true;
};