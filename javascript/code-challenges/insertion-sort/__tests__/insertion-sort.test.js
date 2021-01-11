'use strict';

var insertionSort = require('../insertion-sort');
var arr1 = [8,4,23,42,16,15];
var arr2 = [20,18,12,8,5,-2];
var arr3 = [5,12,7,5,5,7];
var arr4 = [2,3,5,7,13,11];

describe('Insertion Sort', () => {
  it('can sort an unsorted array', () =>{
    expect(insertionSort(arr1)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  it('can sort a reverse-sorted array', () => {
    expect(insertionSort(arr2)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

  it('can sort an array with few uniques', () => {
    expect(insertionSort(arr3)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });

  it('can sort a nearly sorted array', () => {
    expect(insertionSort(arr4)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});
