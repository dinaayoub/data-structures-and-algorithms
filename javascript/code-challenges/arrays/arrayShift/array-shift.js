'use strict'

function insertShiftArray(array,valueToAdd) {
    for (let i= array.length; i>Math.ceil((array.length-1)/2); i--) {
        array[i] = array[i-1];
    }
    array[Math.ceil((array.length-1)/2)] = valueToAdd;
    return array;
}
