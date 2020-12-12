'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  var linkedList = new LinkedList();
  /*
  Write tests to prove the following functionality:
    [X] Can successfully instantiate an empty linked list
    [X] Can properly insert into the linked list
    [X] The head property will properly point to the first node in the linked list
    [X] Can properly insert multiple nodes into the linked list
    [X] Will return true when finding a value within the linked list that exists
    [X] Will return false when searching for a value in the linked list that does not exist
    [ ] Can properly return a collection of all the values that exist in the linked list
 */

  it('can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toBe(null);
  });

  it('can properly insert into the linked list', () => {
    expect(linkedList.insert('foo').value).toStrictEqual('foo');
  });

  it('can properly have the head property point to the first node in the linked list' , () => {
    expect(linkedList.head.value).toStrictEqual('foo');
  });
  it('can properly insert multiple nodes into the linked list', () => {
    linkedList.insert('bar');
    expect(linkedList.head.value).toStrictEqual('bar');
    linkedList.insert('blah');
    expect(linkedList.head.value).toStrictEqual('blah');
  })
  
  it('can find a value and return true if it\'s in the linked list', () => {
    expect(linkedList.includes('foo')).toBe(true);
  })

  it('can return false when the value is not in the linked list', () => {
    expect(linkedList.includes('foobar')).toBe(false);
  })

  it('can return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.toString()).toStrictEqual('blah -> bar -> foo -> NULL');
  })
});
