'use strict';
const HashTable = require('../hash-table');

function repeatedWord(sentence) {

  //get rid of punctuation
  sentence = sentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').toLowerCase();

  //create a hash table to store the words in
  var hashtable = new HashTable(1024);
  var word = '';

  //split the sentence into an array of words
  var array = sentence.split(' ');

  //for each word, either add it to the hash map if it doesn't exist, or exit the loop if it does already exist
  for (let i = 0; i < array.length; i++) {
    word = array[i];
    if (hashtable.get(array[i])) break;
    hashtable.add(array[i], 1);
  }
  //return the word which will either be an empty string if there
  //are no repeats, or the first repeated word if that exists.
  return word;
}

module.exports = repeatedWord;
