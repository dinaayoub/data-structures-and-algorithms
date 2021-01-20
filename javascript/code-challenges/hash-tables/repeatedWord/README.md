# Challenge Summary

Code challenge for class 31: Repeated Word

Solution by Dina Ayoub

## Challenge Description

* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.
* Write at least three test assertions for each method that you define.

## Stretch Goals

* Modify your function to return a count of each of the words in the provided string
* Modify your function to return a list of the words most frequently used in the provided string

## Examples

* Input: "Once upon a time, there was a brave princess who..."
* Output: "a"

* Input: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."
* Output: "it"
* Input: "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
* Output: "summer"

## Efficiency (Big O)

* Time
* Space

## Solution

![UML](assets/uml.png)

## Tests

* [x] Can return the correct result when a word is repeated exactly as-is
* [x] Can return an empty string if there are no repeats
* [x] Can return an empty string if the sentence is empty
* [x] Can return the correct result when the word is repeated with diferent case (capitals vs small letters)
