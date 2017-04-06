/*jshint esversion: 6*/
const checkData = require("./checkData.js");

const quickSort = (collection) => {
  checkData(collection);
  if (collection.length <= 1) {
    return collection;
  }
  let leftArr = [];
  let midArr = [collection[0]];
  let rightArr = [];

  for (let i = 1; i < collection.length; i++) {
    if(collection[i] >= collection[0]) {
      rightArr.push(collection[i]);
    } else {
      leftArr.push(collection[i]);
    }
  }
  return quickSort(leftArr).concat(midArr, quickSort(rightArr));
};


module.exports = quickSort;