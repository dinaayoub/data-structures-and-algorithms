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
    if (!this.top) throw new Error('Stack is empty, unable to pop');
    var temp = this.top;
    this.top = this.top.next;
    return temp.value;
  }

  peek(){
    if (this.top) return this.top.value;
    throw new Error('Stack is empty, unable to peek');
  }

  isEmpty() {
    if (this.top) return false;
    return true;
  }

  toString() {
    if (!this.top) return 'NULL';
    var currentNode = this.top;
    var string = ``;
    while (currentNode) {
      string += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    string += 'NULL';
    return string;
  }
}

module.exports = Stack;
