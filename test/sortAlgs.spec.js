/* jshint esversion: 6 */
const chai = require("chai");
const expect = chai.expect;

const sort = require("../js/sortAlgs.js");

let arr1 = [23, 12, 94, 4];
let sortedArr1 = [4, 12, 23, 94];
let arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
let sortedArr2 = [5, 11, 23, 64, 75, 75, 92, 109];
let arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
let sortedArr3 = [0, 2, 16, 19, 22, 43, 46, 54, 54, 63, 75, 82, 86, 98, 98, 99, 127, 135];

describe("Bubble Sort", () => {
  it("should sort arrays of various lengths", () => {
    expect(sort.bubbleSort(arr1)).to.deep.equal(sortedArr1);
    expect(sort.bubbleSort(arr2)).to.deep.equal(sortedArr2);
    expect(sort.bubbleSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Quick Sort", () => {
  it("should sort arrays of various lengths", () => {
    expect(sort.quickSort(arr1)).to.deep.equal(sortedArr1);
    expect(sort.quickSort(arr2)).to.deep.equal(sortedArr2);
    expect(sort.quickSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Merge Sort", () => {
  it("should sort arrays of varioys lengths", () => {
    expect(sort.mergeSort(arr1)).to.deep.equal(sortedArr1);
    expect(sort.mergeSort(arr2)).to.deep.equal(sortedArr2);
    expect(sort.mergeSort(arr3)).to.deep.equal(sortedArr3);
  });
});