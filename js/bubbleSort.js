/*jshint esversion: 6*/
const checkData = require("./checkData.js");

const bubbleSort = (collection) => {
  checkData(collection);
  let cleanPass = true;

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] > collection[i + 1]) {
      let exchangeNum = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = exchangeNum;
      cleanPass = false;
    }
  }
  if (!cleanPass) {
    bubbleSort(collection);
  }
  return collection;
};

  module.exports = bubbleSort;