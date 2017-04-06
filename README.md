# SortingAlgorithms
### This repository contains various sorting algorithms used to sort collections of data. There is also visual examples through the HTML.

## Bubble Sort
### Description
The bubble sort method traverses through an array and compares each value with the following value. If the first value is larger, it swaps positions with the next value. After it has finished looping through the whole array, it restarts from beginning. It continually does this until the array gets looped through without a single swap.

### PseudoCode
flag = true;

for loop through collection;
if collection value > following collection value;
  first value = second value;
  second value = first value;
  flag = false;

if flag is false;
  recursively rerun function to loop more;

return collection;

### Best Case Scenario
The best case scenario for this loop is if the values are already in order

### Worst Case Scenario
The worst case scenario is if the values in the collection are perfectly reversed