/*jshint esversion: 6*/
const checkData = require("./checkData.js");

const mergeSort = (collection) => {
  checkData(collection);

  if(collection.length === 1) {
    return collection;
  }
  let halfArr1 = mergeSort(collection.slice(0, collection.length/2));
  let halfArr2 = mergeSort(collection.slice(collection.length/2));

  if(halfArr1[0] >= halfArr2[halfArr2.length - 1]) {
    return halfArr2.concat(halfArr1);
  }
  if(halfArr2[0] >= halfArr1[halfArr1.length - 1]) {
    return halfArr1.concat(halfArr2);
  }
  let joinedArr = [];

  while(halfArr1.length !== 0 && halfArr2.length !== 0) {
    if (halfArr1[0] < halfArr2[0]) {
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
  return joinedArr;
};

module.exports = mergeSort;