/* jshint esversion: 6 */
module.exports = (() => {
  const checkData = (data) => {
    if (Array.isArray(data)) {
      return true;
    } else {
      throw new Error("Can Only Sort Arrays");
    }
  };

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
    return quickSort(leftArr).concat(midArr.concat(quickSort(rightArr)));
  };

  return {
    bubbleSort,
    quickSort
  };

})();