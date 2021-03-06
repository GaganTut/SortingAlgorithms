# SortingAlgorithms
![alt tag](https://travis-ci.org/GaganTut/SortingAlgorithms.svg?branch=master)
### This repository contains various sorting algorithms used to sort collections of data. There is also visual examples through the HTML.

## Bubble Sort
### Description
The bubble sort method traverses through an array and compares each value with the following value. If the first value is larger, it swaps positions with the next value. After it has finished looping through the whole array, it restarts from beginning. It continually does this until the array gets looped through without a single swap.

### PseudoCode
```
flag = true;

for loop through collection;

if collection value > following collection value;

  first value = second value;

  second value = first value;

  flag = false;

if flag is false;

  recursively rerun function to loop more;

return collection;
```

### Best Case Scenario
The best case scenario for this loop is if the values are already in order

### Worst Case Scenario
The worst case scenario is if the values in the collection are perfectly reversed

## Quick Sort
### Description
The quick sort method uses the first value in the collection to split up the work by creating two separate arrays on the left and on the right of the pivot. It continues to break the collection down until the all the broken arrays have either 0 or 1 value. It then concats the arrays back together with the left/pivot/right structure until it it all joined together.

### PseudoCode
```
if length of collection is equal or less than 1, return the collection back as is *Necessary to stop infinite Recursion*

let leftArray = [];
let middleArray = collection[0];
let rightArray = [];

for loop through collection (except first/pivot value)

push values lower than pivot to leftArray
push values higher than pivot to rightArray

return (Recursively join left arrays with middle arrays with right arrays)
```

## Best Case Scenario
Best case scenario occurs when the pivot value in the collections splits the collections perfectly in half

## Worst Case Scenario
Worst case scenario occurs when the pivot value is either the minimum or the maximum number in the collection causing the data to unevenly all go to one side of split.

## Merge Sort
### Description
The merge sort method starts by breaking a collection to the smallest it can possibly be by splitting each value into individual arrays. It then merges the arrays by comparing them with adjacent arrays. It continues to merge them back to the top until the collection is returned to the top.

### PseudoCode
```
if length of collection is 1, return collection as is

recursively break down collection --->
  let halfArray = mergeSort(collection.splice(1/2));
  let otherHalf = mergeSort(collection.splice(2/2));

if firstValue of collection > lastValue of compared collection
  join both in order;

while both collections have values
  compare them and push values into joined Array

one collection may still have values so shift them onto joined array as well
```

### Best Case Scenario
The best case scenario occurs when the collection is already sorted so that it does not have to use while loops for comparisons.

### Worst Case Scenario
Worst Case scenario occurs when the values in the collection alternate casuing the while loops to take longer to complete

## Insertion Sort
### Description
The insertion sorting method traverses through a collection one value at a time. It then compares that value to the values in the collection before it through a second loop to find its sorted position. It removes the value and re-inserts it where it belongs.

### PseudoCode
```
for loop through collection
  if the value < previous value
    splice it out and save value
    loop through values back from current position of first loop
    if the saved value > any position
      insert value into that spot
    if it is < all values before
      unshift it as first position in collection;

return collection;
```
### Best Case Scenario
The best case scenario occurs if the collection is already in order because it will traverse through without ever needing to splice and insert.

### Worst Case Scenario
Worst case scenario occurs when the collection is perfectly reversed since it will need to go through long second loops to insert values into correct positions.

## Selection Sort
### Description
The selection sorting method traverses through the collection and stores the value of the lowest (or highest) value. At the end of the loop, it removes that value from where it currently is and unshifts(or pushes) it to beginning (or end) of the collection. It then traverses through collection again but doesn't include the first value since it is sorted already.

### PseudoCode
```
if length of collection is 1, return collection  (Recursion flag)

let maximum = collection[0];

for loop thorugh collection
  find largest number
    save value in maximum

splice the value from collection

return recursively joined arrays with maximums
```
### Best Case Scenario
This sorting algorithm loops through collection no matter what so best case scenario is not special

### Worst Case Scenario
This algorithm performs poorly when dealing with very long collections since it completes loops no matter what.
