'use strict';

const Node = require('./node');
const BinaryTree = require('./tree');

class BinarySearchTree extends BinaryTree{
  constructor(){
    super();
  }

  add(value){
    var node = new Node(value);
  }

  contains(value){

  }
}

module.exports = BinarySearchTree;
