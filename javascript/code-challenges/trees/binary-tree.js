'use strict';

const Queue = require('../stacks-and-queues/queue');

class BinaryTree {
  constructor() {
    this.root = null;
    this.collection = [];
  }

  preOrder(root) {
    try {
      var array = [];
      if (!root) return null;

      array.push(root.value);

      if (root.left) {
        array = [...array, ...this.preOrder(root.left)];
      }

      if (root.right) {
        array = [...array, ...this.preOrder(root.right)];
      }

      return array;
    }
    catch (err) {
      console.error('Error traversing the binary tree', err);
    }
  }

  inOrder(root) {
    try {
      var array = [];
      if (!root) return null;

      if (root.left) array = [...array, ...this.inOrder(root.left)];

      array.push(root.value);

      if (root.right) array = [...array, ...this.inOrder(root.right)];

      return array;
    }
    catch (err) {
      console.error('Error traversing the binary tree', err);
    }
  }

  postOrder(root) {
    try {
      var array = [];
      if (!root) return null;

      if (root.left) array = [...array, ...this.postOrder(root.left)];

      if (root.right) array = [...array, ...this.postOrder(root.right)];

      array.push(root.value);

      return array;
    }
    catch (err) {
      console.error('Error traversing the binary tree', err);
    }


  }

  breadthFirst(root) {
    const queue = new Queue();
    queue.enqueue(root);
    while (queue.peek) {
      var frontNode = queue.dequeue();
      console.log(frontNode.value); //or whatever operation you need to perform on each node.
    }
    if (frontNode.left) queue.enqueue(frontNode.left);
    if (frontNode.right) queue.enqueue(frontNode.right);
  }

  getMax(root){
    var currentNode;
    //if no root node is passed in, then use this instance's root.
    if (!root) {currentNode = this.root; }
    //otherwise we are calling this recursively on a specific node.
    else currentNode = root;

    var max = currentNode.value;
    var left;
    var right;
    if (currentNode.left) left = this.getMax(currentNode.left);
    if (currentNode.right) right = this.getMax(currentNode.right);
    if (max < left) max = left;
    if (max < right) max = right;
    return max;
  }
}

module.exports = BinaryTree;
