'use strict';
const HashTable = require('../../hash-tables/hash-table');
// const Node = require('../node');
// const BinaryTree = require('../binary-tree');

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

// const tree1 = new BinaryTree();
// const tree2 = new BinaryTree();

// tree1.root = new Node(150);
// tree1.root.left = new Node(100);
// tree1.root.right = new Node(250);
// tree1.root.left.left = new Node(75);
// tree1.root.left.right = new Node(160);
// tree1.root.right.left = new Node(200);
// tree1.root.right.right = new Node(350);
// tree1.root.left.right.left = new Node(125);
// tree1.root.left.right.right = new Node(175);
// tree1.root.right.right.left = new Node(300);
// tree1.root.left.right.right = new Node(500);
// // console.log(tree1);

// tree2.root= new Node(42);
// tree2.root.left = new Node(100);
// tree2.root.right = new Node(600);
// tree2.root.left.left = new Node(15);
// tree2.root.left.right= new Node(160);
// tree2.root.right.left = new Node(200);
// tree2.root.right.right = new Node(350);
// tree2.root.left.right.left = new Node(125);
// tree2.root.left.right.right = new Node(175);
// tree2.root.right.right.left = new Node(4);
// tree2.root.left.right.right = new Node(500);

// console.log(treeIntersection(tree1,tree2));
module.exports = treeIntersection;
