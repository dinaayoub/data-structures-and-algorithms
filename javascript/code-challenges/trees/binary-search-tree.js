'use strict';

const Node = require('./node');
const BinaryTree = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    var node = new Node(value);
    if (!value && value !== 0) throw new Error('No value provided to add to the binary search tree');
    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.left && currentNode.value >=value && currentNode.left.value <=value)
      {
        //insert the node here
        node.left = currentNode.left;
        currentNode.left = node;
        return;
      }
      else if (currentNode.right && currentNode.value <= value && currentNode.right.value >=value) {
        //insert node here.
        node.right = currentNode.right;
        currentNode.right = node;
        return;
      } else if (currentNode.value === value) {
        //don't add? return
      }
    }
  }

  contains(value) {
    if (!value && value !== 0) throw new Error('No value provided to search for in the binary search tree');
    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) currentNode = currentNode.left;
      else if (currentNode.value < value) currentNode = currentNode.right;
      else if (currentNode.value === value) return true;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
