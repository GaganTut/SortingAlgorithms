/* jshint esversion: 6 */
const chai = require("chai");
const expect = chai.expect;

const bubbleSort = require("../js/bubbleSort.js");
const quickSort = require("../js/quickSort.js");
const mergeSort = require("../js/mergeSort.js");
const insertionSort = require("../js/insertionSort.js");
const selectionSort = require("../js/selectionSort.js");


let arr1 = [23, 12, 94, 4, 7];
let sortedArr1 = [4, 7, 12, 23, 94];
let arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
let sortedArr2 = [5, 11, 23, 64, 75, 75, 92, 109];
let arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
let sortedArr3 = [0, 2, 16, 19, 22, 43, 46, 54, 54, 63, 75, 82, 86, 98, 98, 99, 127, 135];

describe("Bubble Sort", () => {
  beforeEach(() => {
    arr1 = [23, 12, 94, 4, 7];
    arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
    arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
  });

  it("should sort arrays of various lengths", () => {
    expect(bubbleSort(arr1)).to.deep.equal(sortedArr1);
    expect(bubbleSort(arr2)).to.deep.equal(sortedArr2);
    expect(bubbleSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Quick Sort", () => {
  beforeEach(() => {
    arr1 = [23, 12, 94, 4, 7];
    arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
    arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
  });

  it("should sort arrays of various lengths", () => {
    expect(quickSort(arr1)).to.deep.equal(sortedArr1);
    expect(quickSort(arr2)).to.deep.equal(sortedArr2);
    expect(quickSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Merge Sort", () => {
  beforeEach(() => {
    arr1 = [23, 12, 94, 4, 7];
    arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
    arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
  });

  it("should sort arrays of various lengths", () => {
    expect(mergeSort(arr1)).to.deep.equal(sortedArr1);
    expect(mergeSort(arr2)).to.deep.equal(sortedArr2);
    expect(mergeSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Insertion Sort", () => {
  beforeEach(() => {
    arr1 = [23, 12, 94, 4, 7];
    arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
    arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
  });

  it("should sort arrays of various lengths", () => {
    expect(insertionSort(arr1)).to.deep.equal(sortedArr1);
    expect(insertionSort(arr2)).to.deep.equal(sortedArr2);
    expect(insertionSort(arr3)).to.deep.equal(sortedArr3);
  });
});

describe("Selection Sort", () => {
  beforeEach(() => {
    arr1 = [23, 12, 94, 4, 7];
    arr2 = [64, 92, 23, 11, 75, 5, 109, 75];
    arr3 = [98, 54, 86, 2, 19, 16, 82, 98, 75, 46, 54, 0, 127, 135, 99, 22, 43, 63];
  });

  it("should sort arrays of various lengths", () => {
    expect(selectionSort(arr1)).to.deep.equal(sortedArr1);
    expect(selectionSort(arr2)).to.deep.equal(sortedArr2);
    expect(selectionSort(arr3)).to.deep.equal(sortedArr3);
  });
});