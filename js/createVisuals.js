/*jshint esversion: 6*/
module.exports = () => {
  const createNumEntity = (parent, value, position, className) => {
    let newEntity = document.createElement("a-entity");
    newEntity.id = "plane" + value;
    newEntity.className = className;
    newEntity.setAttribute("planeVal", value);
    newEntity.setAttribute("material", "color: white");
    newEntity.setAttribute("geometry", "primitive: plane; width: 2; height: 2");
    newEntity.setAttribute("text", `value: ${value}; color: black; align: center; font: dejavu; width: 15`);
    newEntity.setAttribute("position", position);

    let parentObj = document.querySelector(parent);
    parentObj.appendchild(newEntity);

    return newEntity;
  };

  const addEntAnimation = (elementID, position) => {
    let thisElement = document.querySelector(elementID);
    thisElement.removeAttribute("animation");
    thisElement.setAttribute("animation", `property:position; dir:normal; dur:3000; loop:false; to:${position}`);
  };
};