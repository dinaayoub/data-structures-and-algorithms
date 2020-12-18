'use strict';

const Stack = require('../stack');
const Queue = require('../queue');

describe('Stacks', () => {
  var stack = new Stack();

  it('can tell us that the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('can push an item onto the stack', () => {
    stack.push('hello world');
    expect(this.stack.top).toStrictEqual('hello world');
  });
});

describe('Queues',() => {
  var queue = new Queue();
  it('can tell us that the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });
});
