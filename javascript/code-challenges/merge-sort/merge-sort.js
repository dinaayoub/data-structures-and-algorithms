'use strict';

function mergeSort(arr){
  var n = arr.length;

  if (n>1) {
    var mid = Math.floor(n/2);
    var left = arr.slice(0,mid);
    // console.log({left});
    var right = arr.slice(mid,n);
    // console.log({right});
    left = mergeSort(left);
    right = mergeSort(right);
    arr = merge(left, right);
  }
  return arr;
}

function merge(left, right){
  var i = 0;
  var j = 0;
  var k = 0;
  var newArray = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      newArray[k] = left[i];
      i++;
    }
    else {
      newArray[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    newArray = [...newArray, ...right.slice(j,right.length)];
  }
  else if (j=== right.length){
    newArray = [...newArray, ...left.slice(i,left.length)];
  }
  // console.log({newArray});
  return newArray;
}

// var arr1 = [8,4,23,42,16,15];
// var arr2 = [20,18,12,8,5,-2];
// var arr3 = [5,12,7,5,5,7];
// var arr4 = [2,3,5,7,13,11];
// console.log(mergeSort(arr1));
// console.log(mergeSort(arr2));
// console.log(mergeSort(arr3));
// console.log(mergeSort(arr4));
module.exports = mergeSort;
