'use strict';

const HashTable = require('../hash-table');

describe('Hash tables', () => {
/*
[] Adding a key/value to your hashtable results in the value being in the data structure
[] Retrieving based on a key returns the value stored
[] Successfully returns null for a key that does not exist in the hashtable
[] Successfully handle a collision within the hashtable
[] Successfully retrieve a value from a bucket within the hashtable that has a collision
[] Successfully hash a key to an in-range value
*/
  const hashTable = new HashTable(10);

  it('Can add a key value pair to the hash table', () => {
    var key = hashTable.add('french','onion soup');
    // console.log(hashTable.map[key]);
    expect(hashTable.map[key].head.value).toEqual({french:'onion soup'});
  });

  it('Can retrieve a value based on the key', () => {
    hashTable.add('egyptian','molokheya');
    hashTable.add('american','burger');
    hashTable.add('british','shepherd\'s pie');
    var foundItem = hashTable.get('french');
    expect(foundItem).toEqual({french:'onion soup'});
    foundItem = hashTable.get('british');
    expect(foundItem).toEqual({british:'shepherd\'s pie'});
  });

  it('Can successfully return null for a key that does not exist in the hashtable', () =>{
    var foundItem = hashTable.get('potatoes');
    // console.log({foundItem});
    expect(foundItem).toBe(null);
  });

  it('Can successfully handle a collision within the hashtable & retrieve that value', () =>{
    //frdench running through the hash function returns the same index as french
    //which is zero
    hashTable.add('frdench','onion soup');
    var foundItem = hashTable.get('french');
    expect(foundItem).toEqual({french:'onion soup'});
  });

  it('Can successfully tell us whether the data structure `contains` the key provided', () =>{
    var isFound = hashTable.contains('american');
    expect(isFound).toBe(true);
    isFound = hashTable.contains('bananas');
    expect(isFound).toBe(false);
  });
});
