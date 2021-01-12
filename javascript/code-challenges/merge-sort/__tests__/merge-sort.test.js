'use strict';

var mergeSort = require('../merge-sort');
var arr1 = [8,4,23,42,16,15];
var arr2 = [20,18,12,8,5,-2];
var arr3 = [5,12,7,5,5,7];
var arr4 = [2,3,5,7,13,11];

describe('Merge Sort', () => {
  it('Can sort an unsorted array', () =>{
    expect(mergeSort(arr1)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  it('Can sort a reverse-sorted array', () => {
    expect(mergeSort(arr2)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

  it('Can sort an array with few uniques', () => {
    expect(mergeSort(arr3)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });

  it('Can sort a nearly sorted array', () => {
    expect(mergeSort(arr4)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});
