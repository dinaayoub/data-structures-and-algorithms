'use strict';
const Node = require('./node');

class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(value){
    var node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue(){
    if (!this.front) throw new Error('Queue is empty, cannot dequeue.');
    var temp = this.front;
    this.front = this.front.next;
    return temp.value;
  }

  peek(){
    if (!this.front) throw new Error('Queue is empty, cannot peek');
    return this.front.value;
  }

  isEmpty(){
    if (this.front) return false;
    return true;
  }

  toString() {
    if (!this.front) return 'NULL';
    var currentNode = this.front;
    var string = ``;
    while (currentNode) {
      string += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    string += 'NULL';
    return string;
  }
}

module.exports = Queue;
