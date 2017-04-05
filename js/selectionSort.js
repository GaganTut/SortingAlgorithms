/*jshint esversion: 6*/
const checkData = require("./checkData.js");

const selectionSort = (collection) => {
  checkData(collection);

  if (collection.length === 1) {
    return collection;
  }
  let maxNum = [collection[0]];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] >= maxNum[0]) {
      maxNum = [collection[i]];
    }
  }
  maxNum = collection.splice(collection.indexOf(maxNum[0]), 1);

  return selectionSort(collection).concat(maxNum);
};

module.exports = selectionSort;
