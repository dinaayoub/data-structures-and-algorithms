'use strict';

const PseudoQueue = require('./pseudo-queue');

var pq = new PseudoQueue();
pq.enqueue('a');
console.log(pq);
pq.enqueue('b');
console.log(pq);
pq.enqueue('c');
console.log(pq);
console.log(pq.dequeue());
console.log(pq);
