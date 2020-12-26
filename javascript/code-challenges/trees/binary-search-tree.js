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
    if (!this.root) {
      this.root = node;
      return;
    }
    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        node.left = currentNode.left;
        currentNode.left = node;
        return;
      }
      else if (currentNode.value >= value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = node;
          return;
        }
      } else if (currentNode.value <= value) {
        if (currentNode.right) { currentNode = currentNode.right; }
        else {
          currentNode.right = node;
          return;
        }
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
