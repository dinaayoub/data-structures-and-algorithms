'use strict';
const Node = require('./node');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    var node = new Node(value);
    var temp = this.rear;
    this.rear = node;
    node.next = temp;
  }

  dequeue(){
    if (!this.front) throw new Error('Queue is empty, cannot dequeue.');
    var temp = this.front;
    this.front = this.front.next;
    return temp;
  }

  peek(){
    if (!this.front) throw new Error('Queue is empty, cannot peek');
    return this.front.value;
  }

  isEmpty(){
    if (this.front) return false;
    return true;
  }
}

module.exports = Queue;
