'use strict';

function reverseArray(inputArray) {

    for (let i = 0; i < Math.floor(inputArray.length / 2); i++) {
        let tempValue = inputArray[i];
        inputArray[i] = inputArray[inputArray.length - 1 - i];
        inputArray[inputArray.length - 1 - i] = tempValue;
    }

    return inputArray;
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([]));
console.log(reverseArray([1]));
console.log(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12]));
console.log(reverseArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]));
console.log(reverseArray(['a', 'b', 'c', 'd']));