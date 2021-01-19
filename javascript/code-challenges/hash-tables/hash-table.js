'use strict';
//const Node =require('../linked-list/node');
const LinkedList = require( '../linked-list/linked-list');

class HashTable{

  constructor(size){
    this.map = new Array(size);
    this.size = size;
  }

  // turn the key into an array of characters that make up a string
  // .reduce to add the charCodeAt(0) + totalSoFar(acculumator)
  // multiply it by 599
  // then get the remainder when you divide by the size

  hash(key) {
    key = '' + key;
    var stringArray = key.split('');
    var num = stringArray.reduce((acc,val) => {
      return acc + val.charCodeAt(0);
    }, 0 );
    // console.log({num});
    num = (num * 599) % this.size;
    // console.log({num});
    return num;
  }

  // need a method that will allow me to put something into my hashmap
  add(key, value) {
    // 1. get the hash
    const hash = this.hash(key);
    // console.log({hash});

    // 2. make value entry
    const entry = {[key]: value};
    // console.log({entry});

    // 3. set the entry to the hash value in the map
    // 3.1 check to see if there is a hash there already - if not, I need to put in a LL
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }

    // 3.2 add the entry
    this.map[hash].insert(entry);
    // console.log({hash});
    return hash;
  }

  get(key){
    var ll = this.map[this.hash(key)];
    if (ll) {
      var currentNode = ll.head;
      while (currentNode) {
      // console.log({currentNode});
        if (currentNode.value[key])
          return currentNode.value;
        else currentNode = currentNode.next;
      }
    }
    return null;
  }

  contains(key){
    var result = this.get(key);
    if (result) return true;
    return false;
  }
}

module.exports = HashTable;
