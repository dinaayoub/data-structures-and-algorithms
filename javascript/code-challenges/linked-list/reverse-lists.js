'use strict';

const LinkedList = require('./linked-list');

function reverseList(linkedList) {

  if (!linkedList.head || !linkedList.head.next) return linkedList;

  var currentNode = linkedList.head;

  var previousNode;

  while (currentNode.next){
    linkedList.head = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = linkedList.head;
  }
  currentNode.next = previousNode;
  return linkedList;
}

var ll = new LinkedList();
//ll.append('a');
//ll.append('b');
//ll.append('c');
//ll.append('d');

console.log(ll.toString());
reverseList(ll);
console.log(ll.toString());
