'use strict';

function binarySearch(array, valueToSearchFor) {
    //fail first if any of these conditions are true:
    if (array.length < 1 || valueToSearchFor > array[array.length - 1] || valueToSearchFor < array[0] || valueToSearchFor === null || valueToSearchFor === undefined) return -1;

    //now we know the value would fit somewhere inside this array, so start the loop to search for it.
    var start = 0;
    var end = array.length;
    while (start < end) {
        let mid = Math.floor((end + start) / 2);
        if (array[mid] === valueToSearchFor) return mid;
        else if (array[mid] < valueToSearchFor) start = mid + 1;
        else end = mid;
    }
    return -1;
}
/*
console.log(binarySearch([1, 2, 3, 5], 1)); // should return 0
console.log(binarySearch([1, 2, 3, 5], 2)); // should return 1
console.log(binarySearch([1, 2, 3, 5], 3)); // should return 2
console.log(binarySearch([1, 2, 3, 5], 4)); // should return -1
console.log(binarySearch([1, 2, 3, 5], 5)); // should return 3
console.log(binarySearch([1, 2, 3, 5], 900)); // should return -1
console.log(binarySearch([1, 2, 3, 5], 0)); // should return -1
console.log('-------------------------------------------------');
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'a')); // should return 0
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'b')); // should return 1
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'c')); // should return 2
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'd')); // should return 3
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'e')); // should return -1
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'f')); // should return 4
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'x')); // should return -1
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'z')); // should return -1
console.log(binarySearch(['a', 'b', 'c', 'd', 'f', 'y'], 'A')); // should return -1*/