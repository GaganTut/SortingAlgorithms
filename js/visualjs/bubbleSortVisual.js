/*jshint esversion: 6*/

const visualBubble = (valueArr) => {

  let cleanPass = true;

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] > valueArr[i + 1]) {
      let tempNum = valueArr[i];
      valueArr[i] = valueArr[i + 1];
      valueArr[i + 1] = tempNum;
      cleanPass = false;
    }
  }
  let oldList = document.querySelectorAll(".customPlanes");
  let parent = document.querySelector("#wholeScene");
  for (var j = 0; j < oldList.length; j ++) {
    parent.removeChild(oldList[j]);
  }
  if (!cleanPass) {
    visualBubble(valueArr);
  }
  for (var i = 0; i < valueArr.length; i++) {
    createNumEntity("#wholeScene", valueArr[i], i);
  }
  return;
};