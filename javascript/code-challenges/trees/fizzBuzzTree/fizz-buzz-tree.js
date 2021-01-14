'use strict';

const importedFiles = require('./node');
const KaryTree = importedFiles.KaryTree;
const Node = importedFiles.Node;
const util = require('util');

function fizzBuzzTree(tree) {
  var newTree = new KaryTree();
  newTree.root = new Node(getFizzBuzzString(tree.root.value));

  var recurse = (root, newRoot) => {
    root.children.forEach(child => {
      newRoot.children.push(new Node(getFizzBuzzString(child.value)));
      recurse(child, newRoot.children[newRoot.children.length-1]);
    });
  };

  recurse(tree.root,newTree.root);
  return newTree;
}

function getFizzBuzzString(value) {
  var fizzBuzzString;
  if (!(value % 3) && !(value % 5)) fizzBuzzString = 'FizzBuzz';
  else if (!(value % 3)) fizzBuzzString = 'Fizz';
  else if (!(value % 5)) fizzBuzzString = 'Buzz';
  else fizzBuzzString = `${value}`;
  return fizzBuzzString;
}

var karyTree = new KaryTree();
karyTree.root = new Node(15);
karyTree.root.children.push(new Node(34));
karyTree.root.children.push(new Node(54));
karyTree.root.children.push(new Node(24));
karyTree.root.children.push(new Node(90));
karyTree.root.children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[1].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[1].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[1].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[1].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[2].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[2].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[2].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[2].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[3].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[3].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[3].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[3].children.push(new Node(Math.floor(Math.random() * 100)));

karyTree.root.children[0].children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[1].children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[2].children[0].children.push(new Node(Math.floor(Math.random() * 100)));
karyTree.root.children[3].children[0].children.push(new Node(Math.floor(Math.random() * 100)));
console.log(util.inspect(karyTree, false, null, true));
console.log(util.inspect(fizzBuzzTree(karyTree), false, null, true));
