# Reverse an Array

<!-- Short summary or background information -->
Solution by Dina Ayoub & Mariko Alvarado

## Challenge

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency

Swapping approach: loop through the first half of the array and do an in-place swap of items with their corresponding item in the second half of the array using a temporary variable.
This requires iterating n/2 times, which makes the Big O of the algorithm O(n)
Since we are swapping in-place, the storage needed is just the temp variable, so the Big O of storage is O(1).

## Solution

![Solution](assets/reverse-array-whiteboard.png)
