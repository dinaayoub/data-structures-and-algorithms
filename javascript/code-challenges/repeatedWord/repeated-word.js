'use strict';
const HashTable = require('../hash-tables/hash-table');

function repeatedWord(sentence){

  sentence = sentence.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,'');
  console.log({sentence});
  var hashtable = new HashTable(10);
  var word = '';
  var array = sentence.split(' '); //split on the space to get all the words
  //todo: figure out how to ignore punctuation
  for (let i = 0; i<array.length; i++) {
    word = array[i];
    console.log({word});
    if (hashtable.get(array[i])) break;
    hashtable.add(array[i],1);
    console.log(hashtable);
  }
  return word;
}

module.exports = repeatedWord;
