'use strict';

const Queue = require('../stacks-and-queues/queue');
const Node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
    this.collection = [];
  }

  add(value){
    var node = new Node(value);
    //where do we put it?
  }

  preOrder(root) {
    try {
      if (!root) return null;
      console.log(root.value); //or whatever operation you need to perform on each node.
      this.collection.push(root.value);
      if (root.left) this.preOrder(root.left);
      if (root.right) this.preOrder(root.right);
      return this.collection;
    }
    catch (err) {
      console.error('Error traversing the binary tree', err);
    }
  }

  inOrder(root) {
    try {
      if (!root) return null;
      if (root.left) this.inOrder(root.left);
      console.log(root.value); //or whatever operation you need to perform on each node.
      this.collection.push(root.value);
      if (root.right) this.inOrder(root.right);
      return this.collection;
    }
    catch (err) {
      console.error('Error traversing the binary tree', err);
    }
  }

  postOrder(root) {
    try {
      if (!root) return null;
      if (root.left) this.postOrder(root.left);
      if (root.right) this.postOrder(root.right);
      console.log(root.value); //or whatever operation you need to perform on each node.
      this.collection.push(root.value);
      return this.collection;
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
}

module.exports = BinaryTree;
