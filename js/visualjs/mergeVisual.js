/*jshint esversion: 6*/

const visualMerge = (nodeArray) => {
  if (nodeArray.length <= 1) {
    return nodeArray;
  }

  let halfArr1 = visualMerge(nodeArray.slice(0, nodeArray.length/2));
  let halfArr2 = visualMerge(nodeArray.slice(nodeArray.length/2));

  if(Number(halfArr1[0].getAttribute("planeVal")) >= Number(halfArr2[halfArr2.length - 1].getAttribute("planeVal"))) {
    //joinArr(halfArr2, halfArr1);
    return halfArr2.concat(halfArr1);
  }
  if(halfArr2[0] >= halfArr1[halfArr1.length - 1]) {
    //joinArr(halfArr1, halfArr2);
    return halfArr1.concat(halfArr2);
  }

  let joinedArr = [];

  while(halfArr1.length !== 0 && halfArr2.length !== 0) {
    if (Number(halfArr1[0].getAttribute("planeVal")) < Number(halfArr2[0].getAttribute("planeVal"))) {
      joinedArr.push(halfArr1[0]);
      halfArr1.shift();
    } else {
      joinedArr.push(halfArr2[0]);
      halfArr2.shift();
    }
  }
  while(halfArr1.length !== 0) {
    joinedArr.push(halfArr1[0]);
    halfArr1.shift();
  }
  while(halfArr2.length !== 0) {
    joinedArr.push(halfArr2[0]);
    halfArr2.shift();
  }

  for (let i = 0; i < joinedArr.length; i++) {
    joinedArr[0].parentNode.appendChild(joinedArr[i]);
  }
  return joinedArr;
};

