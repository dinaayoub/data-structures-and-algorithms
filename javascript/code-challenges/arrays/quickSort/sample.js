var items = [8,4,23,42,16,15];

'use strict';

function quickSort(array, left, right){
  if (left < right) {
    //partition the array by setting the position of the pivot value
    var position = partition(array, left, right);
    //sort the left side of the array
    quickSort(array, left, position - 1);
    //sort the right side of the array
    quickSort(array, position + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  // set a pivot value as a point of reference, choose the rightmost item
  var pivot = array[right];
  // create a variable to track the largest index of numbers lower than the defined pivot
  var low = left - 1;
  for (let i = left; i < right; i++)
  {
    if (array[i] <= pivot){
      low++;
      swap(array, i, low);
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  swap(array, right, low + 1);

  // return the pivot index point
  return low + 1;
}

function swap(array, i, j) {
  if (i!==j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log(array);
}


module.exports = quickSort;


// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
module.exports = quickSort;
