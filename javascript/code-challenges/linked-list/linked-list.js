'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!value) throw new Error('No value provided to insert into linked list');
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  includes(value) {
    if (!value) throw new Error('No value provided to search for in linked list');
    if (!this.head) return false;
    // var currentNode = this.head;
    // while (currentNode.next) {
    //     if (currentNode.value === value) return true;
    //     currentNode = currentNode.next;
    // }
    // if (currentNode.value === value) return true;
    // else return false;
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    if (!this.head) return 'NULL';
    var currentNode = this.head;
    var string = ``;
    while (currentNode) {
      string += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    string += 'NULL';
    return string;
  }

  append(value) {
    if (!value) throw new Error('No value provided to append to linked list');
    if (!this.head) return this.insert(value);
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    var newNode = new Node(value);
    currentNode.next = newNode;
    return newNode;
  }

  insertBefore(valueToSearchFor, newVal) {
    //input is value to insert a node before, and value to insert
    //output is added node with that value
    //fail first if the list is empty or the values we've received are empty
    if (!valueToSearchFor || !newVal) throw new Error('Value provided is blank');
    if (!this.head) throw new Error('The linked list is empty, cannot insert before value');

    //create previous node and current node variables.
    var currentNode = this.head;
    var previousNode = null;
    while (currentNode) {
      if (currentNode.value === valueToSearchFor) {
        //we found the value, insert before it (so at previous node)
        let newNode = new Node(newVal);
        //if the value we're searching for is at the head, then we need to:
        if (!previousNode) {
          //set head to the new node
          this.head = newNode;
        }
        else {
          //set previous node to point to the new node
          previousNode.next = newNode;
        }
        //set the new node to point to the "current node" which is the one that has the value
        newNode.next = currentNode;
        return newNode;
      } else {
        //move along in the linked list, we haven't found the value yet
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    throw new Error('Could not find the value provided in the linked list');
  }

  insertAfter(valueToSearchFor, newVal) {
    //fail first
    if (!valueToSearchFor || !newVal) throw new Error('Value provided is blank');
    if (!this.head) throw new Error('The linked list is empty, cannot insert before value');

    var currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === valueToSearchFor) {
        var newNode = new Node(newVal);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return newNode;
      }
      currentNode = currentNode.next;
    }
    throw new Error('Could not find the value provided in the linked list');
  }

  kthFromEnd(k) {
    //input is k, number from the end
    //output is value of item at k from the end
    if (k < 0) throw new Error('Invalid value for k');
    if (!Number.isInteger(k)) throw new Error('Invalid non-integer value for k');
    if (!this.head) throw new Error('Linked list is empty');
    var counter = this.getCount();

    var n = counter - k;
    if (n === 0) return this.head.value;
    if (n < 0) throw new Error('k is too large');
    var i = 0;
    var currentNode = this.head;
    while (i < n) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.value;
  }

  getCount() {
    var counter = 0;
    var currentNode = this.head;
    while (currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }
}

module.exports = LinkedList;
