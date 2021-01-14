'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class KaryTree{
  constructor(){
    this.root = null;
  }
}

module.exports = {Node, KaryTree};
