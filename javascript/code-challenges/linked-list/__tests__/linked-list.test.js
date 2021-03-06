'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');
const zipLists = require('../zip-lists');

describe('Linked List', () => {
  /*
  Write tests to prove the following functionality:
    [X] Can successfully instantiate an empty linked list
    [X] Can properly insert into the linked list
    [X] The head property will properly point to the first node in the linked list
    [X] Can properly insert multiple nodes into the linked list
    [X] Will return true when finding a value within the linked list that exists
    [X] Will return false when searching for a value in the linked list that does not exist
    [X] Can properly return a collection of all the values that exist in the linked list
 */

  describe('Operations inside a linked list: ', () => {
    var linkedList = new LinkedList();
  
    it('can successfully instantiate an empty linked list', () => {
      expect(linkedList.head).toBe(null);
    });

    it('can properly insert into the linked list', () => {
      expect(linkedList.insert('foo').value).toStrictEqual('foo');
    });

    it('can properly have the head property point to the first node in the linked list', () => {
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

    it('can return the appended item', () => {
      expect(linkedList.append('appended').value).toStrictEqual('appended');
    });

    it('can append an item correctly', () => {
      expect(linkedList.toString()).toStrictEqual('{blah} -> {bar} -> {foo} -> {appended} -> NULL');
    });

    it('can insertBefore an item in the middle of the list correctly', () => {
      linkedList.insertBefore('foo', 'before foo');
      expect(linkedList.toString()).toStrictEqual('{blah} -> {bar} -> {before foo} -> {foo} -> {appended} -> NULL')
    })

    it('can insertBefore an item at the head of the list correctly', () => {
      linkedList.insertBefore('blah', 'before blah');
      expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {before foo} -> {foo} -> {appended} -> NULL')
    })

    it('can insertAfter an item in the middle of the list correctly', () => {
      linkedList.insertAfter('bar', 'after bar');
      expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> NULL')
    })

    it('can insertAfter an item at the end of the list correctly', () => {
      linkedList.insertAfter('appended', 'after appended');
      expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> {after appended} -> NULL')
    })

    it('can append to an empty list', () => {
      let miniList = new LinkedList();
      miniList.append('hello');
      expect(miniList.head.value).toStrictEqual('hello');
    });

    it('can insert multiple nodes to the end of a linked list correctly', () => {
      linkedList.append('x');
      linkedList.append('y');
      linkedList.append('z');
      expect(linkedList.toString()).toStrictEqual('{before blah} -> {blah} -> {bar} -> {after bar} -> {before foo} -> {foo} -> {appended} -> {after appended} -> {x} -> {y} -> {z} -> NULL')
    })

    it('can return an element from the middle of the linked list using kthFromEnd', async () => {
      expect(linkedList.kthFromEnd(3)).toStrictEqual('after appended');
    })

    it('can find the first element in the list using kthFromEnd - where k and the length of the list are the same', async () => {
      expect(linkedList.kthFromEnd(10)).toStrictEqual('before blah');
    })

    it('can throw an error if k is greather than the length of the list', async () => {
      expect(() => { linkedList.kthFromEnd(11) }).toThrow();
    })

    it('can throw an error if k is a negative number', async () => {
      expect(() => { linkedList.kthFromEnd(-1) }).toThrow();
    })

    it('can throw an error if k is is not a positive integer', async () => {
      expect(() => { linkedList.kthFromEnd(1.5) }).toThrow();
    })

    it('can return the item if linked list size is 1', async () => {
      var miniList = new LinkedList();
      miniList.insert('foo');
      expect(miniList.kthFromEnd(0)).toStrictEqual('foo');
    });
  });
  describe('Operations on linked lists', () => {
    
    it('can zip two lists correctly', async () => {
      var ll1 = new LinkedList();
      ll1.append('a');
      ll1.append('c');
      ll1.append('e');
      
      var ll2 = new LinkedList();
      ll2.append('b');
      ll2.append('d');
      ll2.append('f');

      expect(zipLists(ll1,ll2).toString()).toStrictEqual('{a} -> {b} -> {c} -> {d} -> {e} -> {f} -> NULL');
    });
    
    it('can zip two lists if first list is empty', async () => {
      var ll1 = new LinkedList();
      
      var ll2 = new LinkedList();
      ll2.append('b');
      ll2.append('d');
      ll2.append('f');

      expect(zipLists(ll1,ll2).toString()).toStrictEqual('{b} -> {d} -> {f} -> NULL');
    });
    it('can zip two lists if second list is empty', async () => {
      var ll1 = new LinkedList();
      ll1.append('a');
      ll1.append('c');
      ll1.append('e');
      
      var ll2 = new LinkedList();
      
      expect(zipLists(ll1,ll2).toString()).toStrictEqual('{a} -> {c} -> {e} -> NULL');
    });

    it('can zip two lists if first list is shorter than the other', async () => {
      var ll1 = new LinkedList();
      ll1.append('a');
      
      var ll2 = new LinkedList();
      ll2.append('b');
      ll2.append('d');
      ll2.append('f');

      expect(zipLists(ll1,ll2).toString()).toStrictEqual('{a} -> {b} -> {d} -> {f} -> NULL');
    });

    it('can zip two lists if second list is shorter than the other', async () => {
      var ll1 = new LinkedList();
      ll1.append('a');
      ll1.append('c');
      ll1.append('e');
      
      var ll2 = new LinkedList();
      ll2.append('b');
      
      expect(zipLists(ll1,ll2).toString()).toStrictEqual('{a} -> {b} -> {c} -> {e} -> NULL');
 
    });
  });
});
