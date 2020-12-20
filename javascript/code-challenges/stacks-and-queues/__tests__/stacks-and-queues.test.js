'use strict';

const Stack = require('../stack');
const Queue = require('../queue');

describe('Stacks', () => {
  var stack = new Stack();

  it('Can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully push onto a stack', () => {
    stack.push('a');
    expect(stack.top.value).toStrictEqual('a');
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push('b');
    stack.push('c');
    expect(stack.top.value).toStrictEqual('c');
    expect(stack.isEmpty()).toBe(false);
  });

  it('Can successfully pop off the stack', () => {
    var node = stack.pop();
    expect(node).toStrictEqual('c');
    expect(stack.top.value).toStrictEqual('b');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    while (stack.top) {
      stack.pop();
    }
    expect(stack.isEmpty()).toBe(true);
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push('d');
    stack.push('e');
    expect(stack.peek()).toStrictEqual('e');
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    while (stack.top) {
      stack.pop();
    }
    expect(() => { stack.pop(); }).toThrow();
    expect(() => { stack.peek(); }).toThrow();
  });
});

describe('Queues',() => {
  var queue = new Queue();

  it('Can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('Can successfully enqueue into a queue', () => {
    queue.enqueue('a');
    expect(queue.front.value).toStrictEqual('a');
  });

  // it('Can successfully enqueue multiple values into a queue', () => {
  //   queue.enqueue('b');
  //   queue.enqueue('c');
  //   queue.enqueue('d');
  //   expect(queue.front.value).toStrictEqual('a');
  //   expect(queue.rear.value).toStrictEqual('d');
  //   expect(queue.toString()). toStrictEqual('{a} -> {b} -> {c} -> {d} -> NULL');
  // });

});
