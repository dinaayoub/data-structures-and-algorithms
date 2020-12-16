'use strict';

const LinkedList = require("./linked-list");

function zipLists(linkedList1, linkedList2) {
    // if either of the lists is empty, return the other list. 
    // if both are empty, this works too, as it will just return null. 
    if (!linkedList1.head) return linkedList2;
    if (!linkedList2.head) return linkedList1;
    
    var currentNode1 = linkedList1.head;
    var currentNode2 = linkedList2.head;
    
    while (currentNode1.next) {
        if (currentNode2) {
            var temp = currentNode1.next;
            var nextNode2 = currentNode2.next;
            currentNode1.next = currentNode2;
            currentNode2.next = temp;

            currentNode1 = temp;
            currentNode2 = nextNode2;
        }
        else {
            //we've finished linked list 2, so break out and just return the head of ll1
            break;
        }
    }
    if (currentNode2) currentNode1.next = currentNode2;
    return linkedList1;
}


module.exports = zipLists;