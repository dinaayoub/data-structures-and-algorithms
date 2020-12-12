'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
    }

    insert(value){
        if (!value) throw new Error('No value provided to insert into linked list');
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    includes(value){
        if (!value) throw new Error('No value provided to search for in linked list');
        if (!this.head) return false;
        var currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.next;
        }
        if (currentNode.value === value) return true;
        else return false;
    }

    toString(){
        if (!this.head) return "NULL";
        var currentNode = this.head;
        var string = this.head.value;
        while (currentNode.next){
            currentNode = currentNode.next;
            string += ' -> ' + currentNode.value;
        }
        if (this.head) string += " -> NULL";
        return string;

    }

    append(value){
        if (!value) throw new Error('No value provided to append to linked list');
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        var newNode = new Node(value);
        currentNode.next = newNode;
        return newNode;
    }
}

module.exports = LinkedList;