'use strict';

const BinarySearchTree = require('./binary-search-tree');
const BinaryTree = require('./binary-tree');
const Node = require('./node');

// var binarySearchTree = new BinarySearchTree();

// binarySearchTree.add(60);
// binarySearchTree.add(50);
// binarySearchTree.add(70);
// binarySearchTree.add(40);
// binarySearchTree.add(55);

var binaryTree = new BinaryTree();
binaryTree.root = new Node(60);
binaryTree.root.left = new Node(90);
binaryTree.root.right = new Node(70);
binaryTree.root.left.left = new Node(10);
binaryTree.root.left.right = new Node(55);
binaryTree.root.left.left.left = new Node(10);
binaryTree.root.left.left.right= new Node(104);
binaryTree.root.left.right.left = new Node(505);
binaryTree.root.left.right.right = new Node(525);

//should be false, output: false
// console.log('contains 22:',binarySearchTree.contains(22));
// console.log('contains -1:',binarySearchTree.contains(-1));
// //console.log('contains no param given:',binarySearchTree.contains()); //correctly throws an error
// console.log('contains 65:',binarySearchTree.contains(65));

// //should be true, output: true
// console.log('contains 55:',binarySearchTree.contains(55));
// console.log('contains 60:',binarySearchTree.contains(60));
// console.log('contains 50:',binarySearchTree.contains(50));
// console.log('contains 40:',binarySearchTree.contains(40));
// console.log('contains 70:',binarySearchTree.contains(70));

// //pre-order should be 60, 50, 40, 55, 70
// //output: [ 60, 50, 40, 55, 70 ]
// console.log('Pre-order:',binarySearchTree.preOrder(binarySearchTree.root));

// //in-order should be 40 50 55 60 70
// //output: [ 40, 50, 55, 60, 70 ]
// console.log('In-order:',binarySearchTree.inOrder(binarySearchTree.root));

// //post-order should be 40 55 50 70 60
// //output: [ 40, 55, 50, 70, 60 ]
// console.log('Post-order:',binarySearchTree.postOrder(binarySearchTree.root));

//
console.log(binaryTree.getMax());
