'use strict';

function leftJoin(hashTable1, hashTable2) {
  var joined = [];

  for (let i = 0; i < hashTable1.size; i++) {
    //1. first check that this is not an empty row in the hashtable, if it is, do nothing
    if (hashTable1.map[i]) {
      var linkedList = hashTable1.map[i];
      var currentNode = linkedList.head;
      //1.5 loop on all of the nodes in the linked list to add them all
      while (currentNode) {
        var newArray = [];

        //2. add key value pair from hashtable 1
        var key = Object.keys(currentNode.value)[0];
        var synonym = currentNode.value[key];
        newArray.push(key);
        newArray.push(synonym);

        //3. check if the item exists in hashTable2
        var antonymNode = hashTable2.get(key);
        //4. add value from hashTable2 OR null if key is not found in hashTable2
        if (antonymNode) {
          let antonymKey = Object.keys(antonymNode)[0];
          var antonym = antonymNode[antonymKey];
          newArray.push(antonym);
        }
        else newArray.push(null);

        //console.log({ newArray });
        //finally, add this new array to the joined array
        joined.push(newArray);

        //move on to the next node
        currentNode = currentNode.next;
      }
    }
  }
  return joined;
}

module.exports = leftJoin;
