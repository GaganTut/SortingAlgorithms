/*jshint esversion: 6*/
const checkData = require("./checkData.js");

const insertionSort = (collection) => {
  checkData(collection);

  for (let i = 1; i < collection.length; i++) {
    if(collection[i] < collection[i - 1]) {
      let tempNum = collection.splice(i, 1);
      for (let j = i - 1; j >= 0; j--) {
        if (tempNum[0] > collection[j]) {
          collection.splice(j + 1, 0, tempNum[0]);
          break;
        }
        if (j === 0) {
          collection.unshift(tempNum[0]);
        }
      }
    }
  }
  return collection;
};

module.exports = insertionSort;
