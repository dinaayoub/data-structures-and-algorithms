'use strict';

const PseudoQueue = require('../pseudo-queue');

describe('Psuedo Queue Using 2 Stacks', () => {
  var pseudoQueue = new PseudoQueue();

  it('Can successfully instantiate an empty queue', () => {
    var pseudoQueue2 = new PseudoQueue();
    expect(pseudoQueue2.isEmpty()).toBe(true);
  });

  it('Can successfully enqueue into a queue', () => {
    pseudoQueue.enqueue('a');
    expect(pseudoQueue.stack1.top).not.toBe(null);
    expect(pseudoQueue.stack1.top.value).toStrictEqual('a');

  });

  it('Can successfully enqueue multiple values into a queue', () => {
    pseudoQueue.enqueue('b');
    pseudoQueue.enqueue('c');
    pseudoQueue.enqueue('d');
    expect(pseudoQueue.stack1.top.value).toStrictEqual('d');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    var temp = pseudoQueue.dequeue();
    expect(temp).toStrictEqual('a');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    while (!pseudoQueue.isEmpty()) {
      pseudoQueue.dequeue();
    }
    expect(pseudoQueue.stack1.top).toBe(null);
    expect(pseudoQueue.stack2.top).toBe(null);
  });

  it('Calling dequeue on empty queue raises exception', () => {
    expect(() => {
      pseudoQueue.dequeue();
    }).toThrow();
  });

});
