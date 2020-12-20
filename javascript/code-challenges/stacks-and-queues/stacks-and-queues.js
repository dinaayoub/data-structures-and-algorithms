'use strict';

//const Stack = require('./stack');
const Queue = require('./queue');

/*
var stack = new Stack();

console.log(stack.isEmpty());
stack.push('1');
console.log(stack.peek());
stack.push('2');
stack.push(3);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.toString());
console.log(stack.peek());
*/

var queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue('1');
console.log(queue.peek());
queue.enqueue('2');
queue.enqueue(3);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.toString());
console.log(queue.peek());
