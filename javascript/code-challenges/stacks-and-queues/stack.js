'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    if (value===null || value ===undefined) throw new Error('Cannot push an empty object onto the stack');
    var node = new Node(value);
    var temp = this.top;
    this.top = node;
    node.next = temp;
  }

  pop(){
    if (this.top) {
      this.top = this.top.next;
      return this.top;
    }
    throw new Error('Stack is empty, unable to pop');
  }

  peek(){
    if (this.top) return this.top.value;
    throw new Error('Stack is empty, unable to peek');
  }

  isEmpty() {
    if (this.top) return false;
    return true;
  }
}

module.exports = Stack;
