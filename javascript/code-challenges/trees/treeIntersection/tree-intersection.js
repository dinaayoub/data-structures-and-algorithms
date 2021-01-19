'use strict';
const HashTable = require('../../hash-tables/hash-table');

function treeIntersection(tree1, tree2){

  if (!tree1.root || !tree2.root) return [];

  var hashtable = new HashTable(1024);
  var resultsArray = [];

  //do a pre-order traversal of the tree starting from the given root
  var traverseTree = (root, treeName) => {
    if (treeName === 'tree1')
      addItemsFromTree1(root, hashtable);
    else
      addAndCheckItemsFromTree2(root, hashtable,resultsArray);
    if (root.left) traverseTree(root.left,treeName);
    if (root.right) traverseTree(root.right,treeName);
  };
  traverseTree(tree1.root, 'tree1');
  traverseTree(tree2.root, 'tree2');
  return resultsArray;
}

function addItemsFromTree1(root, hashtable){
  //if the item doesn't already exist, add it to the hash table
  if (!hashtable.contains(root.value))
    hashtable.add(root.value, 'tree1');
}

function addAndCheckItemsFromTree2(root, hashtable,resultsArray){
  const value = hashtable.get(root.value);
  if (value){
    //first, check if the value is for the correct tree
    if (value[root.value] === 'tree1')
      resultsArray.push(root.value);
  }
  //add the key with the value tree2.
  hashtable.add(root.value,'tree2');
}

module.exports = treeIntersection;
