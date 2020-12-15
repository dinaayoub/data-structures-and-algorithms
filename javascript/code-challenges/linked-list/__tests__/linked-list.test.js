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
  });
  
  it('can find a value and return true if it\'s in the linked list', () => {
    expect(linkedList.includes('foo')).toBe(true);
  });

  it('can return false when the value is not in the linked list', () => {
    expect(linkedList.includes('foobar')).toBe(false);
  });

  it('can return a collection of all the values that exist in the linked list', () => {
    expect(linkedList.toString()).toStrictEqual('{blah} -> {bar} -> {foo} -> NULL');
  });

  it('can return the appended item',() =>{
    expect(linkedList.append('appended').value).toStrictEqual('appended');
  });

  it('can append an item correctly', () => {
    expect(linkedList.toString()).toStrictEqual('{blah} -> {bar} -> {foo} -> {appended} -> NULL');
  });

  it('can insertBefore an item in the middle of the list correctly', () => {
    linkedList.insertBefore('foo','before foo');
    expect(linkedList.toString()).toStrictEqual('{blah} -> {bar} -> {before foo} -> {foo} -> {appended} -> NULL')
  })
  
  it('can insertBefore an item at the head of the list correctly', () => {
    linkedList.insertBefore('blah','before blah');
    expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {before foo} -> {foo} -> {appended} -> NULL')
  })
  
  it('can insertAfter an item in the middle of the list correctly', () => {
    linkedList.insertAfter('bar','after bar');
    expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> NULL')
  })

  it('can insertAfter an item at the end of the list correctly', () => {
    linkedList.insertAfter('appended','after appended');
    expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> {after appended} -> NULL')
  })

  it('can insert multiple nodes to the end of a linked list correctly', () => {
    linkedList.append('x');
    linkedList.append('y');
    linkedList.append('z');
    expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> {after appended} -> {x} -> {y} -> {z} -> NULL')
  })
});
